import style from "./Header.module.css";

const Header = () => (
  <header className={style.header}>
    <div className={style.img} />
    <h1 className={style.title}>Danny Kim</h1>
    <h2 className={style.description}>
      <div>프론트엔드 개발자 김동희입니다.</div>
      <div>오픈소스에 기여하고 있습니다.</div>
    </h2>
    <div className={style.linkContainer}>
      <span>Github</span>
      <span>Resume</span>
      <span>Mail</span>
    </div>
  </header>
);

export default Header;
