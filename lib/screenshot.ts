// import { NextApiRequest, NextApiResponse } from 'next';
import chrome from 'chrome-aws-lambda';
import { chromium as Playwright } from 'playwright-core';
import path from 'path';

function generateFileName(url: string, maxLength: number = 50): string {
  // Remove special characters and spaces, replace with underscores
  const cleanName = url.replace(/[^\w\s.-]/gi, '_');

  // Limit length
  const truncatedName = cleanName.substring(0, maxLength);

  // Convert to lowercase
  const niceFileName = truncatedName.toLowerCase();

  return niceFileName;
}

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
  // const { fullPage, width = '1024', height = '800' } = req.query;

  try {
    // const validUrl = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;

    const getOptions = async () => {
      const executablePath = await chrome.executablePath;

      console.log(executablePath);

      let options: Options;
      if (!executablePath) {
        options = {
          args: [],
          executablePath: exePath,
          headless: true,
        };
      } else {
        options = {
          args: chrome.args,
          executablePath,
          headless: chrome.headless,
        };
      }

      return options;
    };

    const options = await getOptions();

    const browser = await Playwright.launch({
      ...options,
    });

    const context = await browser.newContext({
      ignoreHTTPSErrors: true,
      viewport: {
        // width: typeof width === 'string' ? parseInt(width) : 1024,
        // height: typeof height === 'string' ? parseInt(height) : 720,
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

    // const base64 = buffer.toString('base64');

    await page.close();
    await browser.close();

    // return base64;
    return `/screenshots/${fileName}`;
  } catch (err) {
    console.log('Error generating screenshot!\n', err);
  }
};

export default screenshot;
