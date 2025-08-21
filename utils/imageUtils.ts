/**
 * Returns the correct image path for both development and production
 * @param path Path to the image in the public folder (e.g., '/image.jpg')
 * @returns Full path to the image
 */
export const getImageUrl = (path: string): string => {
  // In development or when running locally, the path can be used as is
  // In production, the path should be relative to the base URL
  return path.startsWith('/') ? `.${path}` : `/${path}`;
};
