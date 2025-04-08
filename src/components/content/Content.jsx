import MainScreen from "../main-screen/MainScreen";
import PreferenceForm from "../preference-form/PreferenceForm";
import "./Content.scss";

 const Content = ({images}) => {
  // Треба змінити змінну для показу секції форми степа 3
  const isBlockVisible = false;

  return (
    <main className='main'>
      {isBlockVisible ? (
        <MainScreen images={images}/>
      ):(<PreferenceForm/>)}
    </main>
    
  )
}

export default Content;
