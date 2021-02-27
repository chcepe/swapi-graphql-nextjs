export const routes = {
  LANDING: {
    title: "swapi.dev + graphql",
    route: "/",
  },
  CHARACTERS: {
    title: "Characters",
    route: "/characters",
  },
  FILMS: {
    title: "Films",
    route: "/films",
  },
  PLANETS: {
    title: "Planets",
    route: "/planets",
  },
  VEHICLES: {
    title: "Vehicles",
    route: "/vehicles",
  },
  SPECIES: {
    title: "Species",
    route: "/species",
  },
  STARSHIPS: {
    title: "Starhips",
    route: "/starships",
  },
};

type LINK = {
  id: string;
  label: string;
};

export const links: LINK[] = Object.keys(routes)
  .filter((key) => key !== "LANDING")
  .map((key) => ({
    id: routes[key as keyof typeof routes].route,
    label: routes[key as keyof typeof routes].title,
  }));

export default routes;
