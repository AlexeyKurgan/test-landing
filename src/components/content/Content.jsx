import "./Content.scss";
import MainScreen from "../main-screen/MainScreen";
import PreferenceForm from "../preference-form/PreferenceForm";
import UsersCallForm from "../users-call/UsersCallForm";
import EnjoyContentForm from "../enjoyContent/EnjoyContentForm,";
import CreatePassword from "../createPasswordForm/CreatePasswordForm";
import SuccessMessageForm from "../successMessageForm/successMessageForm";

 const Content = ({images}) => {
  

  return (
    <main className='main'>
      {/* <MainScreen images={images}/> */}
      {/* <PreferenceForm/> */}
      {/* <UsersCallForm/> */}
      {/* <EnjoyContentForm/> */}
      {/* <CreatePassword/> */}
      <SuccessMessageForm/>
    </main>
    
  )
}

export default Content;
