import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import { BASE_URL } from './framework/config/env';

dotenv.config({ path: '.env' });

export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  retries: 1,

  timeout: 30000,

  globalSetup: require.resolve('./framework/setup/globalSetup'),

  reporter: [
    ['html'],
    ['list']
  ],

  use: {

    baseURL: BASE_URL,

    browserName: 'chromium',

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  }
});