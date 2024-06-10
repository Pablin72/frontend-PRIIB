import Styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer_left}>
        <a href="#link1">About</a>
        <a href="#link2">Contact</a>
        <a href="#link3">Copy Right</a>
      </div>
      <div className={Styles.footer_right}>
        <p>Company Info</p>
      </div>
    </footer>
  );
}

export default Footer;