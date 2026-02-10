import { MountResult, test as base } from '@playwright/experimental-ct-react';
import React from 'react';

import { Theme, ThemePreset } from '../../src/components/Theme/Theme';
import { THEMES, themesArray } from './themes';

type MountOptionsFixture = {
  /**
   * Рендерит компонент с темой переданной 2 аргументом. По умолчанию - presetGpnDefault
   */
  mountWithTheme: (
    component: React.ReactElement,
    theme?: ThemePreset,
  ) => ReturnType<typeof base.prototype.mount>;
};

export const test = base.extend<MountOptionsFixture>({
  mountWithTheme: async ({ mount }, use) => {
    await use((component, theme = THEMES.gpnDefault) => {
      return mount(
        <Theme preset={theme}>
          <div style={{ backgroundColor: 'var(--color-bg-default)' }}>
            {component}
          </div>
        </Theme>,
      );
    });
  },
});

type CustomMount = (component: JSX.Element | string) => Promise<MountResult>;

interface ThemeTestArgs {
  mount: CustomMount;
  themeName: string;
}

type ThemeTestFunction = (args: ThemeTestArgs) => Promise<void>;

/**
 * Создает тесты для 3 тем: gpnDefault, gpnDark, gpnDisplay.
 *
 * Текущая тема передается в колбэке теста: themeName
 */
export const testAllThemes = (
  name: string,
  testFunction: ThemeTestFunction,
) => {
  themesArray.forEach(([themeName, themeData]) => {
    base(`[${themeName}] ${name}`, async ({ mount }) => {
      const customMount: CustomMount = (component: React.ReactNode) => {
        return mount(
          <Theme preset={themeData}>
            <div style={{ backgroundColor: 'var(--color-bg-default)' }}>
              {component}
            </div>
          </Theme>,
        );
      };

      await testFunction({ mount: customMount, themeName });
    });
  });
};
