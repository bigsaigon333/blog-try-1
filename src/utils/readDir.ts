import { readdir } from "fs/promises";
import path from "path";

const readDir = async (dirPath: string) => {
  const files = await readdir(dirPath);

  return files.map((file) => path.resolve(dirPath, file));
};

export default readDir;
