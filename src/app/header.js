import Styles from './styles.module.css';

const Header = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.header_left}>
        <h1>Info Retrieval</h1>
      </div>
      <div className={Styles.header_right}>
        <button className={Styles.sign_in}>Sign In</button>
      </div>
    </header>
  );
}

export default Header;