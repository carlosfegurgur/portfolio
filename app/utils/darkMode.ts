// import styles from '../components/layout/Navbar/Navbar.module.css';
// import heroStyles from "../components/sections/Hero/Hero.module.css";
// import galleryStyles from "../components/sections/Gallery/Gallery.module.css";
// import buttonStyles from "../components/common/Button/Button.module.css";
// import aboutSectionStyles from "../about/about.module.css";

// const enableDarkMode = () => {
//   document.body.classList.add(styles["dark-mode"]);
//   document.body.classList.add(heroStyles["dark-mode"]);
//   document.body.classList.add(galleryStyles["dark-mode"]);
//   document.body.classList.add(buttonStyles["dark-mode"]);
//   document.body.classList.add(aboutSectionStyles["dark-mode"]);
//   localStorage.setItem("theme", "dark");
// };
// const disableDarkMode = () => {
//   document.body.classList.remove(styles["dark-mode"]);
//   document.body.classList.remove(heroStyles["dark-mode"]);
//   document.body.classList.remove(galleryStyles["dark-mode"]);
//   document.body.classList.remove(buttonStyles["dark-mode"]);
//   document.body.classList.remove(aboutSectionStyles["dark-mode"]);
//   localStorage.setItem("theme", "light");
// };

// export const detectColorScheme = () => {
//   let theme: string | null = "light";

//   if (localStorage.getItem("theme")) {
//     theme = localStorage.getItem("theme");
//   } else if (
//     window.matchMedia &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches
//   ) {
//     theme = "dark";
//   }

//   theme === "dark" ? enableDarkMode() : disableDarkMode();
// };

// export const handleDarkModeToggle = () => {
//   localStorage.getItem("theme") === "light"
//     ? enableDarkMode()
//     : disableDarkMode();
// };
