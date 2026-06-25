export const isHash = (url: string) => typeof url === "string" && url.startsWith("#");

export const isExternal = (url: string) =>
  /^https?:\/\//i.test(url) || /^mailto:|^tel:/i.test(url);

export const buildHref = (pathname: string, url: string) => {
  if (!url) return "/";
  if (isHash(url)) return pathname === "/" ? url : `/${url.replace(/^#/, "#")}`;
  return url.startsWith("/") ? url : `/${url}`;
};
