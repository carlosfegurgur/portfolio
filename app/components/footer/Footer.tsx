import styles from "./footer.module.css";
import Image from "next/image";
import cfLogo from "../../assets/cfLogo.svg"
import githubIcon from '../../assets/github.svg'
import instagramIcon from '../../assets/instagram.svg'
import linkedinIcon from '../../assets/linkedin.svg'

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
          </ul>
        </div>
        <div className={styles.bottom}>
          {/* <!--Social--> */}
          <ul className={styles.social}>
            {/* Linkedin */}
            <li className={styles['social-li']}>
              <a
                href="https://linkedin.com/in/cfegurgur"
                className={styles['social-link']}
                aria-label="facebook"
                target="_blank"
                rel="noopener"
              >
                <Image
                  className={styles['social-icon']}
                  src={linkedinIcon}
                  alt="icon"
                  loading="lazy"
                  decoding="async"
                  width="24"
                  height="24"
                  aria-hidden="true"
                />
              </a>
            </li>
            {/* Instagram */}
            <li className={styles['social-li']}>
              <a
                href="https://www.instagram.com/carlosaqf"
                className={styles['social-link']}
                aria-label="twitter"
                target="_blank"
                rel="noopener"
              >
                <Image
                  className={styles['social-icon']}
                  src={instagramIcon}
                  alt="icon"
                  loading="lazy"
                  decoding="async"
                  width="24"
                  height="24"
                  aria-hidden="true"
                />
              </a>
            </li>
            {/* Github */}
            <li className={styles['social-li']}>
              <a
                href="https://www.github.com/carlosfegurgur"
                className={styles['social-link']}
                aria-label="instagram"
                target="_blank"
                rel="noopener"
              >
                <Image
                  className={styles['social-icon']}
                  src={githubIcon}
                  alt="icon"
                  loading="lazy"
                  decoding="async"
                  width="24"
                  height="24"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
          <span className={styles.copyright}>
            © Copyright {new Date().getFullYear()} -{" "}
            <a href="" className={styles['copyright-link']}>
              Carlos Fegurgur
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
