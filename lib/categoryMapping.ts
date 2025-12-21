export const categoryDisplayNameMap: { [key: string]: string } = {
  "Phones/ Tablets": "Mobile devices",
};

export const categorySlugMap: { [key: string]: string } = {
  "Phones/ Tablets": "mobile-devices",
};

export const slugToCategoryName = (slug: string): string | undefined => {
  for (const key in categorySlugMap) {
    if (categorySlugMap[key] === slug) {
      return key;
    }
  }
  return undefined;
};
