import { useAction } from '@reatom/npm-react';
import { RefCallback } from 'react';

import { useCreateAtom } from '##/utils/state/useCreateAtom';

export const useRefAtom = <T extends HTMLElement>() => {
  const atom = useCreateAtom<T | null>(null);
  // @ts-expect-error Type 'Fn<[el: T], T | null>' is not assignable to type 'RefCallback<T | null>'.
  const ref: RefCallback<T | null> = useAction((ctx, el: T) => atom(ctx, el));
  return [atom, ref] as const;
};
