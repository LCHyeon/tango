import { N5_WORDS } from "./n5";
import { N4_WORDS } from "./n4";
import { N3_WORDS } from "./n3";
import { N2_WORDS } from "./n2";
import { N1_WORDS } from "./n1";

export const WORDS = {
  N5: N5_WORDS,
  N4: N4_WORDS,
  N3: N3_WORDS,
  N2: N2_WORDS,
  N1: N1_WORDS,
};

export type Level = keyof typeof WORDS;
