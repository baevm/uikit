import { IconSave } from '@consta/icons/IconSave';
import { IconUser } from '@consta/icons/IconUser';
import React from 'react';

import {
  VariantItem,
  VariantsContainer,
} from '../../../../playwright/helpers/components';
import { createVariantLabel } from '../../../../playwright/helpers/variantLabels';
import { Badge } from '../Badge';
import { BadgePropView } from '../types';
import { badgePropSize, badgePropStatus } from './visualTestsCases';

export const BadgeSizes = () => {
  return (
    <VariantsContainer>
      {badgePropSize.map((size) => (
        <VariantItem label={createVariantLabel('size', size)}>
          <Badge size={size} label="Новый" />
        </VariantItem>
      ))}
    </VariantsContainer>
  );
};

export const BadgeRoundSizes = () => {
  return (
    <VariantsContainer>
      {badgePropSize.map((size) => (
        <VariantItem label={createVariantLabel('size', size)}>
          <Badge size={size} label="Новый" form="round" />
        </VariantItem>
      ))}
    </VariantsContainer>
  );
};

export const BadgeIconLeftSizes = () => {
  return (
    <VariantsContainer>
      {badgePropSize.map((size) => (
        <VariantItem label={createVariantLabel('size', size)}>
          <Badge size={size} label="Новый" iconLeft={IconUser} />
        </VariantItem>
      ))}
    </VariantsContainer>
  );
};

export const BadgeIconRightSizes = () => {
  return (
    <VariantsContainer>
      {badgePropSize.map((size) => (
        <VariantItem label={createVariantLabel('size', size)}>
          <Badge size={size} label="Новый" iconRight={IconUser} />
        </VariantItem>
      ))}
    </VariantsContainer>
  );
};

export const BadgeBothIconsSizes = () => {
  return (
    <VariantsContainer>
      {badgePropSize.map((size) => (
        <VariantItem label={createVariantLabel('size', size)}>
          <Badge
            size={size}
            label="Новый"
            iconLeft={IconUser}
            iconRight={IconSave}
          />
        </VariantItem>
      ))}
    </VariantsContainer>
  );
};

export const BadgeStatus = ({ view }: { view?: BadgePropView }) => {
  return (
    <VariantsContainer>
      {badgePropStatus.map((status) => (
        <VariantItem label={createVariantLabel('status', status)}>
          <Badge status={status} label="Новый" view={view} />
        </VariantItem>
      ))}
    </VariantsContainer>
  );
};

export const BadgeMinified = () => {
  return (
    <VariantsContainer>
      {badgePropSize.map((size) => (
        <VariantItem label={createVariantLabel('size', size)}>
          <Badge size={size} minified />
        </VariantItem>
      ))}
    </VariantsContainer>
  );
};
