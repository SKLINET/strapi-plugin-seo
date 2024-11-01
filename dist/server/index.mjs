import _ from "lodash";
const bootstrap = async ({ strapi: strapi2 }) => {
  const actions = [
    {
      section: "plugins",
      displayName: "Access the plugin settings",
      uid: "read",
      pluginName: "seo"
    }
  ];
  await strapi2.admin.services.permission.actionProvider.registerMany(actions);
};
const destroy = () => {
};
const register = () => {
};
const config = {
  default: {},
  validator() {
  }
};
const seoController = {
  findSeoComponent(ctx) {
    ctx.body = strapi.plugin("seo").service("seo").getSeoComponent();
  },
  findContentTypes(ctx) {
    ctx.body = strapi.plugin("seo").service("seo").getContentTypes();
  },
  async createSeoComponent(ctx) {
    strapi.reload.isWatching = false;
    try {
      const data = await strapi.plugin("seo").service("seo").createSeoComponent();
      if (data)
        setImmediate(() => strapi.reload());
      ctx.body = data;
    } catch (error) {
      console.log(error);
    }
  }
};
const settingsController = ({ strapi: strapi2 }) => {
  const settingsService2 = strapi2.plugins["seo"].services.settings;
  const getSettings = async (ctx) => {
    try {
      return settingsService2.getSettings();
    } catch (err) {
      ctx.throw(500, err);
    }
  };
  const setSettings = async (ctx) => {
    const { body } = ctx.request;
    try {
      await settingsService2.setSettings(body);
      return settingsService2.getSettings();
    } catch (err) {
      ctx.throw(500, err);
    }
  };
  return {
    getSettings,
    setSettings
  };
};
const controllers = {
  seo: seoController,
  settings: settingsController
};
const seoRoutes = {
  // accessible only from admin UI
  type: "admin",
  routes: [
    {
      method: "GET",
      path: "/component",
      handler: "seo.findSeoComponent",
      config: {
        policies: []
      }
    },
    {
      method: "POST",
      path: "/component",
      handler: "seo.createSeoComponent",
      config: {
        policies: []
      }
    },
    {
      method: "GET",
      path: "/content-types",
      handler: "seo.findContentTypes",
      config: {
        policies: []
      }
    }
  ]
};
const settingsRoutes = {
  // accessible only from admin UI
  type: "admin",
  routes: [
    {
      method: "GET",
      path: "/settings",
      handler: "settings.getSettings",
      config: { policies: [] }
    },
    {
      method: "POST",
      path: "/settings",
      handler: "settings.setSettings",
      config: { policies: [] }
    }
  ]
};
const routes = {
  seo: seoRoutes,
  settings: settingsRoutes
};
const collectionName$1 = "components_shared_seos";
const info$1 = {
  displayName: "seo",
  icon: "search"
};
const options$1 = {};
const attributes$1 = {
  metaTitle: {
    required: true,
    type: "string",
    maxLength: 60
  },
  metaDescription: {
    type: "string",
    required: true,
    maxLength: 160,
    minLength: 50
  },
  metaImage: {
    type: "media",
    multiple: false,
    required: false,
    allowedTypes: [
      "images"
    ]
  },
  openGraph: {
    type: "component",
    repeatable: false,
    component: "shared.open-graph"
  },
  keywords: {
    type: "text",
    regex: "[^,]+"
  },
  metaRobots: {
    type: "string",
    regex: "[^,]+"
  },
  metaViewport: {
    type: "string"
  },
  canonicalURL: {
    type: "string"
  },
  structuredData: {
    type: "json"
  }
};
const seoContent = {
  collectionName: collectionName$1,
  info: info$1,
  options: options$1,
  attributes: attributes$1
};
const collectionName = "components_shared_open_graphs";
const info = {
  displayName: "openGraph",
  icon: "project-diagram"
};
const options = {};
const attributes = {
  "og:title": {
    type: "string",
    required: true,
    maxLength: 70
  },
  "og:description": {
    type: "string",
    maxLength: 200,
    required: true
  },
  "og:image": {
    allowedTypes: [
      "images"
    ],
    type: "media",
    multiple: false
  },
  "og:url": {
    type: "string",
    required: false
  },
  "og:type": {
    type: "string",
    required: false
  }
};
const openGraph = {
  collectionName,
  info,
  options,
  attributes
};
const seoService = ({ strapi: strapi2 }) => ({
  getSeoComponent() {
    const seoComponent = strapi2.components["shared.seo"];
    return seoComponent ? { attributes: seoComponent.attributes, category: seoComponent.category } : null;
  },
  getContentTypes() {
    const contentTypes = strapi2.contentTypes;
    const keys = Object.keys(contentTypes);
    const blackListedPlugins = ["upload", "i18n", "users-permissions"];
    let collectionTypes = [];
    let singleTypes = [];
    let plugins = [];
    keys.forEach((name) => {
      const hasSharedSeoComponent = _.get(contentTypes[name], "attributes.seo.component", null);
      if (name.includes("api::") || contentTypes[name].__schema__.pluginOptions && contentTypes[name].__schema__.pluginOptions["content-manager"]?.visible === true) {
        const object = {
          seo: hasSharedSeoComponent ? true : false,
          uid: contentTypes[name]?.uid,
          kind: contentTypes[name]?.kind,
          globalId: contentTypes[name]?.globalId,
          attributes: contentTypes[name]?.attributes
        };
        if (name.includes("api::")) {
          contentTypes[name]?.kind === "collectionType" ? collectionTypes.push(object) : singleTypes.push(object);
        } else {
          blackListedPlugins.includes(name.replace("plugin::", "").split(".")[0]) ? null : plugins.push(object);
        }
      }
    });
    return { collectionTypes, singleTypes, plugins };
  },
  async createSeoComponent() {
    const seoComponent = await this.getSeoComponent();
    if (!seoComponent) {
      if (openGraph && seoContent) {
        try {
          const res = await strapi2.plugin("content-type-builder").services.components.createComponent({
            component: {
              category: "shared",
              displayName: seoContent.info.displayName,
              icon: seoContent.info.icon,
              attributes: seoContent.attributes
            },
            components: [
              {
                tmpUID: "shared.open-graph",
                category: "shared",
                displayName: openGraph.info.displayName,
                icon: openGraph.info.icon,
                attributes: openGraph.attributes
              }
            ]
          });
          return res;
        } catch (error) {
          console.log(error);
        }
      } else {
        return null;
      }
    }
  }
});
const settingsService = ({ strapi: strapi2 }) => {
  const getPluginStore = () => {
    return strapi2.store({
      environment: "",
      type: "plugin",
      name: "seo"
    });
  };
  const createDefaultConfig = async () => {
    const pluginStore = getPluginStore();
    const newContentTypes = {};
    const keys = Object.keys(strapi2.contentTypes);
    keys.map((key) => {
      if (key.includes("api::")) {
        newContentTypes[key] = {};
        newContentTypes[key]["collectionName"] = key.split(".").pop();
        newContentTypes[key]["seoChecks"] = {
          metaTitle: true,
          metaDescription: true,
          metaRobots: true,
          openGraph: true,
          wordCount: true,
          canonicalUrl: true,
          keywordDensity: true,
          structuredData: true,
          alternativeText: true,
          lastUpdatedAt: true
        };
      }
    });
    const value = newContentTypes;
    await pluginStore.set({ key: "settings", value });
    return pluginStore.get({ key: "settings" });
  };
  const createConfigFromData = async (settings) => {
    const value = settings;
    const pluginStore = getPluginStore();
    await pluginStore.set({ key: "settings", value });
    return pluginStore.get({ key: "settings" });
  };
  const getSettings = async () => {
    const pluginStore = getPluginStore();
    let config2 = await pluginStore.get({ key: "settings" });
    if (!config2) {
      config2 = await createDefaultConfig();
    }
    return config2;
  };
  const setSettings = async (data) => {
    return createConfigFromData(data);
  };
  return {
    getSettings,
    setSettings
  };
};
const services = {
  seo: seoService,
  settings: settingsService
};
const index = {
  register,
  bootstrap,
  destroy,
  config,
  controllers,
  routes,
  services
};
export {
  index as default
};
//# sourceMappingURL=index.mjs.map
