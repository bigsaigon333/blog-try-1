import throwError from "./throwError";

const hasKey = <T extends object>(
  key: string | number | symbol,
  obj: T
): key is keyof T => key in obj;

const PARSING_REG_EXP = /(?<key>[\w]+):\s+(?<value>.+)\s+/g;

const table = {
  createdAt: (value: string) => new Date(value),
  minToRead: (value: string) => Number(value),
};

const parseSummary = (summary: string) => {
  const iter = summary.matchAll(PARSING_REG_EXP);

  const parsed: { [key: string]: string | Date | number } = {};

  for (const { groups } of iter) {
    const { key, value } =
      groups ?? throwError("[parseSummary] invalid key and value");

    parsed[key] = hasKey(key, table) ? table[key](value) : value;
  }

  return parsed;
};

export default parseSummary;
