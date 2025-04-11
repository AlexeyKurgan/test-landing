import Button from "../../shared/components/button/Button";
import LPInput from "../../shared/components/Input/LPInput";
import "./CreatePasswordForm.scss";

const CreatePasswordForm = () => {
  return (
    <form className="create-password-form">
        <h1 className="title create-password-form">Create your password</h1>
        <div className="input-wrapper">
          <LPInput
                  className="password-input"
                  id="password"
                  type="password"
                  placeholder="Your password"
              />
          <LPInput
                  className="password-input"
                  id="password-confirm"
                  type="password"
                  placeholder="Confirm password"
              />
        </div>

        <p className="disclaimer">
          Passwords must be at least 8 characters long. You can recover passwords at any time using the email address you provided.
        </p>
        <Button className="btn-continue" type="submit">CONTINUE →</Button>
    </form>
  )
}

export default CreatePasswordForm;
