import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "*",
    element: NotFound,
  },
];

export default routes;
