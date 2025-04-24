import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./app/**/*.tsx', '../../packages/ui/**/*.{ts,tsx}'],
  presets: [sharedConfig],
};

export default config;
