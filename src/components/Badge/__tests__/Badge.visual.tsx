import React from 'react';

import { expect, test, testAllThemes } from '../../../../playwright/helpers';
import {
  BadgeBothIconsSizes,
  BadgeIconLeftSizes,
  BadgeIconRightSizes,
  BadgeMinified,
  BadgeRoundSizes,
  BadgeSizes,
  BadgeStatus,
} from './visualTestsStands';

test.describe('Badge', () => {
  test(`Badge minified sizes`, async ({ mountWithTheme }) => {
    const component = await mountWithTheme(<BadgeMinified />);
    await expect(component).toHaveScreenshot(`badge-minified-sizes.png`);
  });

  test(`Badge sizes`, async ({ mountWithTheme }) => {
    const component = await mountWithTheme(<BadgeSizes />);
    await expect(component).toHaveScreenshot(`badge-sizes.png`);
  });

  test(`Badge round sizes`, async ({ mountWithTheme }) => {
    const component = await mountWithTheme(<BadgeRoundSizes />);
    await expect(component).toHaveScreenshot(`badge-round-sizes.png`);
  });

  test(`Badge left icon sizes`, async ({ mountWithTheme }) => {
    const component = await mountWithTheme(<BadgeIconLeftSizes />);
    await expect(component).toHaveScreenshot(`badge-left-icon-sizes.png`);
  });

  test(`Badge right icon sizes`, async ({ mountWithTheme }) => {
    const component = await mountWithTheme(<BadgeIconRightSizes />);
    await expect(component).toHaveScreenshot(`badge-right-icon-sizes.png`);
  });

  test(`Badge left and right icon sizes`, async ({ mountWithTheme }) => {
    const component = await mountWithTheme(<BadgeBothIconsSizes />);
    await expect(component).toHaveScreenshot(`badge-left-right-sizes.png`);
  });

  testAllThemes(
    `Badge view=filled status combinations`,
    async ({ mount, themeName }) => {
      const component = await mount(<BadgeStatus view="filled" />);
      await expect(component).toHaveScreenshot(
        `badge-status-filled-view-${themeName}.png`,
      );
    },
  );

  testAllThemes(
    `Badge view=stroked status combinations`,
    async ({ mount, themeName }) => {
      const component = await mount(<BadgeStatus view="stroked" />);
      await expect(component).toHaveScreenshot(
        `badge-status-stroked-view-${themeName}.png`,
      );
    },
  );

  testAllThemes(
    `Badge view=tinted status combinations`,
    async ({ mount, themeName }) => {
      const component = await mount(<BadgeStatus view="tinted" />);
      await expect(component).toHaveScreenshot(
        `badge-status-tinted-view-${themeName}.png`,
      );
    },
  );
});
