"use strict";
const icons = require("@strapi/icons");
const React = require("react");
const jsxRuntime = require("react/jsx-runtime");
const admin = require("@strapi/strapi/admin");
const reactIntl = require("react-intl");
const designSystem = require("@strapi/design-system");
const isEqual = require("lodash/isEqual");
const isNull = require("lodash/isNull");
const isEmpty = require("lodash/isEmpty");
const get = require("lodash/get");
const isNumber = require("lodash/isNumber");
const dateFns = require("date-fns");
const isArray = require("lodash/isArray");
const showdown = require("showdown");
require("lodash/last");
const pull = require("lodash/pull");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespace(React);
const isEqual__default = /* @__PURE__ */ _interopDefault(isEqual);
const isNull__default = /* @__PURE__ */ _interopDefault(isNull);
const isEmpty__default = /* @__PURE__ */ _interopDefault(isEmpty);
const get__default = /* @__PURE__ */ _interopDefault(get);
const isNumber__default = /* @__PURE__ */ _interopDefault(isNumber);
const isArray__default = /* @__PURE__ */ _interopDefault(isArray);
const showdown__default = /* @__PURE__ */ _interopDefault(showdown);
const pull__default = /* @__PURE__ */ _interopDefault(pull);
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const name$1 = "@strapi/plugin-seo";
const version = "2.0.1";
const description = "Make your Strapi content SEO friendly.";
const keywords = [];
const type = "commonjs";
const exports$1 = {
  "./package.json": "./package.json",
  "./strapi-admin": {
    source: "./admin/src/index.js",
    "import": "./dist/admin/index.mjs",
    require: "./dist/admin/index.js",
    "default": "./dist/admin/index.js"
  },
  "./strapi-server": {
    source: "./server/src/index.js",
    "import": "./dist/server/index.mjs",
    require: "./dist/server/index.js",
    "default": "./dist/server/index.js"
  }
};
const files = [
  "dist"
];
const scripts = {
  build: "strapi-plugin build",
  verify: "strapi-plugin verify",
  watch: "strapi-plugin watch",
  "watch:link": "strapi-plugin watch:link"
};
const dependencies = {
  "@strapi/design-system": "^2.0.0-rc.10",
  "@strapi/icons": "^2.0.0-rc.10",
  "date-fns": "^4.1.0",
  lodash: "^4.17.21",
  prettier: "^3.3.3",
  react: "^18.0.0",
  "react-dom": "^18.0.0",
  "react-intl": "^6.6.8",
  "react-router-dom": "^6.0.0",
  showdown: "^2.1.0",
  "styled-components": "^6.0.0"
};
const devDependencies = {
  "@strapi/sdk-plugin": "5.2.6",
  "@strapi/strapi": "^5.0.6"
};
const peerDependencies = {
  "@strapi/strapi": "^5.0.6"
};
const repository = {
  type: "git",
  url: "https://github.com/strapi/strapi-plugin-seo.git"
};
const resolutions = {
  yargs: "^17.2.1",
  prettier: "3.3.3"
};
const author = {
  name: "Strapi Solutions SAS",
  email: "hi@strapi.io",
  url: "https://strapi.io"
};
const maintainers = [
  {
    name: "Strapi Solutions SAS",
    email: "hi@strapi.io",
    url: "https://strapi.io"
  }
];
const strapi = {
  name: "seo",
  displayName: "SEO",
  description: "Make your Strapi content SEO friendly.",
  kind: "plugin"
};
const pluginPkg = {
  name: name$1,
  version,
  description,
  keywords,
  type,
  exports: exports$1,
  files,
  scripts,
  dependencies,
  devDependencies,
  peerDependencies,
  repository,
  resolutions,
  author,
  maintainers,
  strapi
};
const pluginId = pluginPkg.name.replace(/^@strapi\/plugin-/i, "");
const Initializer = ({ setPlugin }) => {
  const ref = React__namespace.useRef(void 0);
  ref.current = setPlugin;
  React__namespace.useEffect(() => {
    if (ref.current) {
      ref.current(pluginId);
    }
  }, []);
  return null;
};
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_PONCTUAL":
      return {
        ...state,
        [action.value.entity]: {
          qualityVerdict: action.value?.qualityVerdict,
          message: action.value?.message
        }
      };
    case "UPDATE_FOR_PREVIEW":
      return action.value;
    default:
      throw new Error();
  }
}
const Illo = () => /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "159", height: "88", viewBox: "0 0 159 88", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsxRuntime.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M134.933 17.417C137.768 17.417 140.067 19.7153 140.067 22.5503C140.067 25.3854 137.768 27.6837 134.933 27.6837H105.6C108.435 27.6837 110.733 29.9819 110.733 32.817C110.733 35.6521 108.435 37.9503 105.6 37.9503H121.733C124.568 37.9503 126.867 40.2486 126.867 43.0837C126.867 45.9187 124.568 48.217 121.733 48.217H114.272C110.698 48.217 107.8 50.5153 107.8 53.3503C107.8 55.2404 109.267 56.9515 112.2 58.4837C115.035 58.4837 117.333 60.7819 117.333 63.617C117.333 66.4521 115.035 68.7503 112.2 68.7503H51.3333C48.4982 68.7503 46.2 66.4521 46.2 63.617C46.2 60.7819 48.4982 58.4837 51.3333 58.4837H22.7333C19.8982 58.4837 17.6 56.1854 17.6 53.3503C17.6 50.5153 19.8982 48.217 22.7333 48.217H52.0666C54.9017 48.217 57.2 45.9187 57.2 43.0837C57.2 40.2486 54.9017 37.9503 52.0666 37.9503H33.7333C30.8982 37.9503 28.6 35.6521 28.6 32.817C28.6 29.9819 30.8982 27.6837 33.7333 27.6837H63.0666C60.2316 27.6837 57.9333 25.3854 57.9333 22.5503C57.9333 19.7153 60.2316 17.417 63.0666 17.417H134.933ZM134.933 37.9503C137.768 37.9503 140.067 40.2486 140.067 43.0837C140.067 45.9187 137.768 48.217 134.933 48.217C132.098 48.217 129.8 45.9187 129.8 43.0837C129.8 40.2486 132.098 37.9503 134.933 37.9503Z",
      fill: "#DBDBFA"
    }
  ),
  /* @__PURE__ */ jsxRuntime.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M95.826 16.6834L102.647 66.4348L103.26 71.4261C103.458 73.034 102.314 74.4976 100.706 74.695L57.7621 79.9679C56.1542 80.1653 54.6906 79.0219 54.4932 77.4139L47.8816 23.5671C47.7829 22.7631 48.3546 22.0313 49.1586 21.9326C49.1637 21.932 49.1688 21.9313 49.1739 21.9307L52.7367 21.5311L95.826 16.6834ZM55.6176 21.208L58.9814 20.8306Z",
      fill: "white"
    }
  ),
  /* @__PURE__ */ jsxRuntime.jsx(
    "path",
    {
      d: "M55.6176 21.208L58.9814 20.8306M95.826 16.6834L102.647 66.4348L103.26 71.4261C103.458 73.034 102.314 74.4976 100.706 74.695L57.7621 79.9679C56.1542 80.1653 54.6906 79.0219 54.4932 77.4139L47.8816 23.5671C47.7829 22.7631 48.3546 22.0313 49.1586 21.9326C49.1637 21.932 49.1688 21.9313 49.1739 21.9307L52.7367 21.5311L95.826 16.6834Z",
      stroke: "#7E7BF6",
      strokeWidth: "2.5"
    }
  ),
  /* @__PURE__ */ jsxRuntime.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M93.9695 19.8144L100.144 64.9025L100.699 69.4258C100.878 70.8831 99.8559 72.2077 98.416 72.3845L59.9585 77.1065C58.5185 77.2833 57.2062 76.2453 57.0272 74.7881L51.0506 26.112C50.9519 25.308 51.5236 24.5762 52.3276 24.4775L57.0851 23.8934",
      fill: "#F0F0FF"
    }
  ),
  /* @__PURE__ */ jsxRuntime.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M97.701 7.33301H64.2927C63.7358 7.33301 63.2316 7.55873 62.8667 7.92368C62.5017 8.28862 62.276 8.79279 62.276 9.34967V65.083C62.276 65.6399 62.5017 66.1441 62.8667 66.509C63.2316 66.874 63.7358 67.0997 64.2927 67.0997H107.559C108.116 67.0997 108.62 66.874 108.985 66.509C109.35 66.1441 109.576 65.6399 109.576 65.083V19.202C109.576 18.6669 109.363 18.1537 108.985 17.7755L99.1265 7.92324C98.7484 7.54531 98.2356 7.33301 97.701 7.33301Z",
      fill: "white",
      stroke: "#7F7CFA",
      strokeWidth: "2.5"
    }
  ),
  /* @__PURE__ */ jsxRuntime.jsx(
    "path",
    {
      d: "M98.026 8.17871V16.6833C98.026 17.8983 99.011 18.8833 100.226 18.8833H106.044",
      stroke: "#807EFA",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ jsxRuntime.jsx(
    "path",
    {
      d: "M70.1594 56.2838H89.2261M70.1594 18.8838H89.2261H70.1594ZM70.1594 27.6838H101.693H70.1594ZM70.1594 37.2171H101.693H70.1594ZM70.1594 46.7505H101.693H70.1594Z",
      stroke: "#817FFA",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
] });
const qualityVerdict = {
  good: "good",
  improvements: "improvements",
  bad: "bad"
};
const getMetaTitleCheckPreview = (modifiedData) => {
  const metaTitle = get__default.default(modifiedData, "seo.metaTitle");
  let status = {
    message: "",
    qualityVerdict: qualityVerdict.good
  };
  if (isNull__default.default(metaTitle) || isEmpty__default.default(metaTitle)) {
    status = {
      message: "",
      qualityVerdict: qualityVerdict.improvements
    };
  } else if (metaTitle.length > 60) {
    status = {
      message: "",
      qualityVerdict: qualityVerdict.bad
    };
  }
  return status;
};
const getMetaDescriptionPreview = (modifiedData) => {
  const metaDescription = get__default.default(modifiedData, "seo.metaDescription");
  let status = {
    message: "",
    qualityVerdict: qualityVerdict.good
  };
  if (isNull__default.default(metaDescription) || isEmpty__default.default(metaDescription)) {
    status = {
      message: "",
      qualityVerdict: qualityVerdict.improvements
    };
  } else if (metaDescription.length > 160) {
    status = {
      message: "",
      qualityVerdict: qualityVerdict.bad
    };
  } else if (metaDescription.length < 50) {
    status = {
      message: "",
      qualityVerdict: qualityVerdict.bad
    };
  }
  return status;
};
const getAlternativeTextPreview = (emptyAltCount) => {
  const intersections = get__default.default(emptyAltCount, "intersections", null);
  const richTextAlts = get__default.default(emptyAltCount, "richTextAlts", null);
  const altTexts = get__default.default(emptyAltCount, "altTexts", null);
  let status = {
    message: "",
    qualityVerdict: qualityVerdict.good
  };
  const missingRichTextAlt = richTextAlts.filter((x) => x.occurences != 0).length;
  if (intersections === 0) {
    status = {
      message: "",
      qualityVerdict: qualityVerdict.bad
    };
  } else if (altTexts.includes("")) {
    status = {
      message: "",
      qualityVerdict: qualityVerdict.improvements
    };
  } else if (missingRichTextAlt >= 1) {
    status = {
      message: "",
      qualityVerdict: qualityVerdict.improvements
    };
  }
  return status;
};
const getWordCountPreview = (wordCount) => {
  let status = {
    message: "",
    qualityVerdict: qualityVerdict.good
  };
  if (isNull__default.default(wordCount)) {
    status = {
      message: "",
      qualityVerdict: qualityVerdict.improvements
    };
    return;
  } else if (wordCount < 300) {
    status = {
      message: "",
      qualityVerdict: qualityVerdict.improvements
    };
  }
  return status;
};
const getKeywordDensityPreview = (keywordsDensity) => {
  let status = {
    message: "",
    qualityVerdict: qualityVerdict.good
  };
  if (isEmpty__default.default(keywordsDensity)) {
    status = {
      message: "",
      qualityVerdict: qualityVerdict.improvements
    };
    return status;
  }
  Object.keys(keywordsDensity).map((keyword) => {
    if (get__default.default(keywordsDensity[keyword], "count", 0) === 0) {
      status = {
        message: "",
        qualityVerdict: qualityVerdict.improvements
      };
    } else if (get__default.default(keywordsDensity[keyword], "count", 0) <= 1) {
      status = {
        message: "",
        qualityVerdict: qualityVerdict.bad
      };
    }
  });
  return status;
};
const canonicalUrlPreview = (modifiedData) => {
  const canonicalUrl = get__default.default(modifiedData, "seo.canonicalURL");
  let status = {
    message: "",
    qualityVerdict: qualityVerdict.good
  };
  if (isNull__default.default(canonicalUrl)) {
    status = {
      message: "",
      qualityVerdict: qualityVerdict.bad
    };
  }
  return status;
};
const lastUpdatedAtPreview = (modifiedData) => {
  const updatedAt = get__default.default(modifiedData, "updatedAt");
  let status = {
    message: "",
    qualityVerdict: qualityVerdict.improvements
  };
  if (isNull__default.default(updatedAt)) {
    status = {
      message: "",
      qualityVerdict: qualityVerdict.bad
    };
  } else {
    const oneYearAgo = Date.parse(new Date((/* @__PURE__ */ new Date()).setFullYear((/* @__PURE__ */ new Date()).getFullYear() - 1)));
    if (Date.parse(updatedAt) >= oneYearAgo) {
      status = {
        message: "",
        qualityVerdict: qualityVerdict.good
      };
    }
  }
  return status;
};
const metaRobotPreview = (modifiedData) => {
  const metaRobots = get__default.default(modifiedData, "seo.metaRobots");
  let status = {
    message: "",
    qualityVerdict: qualityVerdict.good
  };
  if (isNull__default.default(metaRobots) || isEmpty__default.default(metaRobots)) {
    status = {
      message: "",
      qualityVerdict: qualityVerdict.good
    };
  }
  return status;
};
const openGraphPreview = (modifiedData) => {
  const openGraph = get__default.default(modifiedData, "seo.openGraph");
  let status = {
    message: "",
    qualityVerdict: qualityVerdict.good
  };
  if (isNull__default.default(openGraph) || openGraph === void 0) {
    status = {
      message: "",
      qualityVerdict: qualityVerdict.bad
    };
    return status;
  } else if (!openGraph["og:title"] || !openGraph["og:description"] || !openGraph["og:image"]) {
    status = {
      message: "",
      qualityVerdict: qualityVerdict.improvements
    };
  }
  return status;
};
const structuredDataPreview = (modifiedData) => {
  const structuredData = get__default.default(modifiedData, "seo.structuredData");
  let status = {
    message: "",
    qualityVerdict: qualityVerdict.good
  };
  if (isEmpty__default.default(structuredData)) {
    status = {
      message: "",
      qualityVerdict: qualityVerdict.bad
    };
  }
  return status;
};
const SEOAccordion = ({ title, status, component, label }) => {
  const getIcon = () => {
    switch (status?.qualityVerdict) {
      case qualityVerdict.good:
        return icons.CheckCircle;
      case qualityVerdict.improvements:
        return icons.WarningCircle;
      case qualityVerdict.bad:
        return icons.CrossCircle;
      default:
        return icons.WarningCircle;
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Accordion.Root, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Accordion.Item, { value: "acc-01", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Accordion.Header, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Accordion.Trigger, { icon: getIcon(), children: title }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Accordion.Actions, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.IconButton, { label, withTooltip: false, children: /* @__PURE__ */ jsxRuntime.jsx(icons.Information, {}) }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Accordion.Content, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, paddingLeft: 4, paddingBottom: 4, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "omega", children: status?.message }) }),
      component && component
    ] })
  ] }) });
};
const getTrad = (id) => `${pluginId}.${id}`;
const robotTags = [
  { name: "noindex", message: "Search engines will index this page." },
  {
    name: "nofollow",
    message: "Search engines will follow links from this page"
  },
  { name: "noarchive", message: "Search engines will cache your page." },
  {
    name: "nosnippet",
    message: "Search engines will show a snippet of this page in search results."
  },
  {
    name: "noimageindex",
    message: "Google will index the images on this page."
  },
  {
    name: "nositelinkssearchbox",
    message: "Google will show the search box in search results."
  }
];
const MetaRobotCheck = ({ metaRobots, checks }) => {
  const { formatMessage } = reactIntl.useIntl();
  const dispatch = React__namespace.useContext(SeoCheckerContext);
  let status = {
    message: formatMessage({
      id: getTrad("SEOChecks.metaRobotsCheck.default"),
      defaultMessage: "Robot meta tags have been found!"
    }),
    qualityVerdict: qualityVerdict.good
  };
  const [tags, setTags] = React__namespace.useState([]);
  React__namespace.useEffect(() => {
    if (isNull__default.default(metaRobots) || isEmpty__default.default(metaRobots)) {
      status = {
        message: formatMessage({
          id: getTrad("SEOChecks.metaRobotsCheck.not-found"),
          defaultMessage: "No Robot meta tags have been found."
        }),
        qualityVerdict: qualityVerdict.good
      };
    } else {
      setTags(metaRobots.split(","));
    }
    if (!isEqual__default.default(status, checks.metaRobots))
      dispatch({
        type: "UPDATE_PONCTUAL",
        value: { ...status, entity: "metaRobots" }
      });
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SEOAccordion,
    {
      title: formatMessage({
        id: getTrad("SEOModal.summary-title.meta-robots"),
        defaultMessage: "Meta Robots"
      }),
      status: checks.metaRobots,
      label: formatMessage({
        id: getTrad("SEOChecks.metaRobotsCheck.label"),
        defaultMessage: "The robots meta tag informs search engines which pages on your site should be indexed and more."
      }),
      component: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { padding: 2, background: "neutral100", children: [
        robotTags.map((tag, index2) => /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { spacing: 2, horizontal: true, padding: 2, children: [
          tags.find((x) => x.trim() === tag.name) ? /* @__PURE__ */ jsxRuntime.jsx(icons.CheckCircle, { "aria-hidden": true, fill: `success600` }) : /* @__PURE__ */ jsxRuntime.jsx(icons.WarningCircle, { "aria-hidden": true, fill: `warning600` }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { paddingLeft: 1, children: tags.find((x) => x.trim() === tag.name) ? `${tag.name} is activated:
          ${tag.message.replace("will", "will not")}` : `${tag.name} is disabled: ${tag.message}` })
        ] }, index2)),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { spacing: 2, paddingTop: 4, paddingLeft: 2, paddingRight: 2, paddingBottom: 4, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Status, { variant: "secondary", showBullet: false, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", children: "Notice: " }),
          "In order to not index your entry and no follow, your MetaRobots field should contain the following:",
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", children: " noindex, nofollow " }),
          '. The rest should be handled by your front-end code logic. "If the field contains noindex, then you need to create the corresponding meta tag etc..."'
        ] }) }) })
      ] })
    }
  );
};
const WordCountCheck = ({ wordCount, checks }) => {
  const { formatMessage } = reactIntl.useIntl();
  const dispatch = React__namespace.useContext(SeoCheckerContext);
  let status = {
    message: formatMessage({
      id: getTrad("SEOChecks.wordCountCheck.default"),
      defaultMessage: "You have more than 300 words. The word counter is not a direct ranking factor. But your content should be as high quality as possible, with relevant and unique information. To meet these conditions, your content requires a minimum of paragraphs, and therefore of words."
    }),
    qualityVerdict: qualityVerdict.good
  };
  React__namespace.useEffect(() => {
    if (isNull__default.default(wordCount)) {
      status = {
        message: formatMessage({
          id: getTrad("SEOChecks.wordCountCheck.not-found"),
          defaultMessage: "No Richtext content have been found."
        }),
        qualityVerdict: qualityVerdict.improvements
      };
      return;
    } else if (wordCount < 300) {
      status = {
        message: formatMessage({
          id: getTrad("SEOChecks.wordCountCheck.300"),
          defaultMessage: "Your 1st level Richtext contents have less than 300 words."
        }),
        qualityVerdict: qualityVerdict.improvements
      };
    }
    if (!isEqual__default.default(status, checks.wordCount))
      dispatch({
        type: "UPDATE_PONCTUAL",
        value: { ...status, entity: "wordCount" }
      });
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SEOAccordion,
    {
      title: formatMessage({
        id: getTrad("SEOModal.summary-title.word-counter"),
        defaultMessage: "Word Counter"
      }),
      status: checks.wordCount,
      label: formatMessage({
        id: getTrad("SEOChecks.wordCountCheck.label"),
        defaultMessage: "Your content should be as high quality as possible, with relevant and unique information. You entry requires a minimum of paragraphs, and therefore of words."
      }),
      component: isNumber__default.default(wordCount) && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { padding: 4, background: "neutral100", children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { variant: "omega", fontWeight: "bold", children: [
        formatMessage({
          id: getTrad("SEOChecks.wordCountCheck.words"),
          defaultMessage: "Words:"
        }),
        " ",
        wordCount
      ] }) })
    }
  );
};
const MetaTitleCheck = ({ metaTitle, checks }) => {
  const { formatMessage } = reactIntl.useIntl();
  const dispatch = React__namespace.useContext(SeoCheckerContext);
  const maxLength = 60;
  let status = {
    message: formatMessage({
      id: getTrad("SEOChecks.metaTitleCheck.default"),
      defaultMessage: "A Meta Title has been found!"
    }),
    qualityVerdict: qualityVerdict.good
  };
  React__namespace.useEffect(() => {
    if (isNull__default.default(metaTitle) || isEmpty__default.default(metaTitle)) {
      status = {
        message: formatMessage({
          id: getTrad("SEOChecks.metaTitleCheck.not-found"),
          defaultMessage: "No Meta Title has been found."
        }),
        qualityVerdict: qualityVerdict.improvements
      };
    } else if (metaTitle.length > maxLength) {
      status = {
        message: formatMessage({
          id: getTrad("Title-settings.metaTitle-too-long"),
          defaultMessage: "Meta Title is too long"
        }),
        qualityVerdict: qualityVerdict.bad
      };
    }
    if (!isEqual__default.default(status, checks.metaTitle))
      dispatch({
        type: "UPDATE_PONCTUAL",
        value: { ...status, entity: "metaTitle" }
      });
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SEOAccordion,
    {
      title: formatMessage({
        id: getTrad("SEOModal.summary-title.meta-title"),
        defaultMessage: "Meta title"
      }),
      status: checks.metaTitle,
      label: formatMessage({
        id: getTrad("Title-settings.metaTitle-tooltip"),
        defaultMessage: "The title tag is the clickable title of a webpage that appears with the result on the SERP (search engine page results page).\n You should aim to make your SEO titles around 60 characters long. Clear title tags will go a long way towards making your website easy to read and understand."
      }),
      component: metaTitle && /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { padding: 4, background: "neutral100", children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "omega", fontWeight: "semiBold", children: metaTitle }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 2, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { horizontal: true, spacing: 2, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.ProgressBar,
            {
              size: "M",
              value: metaTitle.length * 100 / maxLength > 100 ? 100 : metaTitle.length * 100 / maxLength
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { variant: "pi", padding: 2, children: [
            "(",
            metaTitle.length,
            "/",
            maxLength,
            ")"
          ] })
        ] }) })
      ] })
    }
  );
};
const OpenGraphCheck = ({ openGraph, checks }) => {
  const { formatMessage } = reactIntl.useIntl();
  const dispatch = React__namespace.useContext(SeoCheckerContext);
  let status = {
    message: "",
    qualityVerdict: qualityVerdict.good
  };
  React__namespace.useEffect(() => {
    if (isNull__default.default(openGraph) || openGraph === void 0) {
      status = {
        message: formatMessage({
          id: getTrad("SEOChecks.openGraphCheck.not-found"),
          defaultMessage: "No OpenGraph tags have been found."
        }),
        qualityVerdict: qualityVerdict.bad
      };
    } else if (!openGraph["og:title"] || !openGraph["og:description"] || !openGraph["og:image"]) {
      status = {
        message: formatMessage({
          id: getTrad("SEOChecks.openGraphCheck.not-configured"),
          defaultMessage: "OpenGraph minimum required tags are not configured."
        }),
        qualityVerdict: qualityVerdict.improvements
      };
    } else {
      status = {
        message: `${formatMessage({
          id: getTrad("SEOChecks.openGraphCheck.configured"),
          defaultMessage: "OpenGraph tags are configured"
        })}`,
        qualityVerdict: qualityVerdict.good
      };
    }
    if (!isEqual__default.default(status, checks.openGraph))
      dispatch({
        type: "UPDATE_PONCTUAL",
        value: { ...status, entity: "openGraph" }
      });
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SEOAccordion,
    {
      title: formatMessage({
        id: getTrad("SEOModal.summary-title.meta-social"),
        defaultMessage: "OpenGraph Tags"
      }),
      status: checks.openGraph,
      label: formatMessage({
        id: getTrad("SEOChecks.openGraphCheck.label"),
        defaultMessage: "OpenGraph tags allow you to manage the title, description & image of your posts."
      })
    }
  );
};
const CanonicalUrlCheck = ({ canonicalUrl, checks }) => {
  const { formatMessage } = reactIntl.useIntl();
  const dispatch = React__namespace.useContext(SeoCheckerContext);
  let status = {
    message: formatMessage({
      id: getTrad("SEOChecks.canonicalUrlCheck.found"),
      defaultMessage: "A canonical URL has been found."
    }),
    qualityVerdict: qualityVerdict.good
  };
  React__namespace.useEffect(() => {
    if (isNull__default.default(canonicalUrl)) {
      status = {
        message: formatMessage({
          id: getTrad("SEOChecks.canonicalUrlCheck.default"),
          defaultMessage: "No Canonical URL has been found."
        }),
        qualityVerdict: qualityVerdict.bad
      };
    }
    if (!isEqual__default.default(status, checks.canonicalUrl))
      dispatch({
        type: "UPDATE_PONCTUAL",
        value: { ...status, entity: "canonicalUrl" }
      });
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SEOAccordion,
    {
      title: formatMessage({
        id: getTrad("SEOModal.summary-title.canonical-url"),
        defaultMessage: "Canonical URL"
      }),
      status: checks.canonicalUrl,
      label: formatMessage({
        id: getTrad("SEOChecks.canonicalUrlCheck.label"),
        defaultMessage: "This will check if you have a canonical URL."
      }),
      component: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { padding: canonicalUrl ? 4 : 0, background: "neutral100", children: canonicalUrl && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "omega", fontWeight: "bold", children: canonicalUrl }) })
    }
  );
};
const LastUpdatedAtCheck = ({ updatedAt, checks }) => {
  const { formatMessage } = reactIntl.useIntl();
  const dispatch = React__namespace.useContext(SeoCheckerContext);
  let status = {
    message: formatMessage({
      id: getTrad("SSEOChecks.lastUpdatedAtCheck.default"),
      defaultMessage: "This content was modified over a year ago! Search engines love fresh content."
    }),
    qualityVerdict: qualityVerdict.improvements
  };
  React__namespace.useEffect(() => {
    if (isNull__default.default(updatedAt)) {
      status = {
        message: formatMessage({
          id: getTrad("SEOChecks.lastUpdatedAtCheck.save-content"),
          defaultMessage: "You must save this entry first."
        }),
        qualityVerdict: qualityVerdict.bad
      };
    } else {
      const oneYearAgo = Date.parse(new Date((/* @__PURE__ */ new Date()).setFullYear((/* @__PURE__ */ new Date()).getFullYear() - 1)));
      if (Date.parse(updatedAt) >= oneYearAgo) {
        status = {
          message: formatMessage({
            id: getTrad("SEOChecks.lastUpdatedAtCheck.success"),
            defaultMessage: "Awesome! This content was last modified in less than an year ago!"
          }),
          qualityVerdict: qualityVerdict.good
        };
      }
    }
    if (!isEqual__default.default(status, checks.lastUpdatedAt))
      dispatch({
        type: "UPDATE_PONCTUAL",
        value: { ...status, entity: "lastUpdatedAt" }
      });
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SEOAccordion,
    {
      title: formatMessage({
        id: getTrad("SEOModal.summary-title.last-updated-at"),
        defaultMessage: "Last updated at"
      }),
      label: formatMessage({
        id: getTrad("SEOChecks.lastUpdatedAtCheck.label"),
        defaultMessage: "Search engines love fresh content. This will check if your entry was last modified in less than an year ago."
      }),
      status: checks.lastUpdatedAt,
      component: updatedAt && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { padding: 4, background: "neutral100", children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { variant: "omega", children: [
        formatMessage({
          id: getTrad('SEOChecks.lastUpdatedAtCheck.last"'),
          defaultMessage: "Last updated at:"
        }),
        " ",
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { variant: "omega", fontWeight: "bold", children: [
          " ",
          dateFns.formatDistance(new Date(updatedAt), /* @__PURE__ */ new Date(), {
            addSuffix: true
          })
        ] })
      ] }) })
    }
  );
};
const KeywordDensityCheck = ({ keywordsDensity, checks }) => {
  const { formatMessage } = reactIntl.useIntl();
  const dispatch = React__namespace.useContext(SeoCheckerContext);
  let status = {
    message: formatMessage({
      id: getTrad("SEOChecks.keywordsDensityCheck.default"),
      defaultMessage: "Every keywords are used more than 2 times."
    }),
    qualityVerdict: qualityVerdict.good
  };
  React__namespace.useEffect(() => {
    if (isEmpty__default.default(keywordsDensity)) {
      status = {
        message: formatMessage({
          id: getTrad("SEOChecks.keywordsDensityCheck.no-keywords"),
          defaultMessage: "No keywords were found in your SEO component."
        }),
        qualityVerdict: qualityVerdict.improvements
      };
    } else {
      Object.keys(keywordsDensity).map((keyword) => {
        if (get__default.default(keywordsDensity[keyword], "count", 0) === 0) {
          status = {
            message: formatMessage({
              id: getTrad("SEOChecks.keywordsDensityCheck.one-not-used"),
              defaultMessage: "One keyword is not being used in your content."
            }),
            qualityVerdict: qualityVerdict.improvements
          };
        } else if (get__default.default(keywordsDensity[keyword], "count", 0) <= 1) {
          status = {
            message: formatMessage({
              id: getTrad("SEOChecks.keywordsDensityCheck.one-used-once"),
              defaultMessage: "One keyword is only used once in your content."
            }),
            qualityVerdict: qualityVerdict.bad
          };
        }
      });
    }
    if (!isEqual__default.default(status, checks.keywordsDensity))
      dispatch({
        type: "UPDATE_PONCTUAL",
        value: { ...status, entity: "keywordsDensity" }
      });
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SEOAccordion,
    {
      title: formatMessage({
        id: getTrad("SEOModal.summary-title.word-densisty"),
        defaultMessage: "Keyword Density"
      }),
      status: checks.keywordsDensity,
      label: formatMessage({
        id: getTrad("SEOChecks.keywordsDensityCheck.label"),
        defaultMessage: "Define keywords you want to rank for in your SEO component. This will analyse the density of your keywords in your 1st level richtext editors."
      }),
      component: keywordsDensity && !isEmpty__default.default(keywordsDensity) && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { padding: 2, background: "neutral100", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { wrap: "wrap", children: Object.keys(keywordsDensity).map((keyword) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { padding: 2, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Badge, { children: `${keyword}:
                      ${get__default.default(keywordsDensity[keyword], "count", 0).toString()}` }) }, keyword)) }) })
    }
  );
};
const StructuredDataCheck = ({ structuredData, checks }) => {
  const { formatMessage } = reactIntl.useIntl();
  const dispatch = React__namespace.useContext(SeoCheckerContext);
  let status = {
    message: formatMessage({
      id: getTrad("SEOChecks.structuredDataCheck.default"),
      defaultMessage: "A Structured Data json has been found! However we can validate the accuracy of its content."
    }),
    qualityVerdict: qualityVerdict.good
  };
  React__namespace.useEffect(() => {
    if (isEmpty__default.default(structuredData)) {
      status = {
        message: formatMessage({
          id: getTrad("SEOChecks.structuredDataCheck.not-found"),
          defaultMessage: "No Structured Data json has been found."
        }),
        qualityVerdict: qualityVerdict.bad
      };
    }
    if (!isEqual__default.default(status, checks.structuredData))
      dispatch({
        type: "UPDATE_PONCTUAL",
        value: { ...status, entity: "structuredData" }
      });
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SEOAccordion,
    {
      title: formatMessage({
        id: getTrad("SEOModal.summary-title.structured-data"),
        defaultMessage: "JSON Structured Data"
      }),
      status: checks.structuredData,
      label: formatMessage({
        id: getTrad("SEOChecks.structuredDataCheck.label"),
        defaultMessage: "Structured data is a standardized format for providing information about a page and classifying the page content."
      })
    }
  );
};
const MetaDescriptionCheck = ({ metaDescription, checks }) => {
  const { formatMessage } = reactIntl.useIntl();
  const dispatch = React__namespace.useContext(SeoCheckerContext);
  const maxLength = 160;
  const minimumLength = 50;
  let status = {
    message: formatMessage({
      id: getTrad("SEOChecks.metaDescriptionCheck.default"),
      defaultMessage: "A Meta Description has been found!"
    }),
    qualityVerdict: qualityVerdict.good
  };
  React__namespace.useEffect(() => {
    if (isNull__default.default(metaDescription) || isEmpty__default.default(metaDescription)) {
      status = {
        message: formatMessage({
          id: getTrad("SEOChecks.metaDescriptionCheck.not-found"),
          defaultMessage: "No Meta Description has been found."
        }),
        qualityVerdict: qualityVerdict.improvements
      };
    } else if (metaDescription.length > maxLength) {
      status = {
        message: formatMessage({
          id: getTrad("Title-settings.metaDescription-too-long"),
          defaultMessage: "Meta Description is too long"
        }),
        qualityVerdict: qualityVerdict.bad
      };
    } else if (metaDescription.length < minimumLength) {
      status = {
        message: formatMessage({
          id: getTrad("Title-settings.metaDescription-too-short"),
          defaultMessage: "Meta Description is too short"
        }),
        qualityVerdict: qualityVerdict.bad
      };
    }
    if (!isEqual__default.default(status, checks.metaDescription))
      dispatch({
        type: "UPDATE_PONCTUAL",
        value: { ...status, entity: "metaDescription" }
      });
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SEOAccordion,
    {
      title: formatMessage({
        id: getTrad("SEOModal.summary-title.meta-description"),
        defaultMessage: "Meta description"
      }),
      status: checks.metaDescription,
      label: formatMessage({
        id: getTrad("Title-settings.metaDescription-tooltip"),
        defaultMessage: `A meta description is an HTML tag used to describe the content of a web page.
 This description appears below the title and URL of your page as it appears in search engine results.
 For it to remain visible in Google, it must not exceed 140-${maxLength} characters.`
      }),
      component: metaDescription && /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { padding: 4, background: "neutral100", children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "omega", fontWeight: "semiBold", children: metaDescription }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 2, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { horizontal: true, spacing: 2, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.ProgressBar,
            {
              value: metaDescription.length * 100 / maxLength > 100 ? 100 : metaDescription.length * 100 / maxLength
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { variant: "pi", padding: 2, children: [
            "(",
            metaDescription.length,
            "/",
            maxLength,
            ")"
          ] })
        ] }) })
      ] })
    }
  );
};
const AlternativeTextCheck = ({ intersections, richTextAlts, altTexts, checks }) => {
  const { formatMessage } = reactIntl.useIntl();
  const dispatch = React__namespace.useContext(SeoCheckerContext);
  let status = {
    message: formatMessage({
      id: getTrad("SEOChecks.alternativeTextCheck.default"),
      defaultMessage: "All your images contain an alt attribute! Congrats!"
    }),
    qualityVerdict: qualityVerdict.good
  };
  React__namespace.useEffect(() => {
    const missingRichTextAlt = richTextAlts.filter((x) => x.occurences != 0).length;
    if (intersections === 0) {
      status = {
        message: formatMessage({
          id: getTrad("SEOChecks.alternativeTextCheck.intersection-zero"),
          defaultMessage: "The name and the alternative text of your images are all the same. Strapi automatically generate the alt attribute from the name by default if the field was empty during the media upload. Having alt attribute clearly describing images is a very good practice."
        }),
        qualityVerdict: qualityVerdict.bad
      };
    } else if (altTexts.includes("")) {
      const count = Math.abs(intersections);
      status = {
        message: `${count} ${formatMessage({
          id: getTrad("SEOChecks.alternativeTextCheck.intersection-negative"),
          defaultMessage: "Some images from a media field are missing an alt attribute."
        })}`,
        qualityVerdict: qualityVerdict.improvements
      };
    } else if (missingRichTextAlt >= 1) {
      status = {
        message: formatMessage({
          id: getTrad("SEOChecks.alternativeTextCheck.richtext-missing-one"),
          defaultMessage: "At least one image in any 1st level richtext editor is missing an alt attribute."
        }),
        qualityVerdict: qualityVerdict.improvements
      };
    }
    if (!isEqual__default.default(status, checks.alternativeText))
      dispatch({
        type: "UPDATE_PONCTUAL",
        value: { ...status, entity: "alternativeText" }
      });
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SEOAccordion,
    {
      title: formatMessage({
        id: getTrad("SEOModal.summary-title.alt-attributes"),
        defaultMessage: "Alternative Text"
      }),
      status: checks.alternativeText,
      label: formatMessage({
        id: getTrad("SEOChecks.alternativeTextCheck.label"),
        defaultMessage: "This will check if you have any missing alternative text for your images (media fields) and in your 1st level richtext editors."
      }),
      component: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { padding: 2, background: "neutral100", children: [
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { spacing: 2, horizontal: true, padding: 2, children: [
          /* @__PURE__ */ jsxRuntime.jsx(icons.WarningCircle, { "aria-hidden": true, fill: `warning600` }),
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { paddingLeft: 1, children: [
            /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { fontWeight: "bold", children: [
              altTexts.filter((item) => item === "").length,
              " "
            ] }),
            formatMessage({
              id: getTrad("SEOChecks.alternativeTextCheck.missing-image"),
              defaultMessage: "missing on first level image fields or inside a component."
            })
          ] })
        ] }),
        richTextAlts.map((alt, index2) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { spacing: 2, horizontal: true, padding: 2, children: alt.occurences > 0 && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(icons.WarningCircle, { "aria-hidden": true, fill: `warning600` }),
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { paddingLeft: 1, children: [
            /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { fontWeight: "bold", children: [
              alt.occurences,
              " "
            ] }),
            formatMessage({
              id: getTrad("SEOChecks.alternativeTextCheck.missing-text"),
              defaultMessage: "missing alt in the following richtext field:"
            }),
            /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { fontWeight: "bold", children: [
              " ",
              alt.field
            ] })
          ] })
        ] }) }, index2)),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { spacing: 2, paddingTop: 4, paddingLeft: 2, paddingRight: 2, paddingBottom: 4, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Status, { variant: "secondary", showBullet: false, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", children: "Tip: " }),
          "Implement a rule in your front-end code that uses the name of your images if the",
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", children: " alternativeText " }),
          "field is empty to further reduce the risk of an empty alt attribute on your website."
        ] }) }) })
      ] })
    }
  );
};
const collectFieldsByType = (contentType, components, fieldType) => {
  let fields = [];
  Object.entries(contentType.attributes).forEach(([field, fieldProperties]) => {
    if (fieldProperties.type === fieldType) {
      fields.push({ name: field, field: null });
    } else if (fieldProperties.type === "component") {
      Object.entries(components[fieldProperties.component].attributes).forEach(
        ([field2, fieldProperties2]) => {
          if (fieldProperties2.type === fieldType) {
            fields.push({ name: field, field: field2 });
          }
        }
      );
    }
  });
  Object.entries(components).forEach(([componentName, componentData]) => {
    Object.entries(componentData.attributes).forEach(([field, fieldProperties]) => {
      if (fieldProperties.type === fieldType) {
        fields.push({ name: componentName, field });
      }
    });
  });
  return fields;
};
const getRichTextAndBlocksFields = (contentType, components, modifiedData) => {
  let dynamicZones = [];
  Object.entries(modifiedData).forEach(([fieldName, fieldValue]) => {
    if (isArray__default.default(fieldValue)) {
      const isComponentField = fieldValue.some((subField) => "__component" in subField);
      if (isComponentField)
        dynamicZones.push(fieldName);
    }
  });
  let richTextFields = collectFieldsByType(contentType, components, "richtext");
  let blockFields = collectFieldsByType(contentType, components, "blocks");
  const filterFields = (fields) => {
    dynamicZones.forEach((dz) => {
      const dynamicZoneData = get__default.default(modifiedData, dz, []);
      fields.forEach((field, index2) => {
        const componentExistsInDZ = dynamicZoneData.filter((x) => x.__component === field.name);
        if (!isEmpty__default.default(componentExistsInDZ) && !field.inDz && dynamicZoneData.find((x) => x.hasOwnProperty(field.field))) {
          fields[index2] = { ...field, inDz: dz };
        }
        if (isEmpty__default.default(componentExistsInDZ) && field.inDz) {
          pull__default.default(fields, field);
        }
      });
    });
  };
  filterFields(richTextFields);
  filterFields(blockFields);
  return { richTextFields, blockFields };
};
const recursiveSearch = (obj, keyword, relations, results = [], allImageNames = []) => {
  const alternativeTexts = results;
  const imageNames = allImageNames;
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (key === keyword && typeof value !== "object") {
      alternativeTexts.push(value);
      imageNames.push(obj["name"]);
    } else if (typeof value === "object" && !relations.includes(key) && !isNull__default.default(value)) {
      recursiveSearch(value, keyword, relations, alternativeTexts, imageNames);
    }
  });
  return { alternativeTexts, imageNames };
};
const getRegularImageAltTexts = (contentType, modifiedData) => {
  const relations = ["localizations"];
  Object.keys(contentType.attributes).forEach((field) => {
    if (contentType.attributes[field].type === "relation") {
      relations.push(field);
    }
  });
  const { alternativeTexts, imageNames } = recursiveSearch(
    modifiedData,
    "alternativeText",
    relations
  );
  const alternativeTextCount = alternativeTexts.length;
  const intersections = alternativeTexts.filter((altText) => imageNames.includes(altText)).length - alternativeTextCount;
  return { intersections, altTexts: alternativeTexts };
};
const converter = new showdown__default.default.Converter();
const extractTextFromBlocks = (blocks) => {
  let textContent = "";
  blocks.forEach((block) => {
    if (block.type === "text" && block.text) {
      textContent += `${block.text} `;
    } else if (block.children && isArray__default.default(block.children)) {
      textContent += extractTextFromBlocks(block.children);
    }
  });
  return textContent.trim();
};
const getEmptyAltCount = (richtext, field, name2, isBlock = false) => {
  let htmlOccurrences = 0;
  let markdownOccurrences = 0;
  let blockOccurences = 0;
  if (isBlock) {
    richtext.forEach((element) => {
      if (element.type === "image" && element.image) {
        if (!element.image.alternativeText) {
          blockOccurences += 1;
        }
      }
    });
  } else if (richtext) {
    markdownOccurrences = richtext.split("\n").filter((entry) => entry.includes("![](")).length;
    const htmlImages = richtext.match(/<img[^>]*\/?>/g) || [];
    htmlOccurrences = htmlImages.filter((image) => !image.includes("alt=")).length;
  }
  if (name2) {
    if (name2.includes(".")) {
      return {
        field: `[dynamic-zone].${name2.split(".").pop()}.${field}`,
        occurences: markdownOccurrences + htmlOccurrences + blockOccurences
      };
    }
    return {
      field: `${name2}.${field}`,
      occurences: markdownOccurrences + htmlOccurrences + blockOccurences
    };
  }
  return { field, occurences: 0 };
};
const increaseCounter = (base, field, isBlock = false, name2 = null) => {
  let richtext = "";
  let emptyAlts = {};
  if (isBlock) {
    richtext = extractTextFromBlocks(base?.[field] ?? []);
    emptyAlts = getEmptyAltCount(base?.[field], field, name2, true);
  } else {
    richtext = base?.[field] ?? "";
    emptyAlts = getEmptyAltCount(richtext, field, name2);
  }
  if (richtext) {
    const html = isBlock ? richtext : converter.makeHtml(richtext);
    const words = html.replace(/<\/?[^>]+(>|$)/g, "").replace("\n", " ").toLowerCase().split(" ").filter((entry) => entry !== "" && entry !== "\n");
    return { words, length: words.length, emptyAlts };
  }
  return { words: [], length: 0, emptyAlts };
};
const buildKeywordDensityObject = (keywords2, words, keywordsDensity) => {
  let tempKeywordsDensity = { ...keywordsDensity };
  keywords2.forEach((keyword) => {
    if (!isEmpty__default.default(keyword)) {
      const trimmedKeyword = keyword.trim();
      const regex = new RegExp(trimmedKeyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
      const count = (words.join(" ").match(regex) || []).length;
      if (!tempKeywordsDensity.hasOwnProperty(trimmedKeyword)) {
        tempKeywordsDensity[trimmedKeyword] = { count };
      } else {
        tempKeywordsDensity[trimmedKeyword].count += count;
      }
    }
  });
  return tempKeywordsDensity;
};
const adjustIntersections = (data) => {
  const { emptyAltCount } = data;
  let occurrences = 0;
  emptyAltCount.richTextAlts.forEach((alt) => {
    occurrences += alt.occurences;
  });
  emptyAltCount.blockTextAlts.forEach((alt) => {
    occurrences += alt.occurences;
  });
  emptyAltCount.intersections -= occurrences;
  return data;
};
const getRichTextData = (modifiedData, components, contentType) => {
  const { richTextFields, blockFields } = getRichTextAndBlocksFields(
    contentType,
    components,
    modifiedData
  );
  const { intersections, altTexts } = getRegularImageAltTexts(contentType, modifiedData);
  let emptyAltCount = { intersections, richTextAlts: [], blockTextAlts: [], altTexts };
  let wordCount = 0;
  let keywords2 = [];
  let keywordsDensity = {};
  const seoKeywords = modifiedData?.seo?.keywords ?? "";
  if (seoKeywords) {
    keywords2 = seoKeywords.toLowerCase().split(",");
  }
  richTextFields.forEach((data) => {
    if (isNull__default.default(data.field)) {
      const { words, length, emptyAlts } = increaseCounter(modifiedData, data.name);
      wordCount += length;
      emptyAltCount.richTextAlts.push(emptyAlts);
      keywordsDensity = buildKeywordDensityObject(keywords2, words, keywordsDensity);
    } else if (!data.inDz) {
      const item = get__default.default(modifiedData, data.name.split(".").pop(), "");
      if (item) {
        const isRepeatable = isArray__default.default(item);
        if (isRepeatable) {
          item.forEach((entry) => {
            const { words, length, emptyAlts } = increaseCounter(
              entry,
              data.field,
              false,
              data.name
            );
            wordCount += length;
            emptyAltCount.richTextAlts.push(emptyAlts);
            keywordsDensity = buildKeywordDensityObject(keywords2, words, keywordsDensity);
          });
        } else {
          const { words, length, emptyAlts } = increaseCounter(item, data.field, false, data.name);
          wordCount += length;
          emptyAltCount.richTextAlts.push(emptyAlts);
          keywordsDensity = buildKeywordDensityObject(keywords2, words, keywordsDensity);
        }
      }
    } else {
      const components2 = get__default.default(modifiedData, data.inDz, []);
      if (!isEmpty__default.default(components2)) {
        const richTextComponents = components2.filter((x) => x.__component === data.name);
        richTextComponents.forEach((component) => {
          const item = get__default.default(component, data.field, []);
          const isRepeatable = isArray__default.default(item);
          if (isRepeatable) {
            item.forEach((entry) => {
              const { words, length, emptyAlts } = increaseCounter(
                entry,
                data.field,
                false,
                data.name
              );
              wordCount += length;
              emptyAltCount.richTextAlts.push(emptyAlts);
              keywordsDensity = buildKeywordDensityObject(keywords2, words, keywordsDensity);
            });
          } else {
            const { words, length, emptyAlts } = increaseCounter(
              component,
              data.field,
              false,
              data.name
            );
            wordCount += length;
            emptyAltCount.richTextAlts.push(emptyAlts);
            keywordsDensity = buildKeywordDensityObject(keywords2, words, keywordsDensity);
          }
        });
      }
    }
  });
  blockFields.forEach((data) => {
    if (isNull__default.default(data.field)) {
      const { words, length, emptyAlts } = increaseCounter(modifiedData, data.name, true);
      wordCount += length;
      emptyAltCount.blockTextAlts.push(emptyAlts);
      keywordsDensity = buildKeywordDensityObject(keywords2, words, keywordsDensity);
    } else if (!data.inDz) {
      const item = get__default.default(modifiedData, data.name.split(".").pop(), "");
      if (item) {
        const isRepeatable = isArray__default.default(item);
        if (isRepeatable) {
          item.forEach((entry) => {
            const { words, length, emptyAlts } = increaseCounter(
              entry,
              data.field,
              true,
              data.name
            );
            wordCount += length;
            emptyAltCount.blockTextAlts.push(emptyAlts);
            keywordsDensity = buildKeywordDensityObject(keywords2, words, keywordsDensity);
          });
        } else {
          const { words, length, emptyAlts } = increaseCounter(item, data.field, true, data.name);
          wordCount += length;
          emptyAltCount.blockTextAlts.push(emptyAlts);
          keywordsDensity = buildKeywordDensityObject(keywords2, words, keywordsDensity);
        }
      }
    } else {
      const components2 = get__default.default(modifiedData, data.inDz, []);
      if (!isEmpty__default.default(components2)) {
        const blockComponents = components2.filter((x) => x.__component === data.name);
        blockComponents.forEach((component) => {
          const item = get__default.default(component, data.field, []);
          const isRepeatable = isArray__default.default(item);
          if (isRepeatable) {
            item.forEach((entry) => {
              const { words, length, emptyAlts } = increaseCounter(
                entry,
                data.field,
                true,
                data.name
              );
              wordCount += length;
              emptyAltCount.blockTextAlts.push(emptyAlts);
              keywordsDensity = buildKeywordDensityObject(keywords2, words, keywordsDensity);
            });
          } else {
            const { words, length, emptyAlts } = increaseCounter(
              component,
              data.field,
              true,
              data.name
            );
            wordCount += length;
            emptyAltCount.blockTextAlts.push(emptyAlts);
            keywordsDensity = buildKeywordDensityObject(keywords2, words, keywordsDensity);
          }
        });
      }
    }
  });
  return adjustIntersections({
    wordCount,
    keywordsDensity,
    emptyAltCount
  });
};
const SeoChecks = ({ updatedAt, modifiedData, components, contentType, checks }) => {
  const { formatMessage } = reactIntl.useIntl();
  const { wordCount, keywordsDensity, emptyAltCount } = getRichTextData(
    modifiedData,
    components,
    contentType
  );
  const seo = modifiedData?.seo ?? null;
  const hasSeo = seo && Object.keys(seo).length > 0;
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Modal.Content, { labelledBy: "title", children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Header, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title", children: formatMessage({
      id: getTrad("Button.seo-analyze"),
      defaultMessage: "SEO Analyze"
    }) }) }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Body, { children: hasSeo ? /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { children: [
      checks?.metaTitle && /* @__PURE__ */ jsxRuntime.jsx(MetaTitleCheck, { metaTitle: seo?.metaTitle ?? null, checks }),
      checks?.metaDescription && /* @__PURE__ */ jsxRuntime.jsx(
        MetaDescriptionCheck,
        {
          metaDescription: seo?.metaDescription ?? null,
          checks
        }
      ),
      checks?.wordCount && /* @__PURE__ */ jsxRuntime.jsx(WordCountCheck, { wordCount, checks }),
      checks?.keywordsDensity && /* @__PURE__ */ jsxRuntime.jsx(KeywordDensityCheck, { keywordsDensity, checks }),
      checks?.openGraph && /* @__PURE__ */ jsxRuntime.jsx(OpenGraphCheck, { openGraph: seo?.openGraph ?? null, checks }),
      checks?.canonicalUrl && /* @__PURE__ */ jsxRuntime.jsx(CanonicalUrlCheck, { canonicalUrl: seo?.canonicalURL ?? null, checks }),
      checks?.structuredData && /* @__PURE__ */ jsxRuntime.jsx(StructuredDataCheck, { structuredData: seo?.structuredData ?? null, checks }),
      checks?.metaRobots && /* @__PURE__ */ jsxRuntime.jsx(MetaRobotCheck, { metaRobots: seo?.metaRobots ?? null, checks }),
      checks?.alternativeText && /* @__PURE__ */ jsxRuntime.jsx(
        AlternativeTextCheck,
        {
          intersections: emptyAltCount?.intersections ?? null,
          richTextAlts: emptyAltCount?.richTextAlts ?? null,
          altTexts: emptyAltCount?.altTexts ?? null,
          checks
        }
      ),
      checks?.lastUpdatedAt && /* @__PURE__ */ jsxRuntime.jsx(LastUpdatedAtCheck, { updatedAt, checks })
    ] }) : /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingLeft: 4, children: /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.EmptyStateLayout,
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(Illo, {}),
        content: formatMessage({
          id: getTrad("Modal.seo-component-empty"),
          defaultMessage: "Your SEO component is empty..."
        })
      }
    ) }) })
  ] });
};
const PreviewChecks = ({ checks }) => {
  const { formatMessage } = reactIntl.useIntl();
  const good = Object.values(checks).filter(
    (check) => check.qualityVerdict === qualityVerdict.good
  ).length;
  const improvements = Object.values(checks).filter(
    (check) => check.qualityVerdict === qualityVerdict.improvements
  ).length;
  const bad = Object.values(checks).filter(
    (check) => check.qualityVerdict === qualityVerdict.bad
  ).length;
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { paddingTop: 2, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 2, children: [
      /* @__PURE__ */ jsxRuntime.jsx(icons.CheckCircle, { "aria-hidden": true, fill: `success600` }),
      /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { children: [
        formatMessage({
          id: getTrad("Good"),
          defaultMessage: "Good"
        }),
        `: ${good}`
      ] })
    ] }, qualityVerdict.good),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 2, children: [
      /* @__PURE__ */ jsxRuntime.jsx(icons.WarningCircle, { "aria-hidden": true, fill: `warning600` }),
      /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { children: [
        formatMessage({
          id: getTrad("Improvements"),
          defaultMessage: "Improvements"
        }),
        `: ${improvements}`
      ] })
    ] }, qualityVerdict.improvements),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 2, children: [
      /* @__PURE__ */ jsxRuntime.jsx(icons.CrossCircle, { "aria-hidden": true, fill: `danger600` }),
      /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { children: [
        formatMessage({
          id: getTrad("Bad"),
          defaultMessage: "Bad"
        }),
        `: ${bad}`
      ] })
    ] }, qualityVerdict.bad)
  ] });
};
const Serp = ({ metaTitle, metaDescription }) => {
  const metaTitleToDisplay = metaTitle.length > 60 ? `${metaTitle.substring(0, 56)} ...` : metaTitle;
  const metaDescriptionToDisplay = metaDescription.length > 160 ? `${metaDescription.substring(0, 156)} ...` : metaDescription;
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { padding: 4, background: "neutral100", width: "580px", children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "beta", textColor: "primary600", children: metaTitleToDisplay }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { marginTop: 1, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", textColor: "neutral600", children: metaDescriptionToDisplay }) })
  ] });
};
const MetaChecks = ({ item, max, label, minLimit = false }) => {
  const getIcon = () => {
    if (item.length >= max || label === "title" && item.length === 0 || minLimit && label === "description" && item.length <= 50) {
      return /* @__PURE__ */ jsxRuntime.jsx(icons.WarningCircle, { "aria-hidden": true, fill: `warning600` });
    } else {
      return /* @__PURE__ */ jsxRuntime.jsx(icons.CheckCircle, { "aria-hidden": true, fill: `success600` });
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { spacing: 1, horizontal: true, children: [
    getIcon(),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: `Your ${label} is ${item.length || 0} characters long (max ${max})` })
  ] });
};
const KeywordCheck = ({ item, keywords: keywords2, label }) => {
  const _keywords = keywords2.split(",");
  const matches = _keywords.filter((x) => item.toLowerCase().includes(x.toLowerCase().trim()));
  const getIcon = () => {
    if (matches.length === 0) {
      return /* @__PURE__ */ jsxRuntime.jsx(icons.WarningCircle, { "aria-hidden": true, fill: `warning600` });
    } else {
      return /* @__PURE__ */ jsxRuntime.jsx(icons.CheckCircle, { "aria-hidden": true, fill: `success600` });
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { spacing: 1, horizontal: true, children: [
    getIcon(),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: `You use ${matches.length} keyword${matches.length > 1 ? "s" : ""} in your ${label} (${matches.join(", ").trim()})` })
  ] });
};
const BrowserPreview = ({ modifiedData }) => {
  const { formatMessage } = reactIntl.useIntl();
  const seo = get__default.default(modifiedData, "seo", null);
  const metaTitle = get__default.default(seo, "metaTitle", null);
  const metaDescription = get__default.default(seo, "metaDescription", null);
  const keywords2 = get__default.default(seo, "keywords", null);
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Modal.Content, { labelledBy: "title", children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Header, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title", children: formatMessage({
      id: getTrad("Button.browser-preview"),
      defaultMessage: "Browser Preview"
    }) }) }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Body, { children: seo ? /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", gap: 2, alignItems: "flex-start", children: [
      metaTitle && metaDescription && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingBottom: 6, children: /* @__PURE__ */ jsxRuntime.jsx(Serp, { metaTitle, metaDescription }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Divider, { marginBottom: 4, width: "100%" }),
      metaTitle && /* @__PURE__ */ jsxRuntime.jsx(MetaChecks, { item: metaTitle, max: 60, label: "title" }),
      metaDescription && /* @__PURE__ */ jsxRuntime.jsx(MetaChecks, { item: metaDescription, max: 160, label: "description", minLimit: true }),
      keywords2 && /* @__PURE__ */ jsxRuntime.jsxs(React__namespace.Fragment, { children: [
        metaTitle && /* @__PURE__ */ jsxRuntime.jsx(KeywordCheck, { item: metaTitle, keywords: keywords2, label: "title" }),
        metaDescription && /* @__PURE__ */ jsxRuntime.jsx(KeywordCheck, { item: metaDescription, keywords: keywords2, label: "description" })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingLeft: 4, children: /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.EmptyStateLayout,
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(Illo, {}),
        content: formatMessage({
          id: getTrad("Modal.seo-component-empty"),
          defaultMessage: "Your SEO component is empty..."
        })
      }
    ) }) })
  ] });
};
const FacebookOGPreview = ({ image, title, description: description2 }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      style: {
        width: "500px",
        border: "1px solid #dadde1",
        fontFamily: "Helvetica, Arial, sans-serif",
        cursor: "pointer",
        margin: "auto",
        marginBottom: "40px"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              borderBottom: "1px solid #dadde1",
              backgroundSize: "cover",
              backgroundPosition: "center"
            },
            children: /* @__PURE__ */ jsxRuntime.jsx("div", { style: { width: "100%", position: "relative", paddingTop: "52.5%" }, children: /* @__PURE__ */ jsxRuntime.jsx(
              "img",
              {
                src: image.url,
                alt: title,
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { backgroundColor: "#f2f3f5", padding: "12px 10px", lineHeight: "1.4" }, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              style: {
                fontSize: "12px",
                textTransform: "uppercase",
                color: "#606770",
                marginBottom: "4px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              },
              children: "your-site.io"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              style: {
                fontSize: "16px",
                fontWeight: "bold",
                color: "#1d2129",
                marginBottom: "4px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: title.substring(0, 65)
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              style: {
                fontSize: "14px",
                color: "#606770",
                maxHeight: "40px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                display: "-webkit-box"
              },
              children: description2.substring(0, 150)
            }
          )
        ] })
      ]
    }
  );
};
const TwitterOGPreview = ({ image, title, description: description2 }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      style: {
        width: "100%",
        maxWidth: "500px",
        border: "1px solid #e1e8ed",
        fontFamily: "Arial, sans-serif",
        borderRadius: "8px",
        overflow: "hidden",
        cursor: "pointer",
        margin: "auto",
        marginBottom: "40px"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            },
            children: /* @__PURE__ */ jsxRuntime.jsx("div", { style: { width: "100%", position: "relative", paddingTop: "52.5%" }, children: /* @__PURE__ */ jsxRuntime.jsx(
              "img",
              {
                src: image.url,
                alt: title,
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: {
              backgroundColor: "#ffffff",
              padding: "12px 10px",
              lineHeight: "1.4",
              borderTop: "1px solid #e1e8ed"
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    fontSize: "12px",
                    color: "#657786",
                    marginBottom: "4px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  children: "your-site.io"
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#14171A",
                    marginBottom: "4px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: title.substring(0, 70)
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    fontSize: "14px",
                    color: "#657786",
                    maxHeight: "40px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    display: "-webkit-box"
                  },
                  children: description2.substring(0, 200)
                }
              )
            ]
          }
        )
      ]
    }
  );
};
const LinkedInOGPreview = ({ image, title, description: description2 }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      style: {
        width: "100%",
        maxWidth: "500px",
        borderRadius: "2px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.15),0 2px 3px rgba(0,0,0,.2)",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
        cursor: "pointer",
        margin: "auto",
        marginBottom: "40px"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            },
            children: /* @__PURE__ */ jsxRuntime.jsx("div", { style: { width: "100%", position: "relative", paddingTop: "52.5%" }, children: /* @__PURE__ */ jsxRuntime.jsx(
              "img",
              {
                src: image.url,
                alt: title,
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: {
              backgroundColor: "#ffffff",
              padding: "12px 16px",
              lineHeight: "1.5",
              borderTop: "1px solid #ccd0d5"
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#333333",
                    marginBottom: "2px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: title.substring(0, 70)
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    fontSize: "12px",
                    color: "#666666",
                    marginBottom: "4px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  children: "your-site.io"
                }
              )
            ]
          }
        )
      ]
    }
  );
};
const OpenGraphPreview = ({ modifiedData }) => {
  const { formatMessage } = reactIntl.useIntl();
  const { openGraph } = modifiedData?.seo;
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Modal.Content, { labelledBy: "title", children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Header, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title", children: formatMessage({
      id: getTrad("Button.open-graph-preview"),
      defaultMessage: "Open Graph Preview"
    }) }) }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Body, { children: openGraph["og:title"] && openGraph["og:description"] && openGraph["og:image"] ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { alignItems: "left", direction: "column", gap: 2, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { gap: 1, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Badge, { backgroundColor: "neutral150", textColor: "neutral600", children: "Facebook" }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(
        FacebookOGPreview,
        {
          title: openGraph["og:title"],
          description: openGraph["og:description"],
          image: openGraph["og:image"]
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { alignItems: "left", direction: "column", gap: 2, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { gap: 1, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Badge, { backgroundColor: "neutral150", textColor: "neutral600", children: "X (Twitter)" }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(
        TwitterOGPreview,
        {
          title: openGraph["og:title"],
          description: openGraph["og:description"],
          image: openGraph["og:image"]
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { alignItems: "left", direction: "column", gap: 2, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { gap: 1, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Badge, { backgroundColor: "neutral150", textColor: "neutral600", children: "LinkedIn" }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(
        LinkedInOGPreview,
        {
          title: openGraph["og:title"],
          description: openGraph["og:description"],
          image: openGraph["og:image"]
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingLeft: 4, children: /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.EmptyStateLayout,
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(Illo, {}),
        content: formatMessage({
          id: getTrad("Modal.seo-component-empty-open-graph"),
          defaultMessage: "The Open Graph metadata is empty..."
        })
      }
    ) }) })
  ] });
};
const useSettingsApi = () => {
  const { get: get2, post } = admin.useFetchClient();
  const getSettings = async () => {
    const resultData = await get2("/seo/settings");
    return resultData;
  };
  const setSettings = async (data) => {
    const resultData = await post("/seo/settings", data);
    return resultData;
  };
  return { getSettings, setSettings };
};
const initialState = {
  preview: true
};
const SeoCheckerContext = React__namespace.createContext(null);
const Summary = () => {
  const { formatMessage } = reactIntl.useIntl();
  const { getSettings } = useSettingsApi();
  const [isLoading, setIsLoading] = React__namespace.useState(true);
  const [localChecks, setLocalChecks] = React__namespace.useState({});
  const [checks, dispatch] = React__namespace.useReducer(reducer, initialState);
  const { model, collectionType, id, form, contentType, components } = admin.unstable_useContentManagerContext();
  const { values: modifiedData } = form;
  const { metaTitle, metaDescription, openGraph } = modifiedData.seo;
  const { document } = admin.unstable_useDocument({
    model,
    collectionType,
    documentId: id
  });
  const getAllChecks = async (modifiedData2, components2, contentType2) => {
    const { data: defaultSettings } = await getSettings();
    const { wordCount, keywordsDensity, emptyAltCount } = getRichTextData(
      modifiedData2,
      components2,
      contentType2
    );
    let result = {
      ...defaultSettings[contentType2?.uid]?.seoChecks?.metaTitle && {
        metaTitle: getMetaTitleCheckPreview(modifiedData2)
      },
      ...defaultSettings[contentType2?.uid]?.seoChecks?.wordCount && {
        wordCount: getWordCountPreview(wordCount)
      },
      ...defaultSettings[contentType2?.uid]?.seoChecks?.metaRobots && {
        metaRobots: metaRobotPreview(modifiedData2)
      },
      ...defaultSettings[contentType2?.uid]?.seoChecks?.openGraph && {
        openGraph: openGraphPreview(modifiedData2)
      },
      ...defaultSettings[contentType2?.uid]?.seoChecks?.canonicalUrl && {
        canonicalUrl: canonicalUrlPreview(modifiedData2)
      },
      ...defaultSettings[contentType2?.uid]?.seoChecks?.lastUpdatedAt && {
        lastUpdatedAt: lastUpdatedAtPreview(modifiedData2)
      },
      ...defaultSettings[contentType2?.uid]?.seoChecks?.structuredData && {
        structuredData: structuredDataPreview(modifiedData2)
      },
      ...defaultSettings[contentType2?.uid]?.seoChecks?.metaDescription && {
        metaDescription: getMetaDescriptionPreview(modifiedData2)
      },
      ...defaultSettings[contentType2?.uid]?.seoChecks?.alternativeText && {
        alternativeText: getAlternativeTextPreview(emptyAltCount)
      },
      ...defaultSettings[contentType2?.uid]?.seoChecks?.keywordDensity && {
        keywordsDensity: getKeywordDensityPreview(keywordsDensity)
      }
    };
    return result;
  };
  React__namespace.useEffect(() => {
    const fetchChecks = async () => {
      if (!(JSON.stringify(localChecks) === JSON.stringify(checks))) {
        if (checks?.preview) {
          const status = await getAllChecks(modifiedData, components, contentType);
          dispatch({
            type: "UPDATE_FOR_PREVIEW",
            value: status
          });
        } else
          dispatch({
            type: "UPDATE_FOR_PREVIEW",
            value: checks
          });
        setLocalChecks(checks);
      }
    };
    fetchChecks().then(() => {
      setIsLoading(false);
    });
  }, [checks]);
  return /* @__PURE__ */ jsxRuntime.jsx(SeoCheckerContext.Provider, { value: dispatch, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { paddingTop: 4, width: "100%", children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { tag: "h2", variant: "sigma", textTransform: "uppercase", textColor: "neutral600", children: formatMessage({
      id: getTrad("Plugin.name"),
      defaultMessage: "SEO Plugin"
    }) }),
    metaTitle && metaDescription && /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Modal.Root, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Trigger, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 1, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { fullWidth: true, variant: "secondary", startIcon: /* @__PURE__ */ jsxRuntime.jsx(icons.Eye, {}), children: formatMessage({
        id: getTrad("Button.browser-preview"),
        defaultMessage: "Browser Preview"
      }) }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(BrowserPreview, { modifiedData })
    ] }),
    openGraph && /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Modal.Root, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Trigger, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 2, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { fullWidth: true, variant: "secondary", startIcon: /* @__PURE__ */ jsxRuntime.jsx(icons.Eye, {}), children: formatMessage({
        id: getTrad("Button.open-graph-preview"),
        defaultMessage: "Open Graph Preview"
      }) }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(OpenGraphPreview, { modifiedData })
    ] }),
    !isLoading && /* @__PURE__ */ jsxRuntime.jsx(PreviewChecks, { checks }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Modal.Root, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Trigger, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.TextButton, { startIcon: /* @__PURE__ */ jsxRuntime.jsx(icons.ArrowRight, {}), children: formatMessage({
        id: getTrad("Button.see-details"),
        defaultMessage: "SEE DETAILS"
      }) }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(
        SeoChecks,
        {
          updatedAt: document?.updatedAt ?? null,
          modifiedData,
          components,
          contentType,
          checks
        }
      )
    ] })
  ] }) });
};
const SeoChecker = () => {
  const {
    form: { values }
  } = admin.unstable_useContentManagerContext();
  if (!values || !values.seo || !values.seo.metaTitle || !values.seo.metaDescription)
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
  return /* @__PURE__ */ jsxRuntime.jsx(Summary, {});
};
const pluginPermissions = {
  // This permission regards the main component (App) and is used to tell
  // If the plugin link should be displayed in the menu
  // And also if the plugin is accessible. This use case is found when a user types the url of the
  // plugin directly in the browser
  main: [{ action: "plugin::seo.read", subject: null }]
};
const prefixPluginTranslations = (trad, pluginId2) => {
  if (!pluginId2) {
    throw new TypeError("pluginId can't be empty");
  }
  return Object.keys(trad).reduce((acc, current) => {
    acc[`${pluginId2}.${current}`] = trad[current];
    return acc;
  }, {});
};
const name = pluginPkg.strapi.name;
const index = {
  register(app) {
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: icons.Search,
      permissions: pluginPermissions.main,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: "SEO"
      },
      Component: async () => {
        const { App } = await Promise.resolve().then(() => require("./index-DkL2DAvz.js"));
        return App;
      }
    });
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name
    });
  },
  bootstrap(app) {
    app.getPlugin("content-manager").injectComponent("editView", "right-links", {
      name: "SeoChecker",
      Component: SeoChecker
    });
  },
  async registerTrads(app) {
    const { locales } = app;
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/en.json": () => Promise.resolve().then(() => require("./en-CN1vWpKz.js")), "./translations/fr.json": () => Promise.resolve().then(() => require("./fr-Xp2IYAb7.js")), "./translations/pt-BR.json": () => Promise.resolve().then(() => require("./pt-BR-D9IlXxtL.js")) }), `./translations/${locale}.json`).then(({ default: data }) => {
          return {
            data: prefixPluginTranslations(data, pluginId),
            locale
          };
        }).catch(() => {
          return {
            data: {},
            locale
          };
        });
      })
    );
    return Promise.resolve(importedTrads);
  }
};
exports.Illo = Illo;
exports.getTrad = getTrad;
exports.index = index;
exports.pluginId = pluginId;
exports.pluginPermissions = pluginPermissions;
exports.useSettingsApi = useSettingsApi;
//# sourceMappingURL=index-C1a7nMc0.js.map
