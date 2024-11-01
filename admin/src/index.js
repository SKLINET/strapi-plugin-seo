import { Search } from '@strapi/icons';

import pluginPkg from '../../package.json';
import { Initializer } from './components/Initializer';
import { SeoChecker } from './components/CMEditView/RightLinksCompo';
import { pluginPermissions } from './permissions';

import { PLUGIN_ID } from './pluginId';
import { prefixPluginTranslations } from './utils/prefixPluginTranslations';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.addMenuLink({
      to: `/plugins/${PLUGIN_ID}`,
      icon: Search,
      permissions: pluginPermissions.main,
      intlLabel: {
        id: `${PLUGIN_ID}.plugin.name`,
        defaultMessage: 'SEO',
      },
      Component: async () => {
        const { App } = await import('./pages/App');

        return App;
      },
    });
    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },
  bootstrap(app) {
    app.getPlugin('content-manager').injectComponent('editView', 'right-links', {
      name: 'SeoChecker',
      Component: SeoChecker,
    });
  },
  async registerTrads(app) {
    const { locales } = app;

    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, PLUGIN_ID),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
