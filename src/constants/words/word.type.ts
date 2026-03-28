export type Word = {
  id: string;
  japanese: string;
  reading: string;
  meanings: string[];
  examples: string[];
};

export type LevelWords = {
  units: Record<string, Word[]>;
};
