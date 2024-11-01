/**
 *
 * Initializer
 *
 */
import * as React from 'react';
import { PLUGIN_ID } from '../pluginId';

export const Initializer = ({ setPlugin }) => {
  const ref = React.useRef(undefined);
  ref.current = setPlugin;

  React.useEffect(() => {
    if (ref.current) {
      ref.current(PLUGIN_ID);
    }
  }, []);

  return null;
};
