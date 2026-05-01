import { chromium, FullConfig } from "@playwright/test";
import dotenv from "dotenv";
import { logger } from "../utils/logger";

dotenv.config();

async function globalSetup(config: FullConfig) {
  logger.info("Starting Global Setup...");

  const browser = await chromium.launch();

  const page = await browser.newPage();

  const baseURL = process.env.BASE_URL_DEV;

  if (!baseURL) {
    logger.error("Base URL is missing in .env file");
    throw new Error("Base URL is missing in .env file");
  }

  logger.info(`Opening URL: ${baseURL}`);

  await page.goto(baseURL);

  logger.info("Application opened successfully");

  await browser.close();

  logger.info("Global Setup Completed");
}

export default globalSetup;
