import path from 'path';
import puppeteer from 'puppeteer';
import { checkFileExists } from './utils';

import { generateFileName } from './utils';

const screenshot = async (url: string) => {
  let browser;
  const fileName = generateFileName(url) + '.webp';
  const filePath = path.join(process.cwd(), `/public/screenshots/${fileName}`);

  const fileAlreadyExists = await checkFileExists(filePath);

  if (process.env.NODE_ENV === 'development') {
    if (fileAlreadyExists) return `/screenshots/${fileName}`;
  }

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    // const screenshotPromises = urls.map(async url => {
    const page = await browser.newPage();
    await page.goto(url, { timeout: 60 * 1000 });

    page.setViewport({ width: 1366, height: 768 });

    await page.screenshot({
      path: filePath,
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
