import puppeteer from 'puppeteer';
import path from 'path';

const screenshot = async (url: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  await page.screenshot({ path: path.join(process.cwd(), `/public/screenshots/ali.jpg`) });

  await browser.close();
};

export default screenshot;
