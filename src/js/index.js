import "../styles/styles.scss";

import WorkspaceLayers from "../components/header-workspace/index.js";
import MainNav from "./components/main-nav.js";

const headerWorkspace = new WorkspaceLayers(document.querySelector(".js-workspace__layers"));
headerWorkspace.init();

const mainNav = new MainNav(document.querySelector(".js-main-nav"));
mainNav.init();





// window.addEventListener("scroll", mainNav.changeStylesIfScrolling);
