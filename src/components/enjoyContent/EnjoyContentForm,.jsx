import "./EnjoyContentForm.scss";
import smile1 from "../../assets/smile1.png";
import smile2 from "../../assets/smile2.png";
import Button from "../../shared/components/button/Button";
import LPInput from "../../shared/components/Input/LPInput";
import CardOption from "../card/CardOption";

const EnjoyContentForm = () => {
  return (
    <form className="enjoy-content-form">
        <h1 className="title title--enjoy-content-form">What kind of content do you enjoy? 👀</h1>
        <div className="sex-selection">
            <CardOption className="male" cardImg={smile1} imgAlt="Hot Icon" title="Hot"/>
            <CardOption className="female" cardImg={smile2} imgAlt="Trendy Icon" title="Trendy"/>
        </div>
        <h2 className="subtitle subtitle--enjoy-content-form">What is your email address?</h2>
        <LPInput
                id="email"
                type="email"
                placeholder="Type your email"
            />
            
        <p className="disclaimer">
            Email is required for registration.
        </p>
        <Button className="btn-continue" type="submit">CONTINUE →</Button>
    </form>
  )
}

export default EnjoyContentForm;
