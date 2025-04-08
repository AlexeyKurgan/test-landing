import "./Header.scss";
import Logo from '../../shared/components/logo/Logo';
import Button from '../../shared/components/button/Button';

const Header = () => {
  return (
    <header className='header'>
      <Logo/>
      <div className="account-wrapper">
        <span className="account-already-txt">Already have an account?</span>
        <Button className="sign-in">Sign in</Button>
      </div>
    </header>
  )
}

export default Header;
