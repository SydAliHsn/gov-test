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

    const page = await browser.newPage();

    // To prevent bot detection
    page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36'
    );

    await page.goto(url, { timeout: 60 * 1000 });

    page.setViewport({ width: 1366, height: 768 });

    // Wait for 1.75 seconds to load the page
    await page.waitForTimeout(1000 * 1.75);

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
