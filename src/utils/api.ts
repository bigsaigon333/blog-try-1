export const fetchMarkdown = async (route: string) => {
  const response = await fetch(`md/${route}.md`);
  const md = await response.text();

  return md;
};
