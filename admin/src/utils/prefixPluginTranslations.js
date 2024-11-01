export const prefixPluginTranslations = (trad, PLUGIN_ID) => {
  if (!PLUGIN_ID) {
    throw new TypeError("PLUGIN_ID can't be empty");
  }

  return Object.keys(trad).reduce((acc, current) => {
    acc[`${PLUGIN_ID}.${current}`] = trad[current];
    return acc;
  }, {});
};
