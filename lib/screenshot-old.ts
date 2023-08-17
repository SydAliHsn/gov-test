import path from 'path';
import { chromium as Playwright } from 'playwright-core';

import { generateFileName } from './utils';

interface Options {
  args: string[];
  executablePath: string;
  headless: boolean;
}

const exePath =
  process.platform === 'win32'
    ? 'C:/Program Files/Google/Chrome/Application/chrome.exe'
    : process.platform === 'linux'
    ? '/usr/bin/google-chrome'
    : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const screenshot = async (url: string) => {
  try {
    const getOptions = async () => {
      let options: Options;
      options = {
        args: [],
        executablePath: exePath,
        headless: true,
      };

      return options;
    };

    const options = await getOptions();

    const browser = await Playwright.launch({
      ...options,
    });

    const context = await browser.newContext({
      ignoreHTTPSErrors: true,
      viewport: {
        width: 1024,
        height: 720,
      },
    });

    const page = await context.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });

    const fileName = generateFileName(url) + '.jpg';

    await page.screenshot({
      type: 'jpeg',
      fullPage: false,
      quality: 100,
      path: path.join(process.cwd(), `/public/screenshots/${fileName}`),
    });

    await page.close();
    await browser.close();

    return `/screenshots/${fileName}`;
  } catch (err) {
    console.log('Error generating screenshot!\n', err);
  }
};

export default screenshot;
