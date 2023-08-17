import puppeteer from 'puppeteer';
import path from 'path';

const screenshot = async (url: string) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  await page.goto(url);

  await page.screenshot({ path: path.join(process.cwd(), `/public/screenshots/ali.jpg`) });

  await browser.close();

  return '/screenshots/ali.jpg';
};

export default screenshot;
