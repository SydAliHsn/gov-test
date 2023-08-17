import puppeteer from 'puppeteer';
import path from 'path';

import { generateFileName } from './utils';

const screenshot = async (url: string) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  await page.goto(url);

  const fileName = generateFileName(url) + '.jpg';

  await page.screenshot({
    path: path.join(process.cwd(), `/public/screenshots/${fileName}`),
    type: 'jpeg',
    quality: 50,
  });

  await browser.close();

  return `/screenshots/${fileName}`;
};

export default screenshot;
