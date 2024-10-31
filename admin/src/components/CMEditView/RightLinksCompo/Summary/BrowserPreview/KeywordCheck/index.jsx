import * as React from 'react';

import { Flex, Typography } from '@strapi/design-system';
import { CheckCircle, WarningCircle } from '@strapi/icons';

export const KeywordCheck = ({ item, keywords, label }) => {
  const _keywords = keywords.split(',');
  const matches = _keywords.filter((x) => item.toLowerCase().includes(x.toLowerCase().trim()));

  const getIcon = () => {
    if (matches.length === 0) {
      return <WarningCircle aria-hidden={true} fill={`warning600`} />;
    } else {
      return <CheckCircle aria-hidden={true} fill={`success600`} />;
    }
  };

  return (
    <Flex spacing={1} horizontal>
      {getIcon()}
      <Typography>{`You use ${matches.length} keyword${
        matches.length > 1 ? 's' : ''
      } in your ${label} (${matches.join(', ').trim()})`}</Typography>
    </Flex>
  );
};
