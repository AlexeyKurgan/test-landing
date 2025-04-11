import Button from "../../shared/components/button/Button";
import LPInput from "../../shared/components/Input/LPInput";
import "./UsersCallForm.scss";

const UsersCallForm = () => {
  return (
    <form className="users-call-form">
        <h1 className="title title--users-call-form">What name should users call you?</h1>
        <LPInput
                id="username"
                type="text"
                placeholder="Type your username"
            />

        <p className="disclaimer">
            You don’t have to use your real name – feel free to use a nickname. You can change it anytime.
        </p>
        <Button className="btn-continue" type="submit">CONTINUE →</Button>
    </form>
  )
}

export default UsersCallForm;
