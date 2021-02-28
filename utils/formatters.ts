import { List, Sort } from "./types";

export const sortList = (
  data: List[],
  sort?: Sort,
  search?: string
): List[] => {
  let list = data.filter((item) =>
    item.name.toLowerCase().includes(search ?? "".toLowerCase())
  );

  if (sort === "asc") {
    list = list.sort((a, b) => (a?.name ?? "").localeCompare(b?.name ?? ""));
  }
  if (sort === "des") {
    list = list.sort((a, b) => (b?.name ?? "").localeCompare(a?.name ?? ""));
  }

  return list;
};
