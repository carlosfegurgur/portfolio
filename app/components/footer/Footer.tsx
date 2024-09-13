import styles from "./footer.module.css";
import Image from "next/image";
import cfLogo from "../../assets/cfLogo.svg"

export function Footer() {

  return (
    <footer id={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <a aria-label="go back to home" className={styles.logo} href="/">
            <Image
              className={styles['logo-img']}
              loading="lazy"
              decoding="async"
            //   src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Logos/charity-logo.svg"
              src={cfLogo}
              alt="logo"
              width="168"
              height="48"
            />
          </a>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a href="/about" className={styles.link}>
                About
              </a>
            </li>
            <li className={styles.li}>
              <a href="/projects" className={styles.link}>
                Projects
              </a>
            </li>
            <li className={styles.li}>
              <a href="/contact" className={styles.link}>
                Contact
              </a>
            </li>
            <li className={styles.li}>
              <a href="" className={styles.link}>
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.bottom}>
          {/* <!--Social--> */}
          <ul className={styles.social}>
            <li className={styles['social-li']}>
              <a
                href=""
                className={styles['social-link']}
                aria-label="facebook"
                target="_blank"
                rel="noopener"
              >
                <Image
                  className={styles['social-icon default']}
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/facebook-white.svg"
                  alt="icon"
                  loading="lazy"
                  decoding="async"
                  width="12"
                  height="12"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li className={styles['social-li']}>
              <a
                href=""
                className={styles['social-link']}
                aria-label="twitter"
                target="_blank"
                rel="noopener"
              >
                <Image
                  className={styles['social-icon default']}
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-white.svg"
                  alt="icon"
                  loading="lazy"
                  decoding="async"
                  width="12"
                  height="12"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li className={styles['social-li']}>
              <a
                href=""
                className={styles['social-link']}
                aria-label="instagram"
                target="_blank"
                rel="noopener"
              >
                <Image
                  className={styles['social-icon default']}
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-transparent.svg"
                  alt="icon"
                  loading="lazy"
                  decoding="async"
                  width="12"
                  height="12"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li className={styles['social-li']}>
              <a
                href=""
                className={styles['social-link']}
                aria-label="youtube"
                target="_blank"
                rel="noopener"
              >
                <Image
                  className={styles['social-icon default']}
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube-transparent2.svg"
                  alt="icon"
                  loading="lazy"
                  decoding="async"
                  width="12"
                  height="12"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} -{" "}
            <a href="" className={styles['copyright-link']}>
              Carlos Fegurgur
            </a>
          </span>
        </div>
      </div>
      {/* <!--Background--> */}
      <picture className={styles.background}>
      {/* <!--Mobile Image--> */}
        {/* <source media="(max-width: 600px)" srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/kids2.jpg" /> */}
      {/* <!--Tablet and above Image--> */}
        {/* <source media="(min-width: 601px)" srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/kids2.jpg"> */}
        {/* <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/kids2.jpg" alt="kids" width="1280" height="568"/> */}
      </picture>
    </footer>
  );
}
