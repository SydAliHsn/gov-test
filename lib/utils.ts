import fs from 'fs';
import path from 'path';

export function generateFileName(url: string, maxLength: number = 50): string {
  // Remove special characters and spaces, replace with underscores
  const cleanName = url
    .replace('https://', '')
    .replace('http://', '')
    .replace(/[^\w\s.-]/gi, '_');

  // Limit length
  const truncatedName = cleanName.substring(0, maxLength);

  // Convert to lowercase
  const niceFileName = truncatedName.toLowerCase();

  return niceFileName;
}

export function readDirectory(dirPath: string) {
  const items = fs.readdirSync(dirPath);
  const result = {} as any;

  const files = [];
  items.forEach(item => {
    const itemPath = path.join(dirPath, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      result[item] = readDirectory(itemPath);
    } else if (stats.isFile()) {
      files.push(item);
    }
  });

  if (files.length > 0) {
    result.files = files;
  }

  return result;
}
