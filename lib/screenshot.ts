import puppeteer from 'puppeteer';
import path from 'path';

import { generateFileName } from './utils';

const screenshot = async (url: string) => {
  let browser;
  let fileName;

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    // const screenshotPromises = urls.map(async url => {
    const page = await browser.newPage();
    await page.goto(url, { timeout: 60 * 1000 });

    page.setViewport({ width: 1366, height: 768 });

    fileName = generateFileName(url) + '.webp';

    await page.screenshot({
      path: path.join(process.cwd(), `/public/screenshots/${fileName}`),
      type: 'webp',
      quality: 40,
    });
  } catch (err) {
    console.log(`Error taking screenshot.`, err);
  } finally {
    await browser.close();

    return `/screenshots/${fileName}`;
  }
};

export default screenshot;
