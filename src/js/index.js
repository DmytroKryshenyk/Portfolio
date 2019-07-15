import "../styles/styles.scss";

import WorkspaceLayers from "../components/header-workspace/index.js";
import MainNav from "../components/main-nav/main-nav.js";
import Header from "../components/header/header.js";
import SkillsProgresBar from "../components/skills/skills-progress-bar.js";
import ToTopLink from "../components/to-top/to-top.js";

const headerWorkspace = new WorkspaceLayers(document.querySelector(".js-workspace__layers"));
headerWorkspace.init();

const mainNav = new MainNav(document.querySelector(".js-main-nav"));
mainNav.init();

const header = new Header(document.querySelector(".header"));
header.init();

const skillsProgresBar = new SkillsProgresBar(document.querySelector(".skills__list"));
skillsProgresBar.init();

const toTopLink = new ToTopLink(document.querySelector(".to-top-link"));
toTopLink.init();
