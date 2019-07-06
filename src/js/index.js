import "../styles/styles.scss";

import workspaceLayers from "../components/header-workspace/index.js";
const headerWorkspace = new workspaceLayers(document.querySelector(".js-workspace__layers"));
headerWorkspace.init();
