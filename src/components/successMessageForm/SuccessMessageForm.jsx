import "./SuccessMessageForm.scss";
import successImage from "../../assets/thanks_your_answers.png";
import Button from "../../shared/components/button/Button";
import LPInput from "../../shared/components/Input/LPInput";

const SuccessMessageForm = () => {
  return (
    <form className="success-message-form">
        <div className="image-wrapper">
          <img src={successImage} alt="congratulations_image" />
        </div>
        <h1 className="title title--success-message-form">Thanks for your answers!</h1>
        <h2 className="subtitle subtitle--success-message-form">Please check the box below to accept our rules. You’re all set!</h2>

        <div className="checkbox-wrapper">
            <LPInput
                className="lp-checkbox"
                id="checkbox"
                type="checkbox"
            />
             <label for="checkbox" className="disclaimer">
             I have read, understand and agree to Terms of Use, Privacy Policy, Cookie Policy, Billing & Refund Policy, Disclosures & Disclaimers
            </label>
        </div>
       
        <Button className="btn-continue" type="submit">JOIN NOW →</Button>
    </form>
  )
}

export default SuccessMessageForm;
