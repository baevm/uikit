import { useMemo } from 'react';

import { setRef } from '##/utils/setRef';

export const forkRef = <T>(
  refs: (React.Ref<T> | undefined)[],
): React.RefCallback<T> | null => {
  if (!refs.length) {
    return null;
  }
  return (refValue) => {
    for (const ref of refs) {
      setRef(ref, refValue);
    }
  };
};

export const useForkRef = <T>(
  refs: (React.Ref<T> | undefined)[],
): React.RefCallback<T> | null => useMemo(() => forkRef(refs), refs);
