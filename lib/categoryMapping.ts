export const categoryDisplayNameMap: { [key: string]: string } = {
  "K-Beauty / Skin Care": "Skin care",
  "Phones/ Tablets": "Mobile devices",
  "Games, Earphone, Watch etc.": "Other electronics",
};

export const categorySlugMap: { [key: string]: string } = {
  "K-Beauty / Skin Care": "skin-care",
  "Phones/ Tablets": "mobile-devices",
  "Games, Earphone, Watch etc.": "other-electronics",
};

export const slugToCategoryName = (slug: string): string | undefined => {
  for (const key in categorySlugMap) {
    if (categorySlugMap[key] === slug) {
      return key;
    }
  }
  return undefined;
};
