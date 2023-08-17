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
