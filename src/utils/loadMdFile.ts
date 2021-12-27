import { readFile } from "fs/promises";
import throwError from "./throwError";

const ROUTE_REG_EXP = /\/(?<route>(?:[^\/])+)\.md$/;

const toRoute = (filePath: string) =>
  filePath.match(ROUTE_REG_EXP)?.groups?.route ??
  throwError("[loadMdFile] invalid filePath regular expression");

const loadMdFile = async (filePath: string) => {
  const route = toRoute(filePath);
  const content = await readFile(filePath, "utf-8");

  return { route, content };
};

export default loadMdFile;
