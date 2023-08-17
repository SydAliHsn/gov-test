import chromium from 'chrome-aws-lambda';
import { chromium as Playwright } from 'playwright-core';

function generateFileName(url: string, maxLength: number = 50): string {
  // Remove special characters and spaces, replace with underscores
  const cleanName = url.replace(/[^\w\s.-]/gi, '_');

  // Limit length
  const truncatedName = cleanName.substring(0, maxLength);

  // Convert to lowercase
  const niceFileName = truncatedName.toLowerCase();

  return niceFileName;
}

async function getBrowserInstance() {
  const executablePath = await chromium.executablePath;

  if (!executablePath) {
    // running locally
    // const { chromium as Playwright } = require('playwright-core');
    return Playwright.launch({
      args: [],
      // executablePath: execPath,
      headless: true,
    });
  }

  return chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: {
      width: 1280,
      height: 720,
    },
    executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });
}

export default async (req, res) => {
  const url = req.body.url;

  // Perform URL validation
  if (!url || !url.trim()) {
    res.json({
      status: 'error',
      error: 'Enter a valid URL',
    });

    return;
  }

  let browser = null;

  try {
    browser = await getBrowserInstance();
    let page = await browser.newPage();
    await page.goto(url);

    const fileName = generateFileName(url) + '.jpg';

    await page.screenshot({ path: `/public/screenshots/${fileName}` });

    return `/screenshots/${fileName}`;

    // const fileName = 'uploaded_on_' + Date.now() + '.jpg';

    // upload this buffer on AWS S3
  } catch (error) {
    console.log('Error generating screenshot!\n', error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
};
