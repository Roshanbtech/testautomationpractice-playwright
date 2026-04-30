export const ENV = process.env.ENV || 'dev';

export const BASE_URLS = {
  dev: process.env.BASE_URL_DEV,
  uat: process.env.BASE_URL_UAT,
  prod: process.env.BASE_URL_PROD
};

export const BASE_URL = BASE_URLS[ENV as keyof typeof BASE_URLS];