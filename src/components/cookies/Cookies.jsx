import Button from "../../shared/components/button/Button";
import "./Cookies.scss";

const Cookies = () => {
  return (
    <div className="cookies-section">
        <p>We use cookies to make your experience better! If you continue to use this site we will assume you are happy with it.</p>
        <Button className="sign-in cookies-btn">Sign in</Button>
      </div>
  )
}

export default Cookies;
