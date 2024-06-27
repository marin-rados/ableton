import abletonLogo from "../assets/ableton-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__products">
        <img
          src={abletonLogo}
          className="header__products__logo"
          alt="Ableton Logo"
        />
        <p className="header__products__name">Live</p>
        <p className="header__products__name">Push</p>
        <p className="header__products__name">Note</p>
        <p className="header__products__name">Link</p>
        <p className="header__products__name">Shop</p>
        <p className="header__products__name">Packs</p>
        <p className="header__products__name">Help</p>
        <p className="header__products__name">More +</p>
      </div>
      <div className="header__account">
        <p className="header__account__option">Try Live 12 for free</p>
        <p className="header__account__option">Account</p>
        <p className="header__account__option">Log out</p>
      </div>
    </div>
  );
};

export default Header;
