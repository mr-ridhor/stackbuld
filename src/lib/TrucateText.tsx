// utility.ts
export const TruncateText = (text: string, maxLength: number = 10): string => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};
