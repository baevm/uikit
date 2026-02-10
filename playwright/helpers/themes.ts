import { presetGpnDark } from '../../src/components/Theme/presets/presetGpnDark';
import { presetGpnDefault } from '../../src/components/Theme/presets/presetGpnDefault';
import { presetGpnDisplay } from '../../src/components/Theme/presets/presetGpnDisplay';

export const THEMES = {
  gpnDefault: presetGpnDefault,
  gpnDark: presetGpnDark,
  gpnDisplay: presetGpnDisplay,
} as const;

export const themesArray = Object.entries(THEMES);
