import * as React from 'react';

// TODO update this in helper plugin docs
import { unstable_useContentManagerContext as useContentManagerContext } from '@strapi/strapi/admin';

import { Summary } from './Summary';

export const SeoChecker = () => {
  const {
    form: { values },
  } = useContentManagerContext();

  if (!values || !values.seo || !values.seo.metaTitle || !values.seo.metaDescription) return <></>;

  return <Summary />;
};
