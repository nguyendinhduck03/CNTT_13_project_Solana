import config from "../config";
import homeLayout from "../layouts/homeLayout";
import home from "../pages/client/home";

export const publicRoutes = [
    { path: config.routes.home, component: home, layout: homeLayout },
]