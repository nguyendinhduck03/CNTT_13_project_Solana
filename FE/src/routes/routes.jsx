import config from "../config";
import homeLayout from "../layouts/homeLayout";
import home from "../pages/client/home";
import maGiamGia from "../pages/client/menu";

export const publicRoutes = [
    { path: config.routes.home, component: home, layout: homeLayout },
    { path: config.routes.maGiamGia, component: maGiamGia, layout: homeLayout },
]