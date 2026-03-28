export const PATH = {
  WORD_BASE: "word",
  WORD_LEVEL: "$level",
  WORD_UNIT: "$unit",
} as const;

const ROUTES = {
  Home: "/",
  Word: `/${PATH.WORD_BASE}`,
  WordLevel: `/${PATH.WORD_BASE}/${PATH.WORD_LEVEL}`,
  WordUnit: `/${PATH.WORD_BASE}/${PATH.WORD_LEVEL}/${PATH.WORD_UNIT}`,
  Test: "/test",
};

export { ROUTES };
