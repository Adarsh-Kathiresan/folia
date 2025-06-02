import {
  index,
  route,
  layout,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("./routes/AppLayout.tsx", [
    index("./routes/Home.tsx"),
    route("about", "./routes/About.tsx"),
    route("showcase", "./routes/Showcase.tsx"),
    route("projects", "./routes/Projects.tsx"),
  ]),
] satisfies RouteConfig;
