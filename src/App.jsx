import './styles/fonts.scss';
import './App.scss';
import photo1 from './assets/Photo.jpg';
import photo2 from './assets/Photo-1.jpg';
import photo3 from './assets/Photo-2.jpg';
import photo4 from './assets/Photo-3.jpg';
import photo5 from './assets/Photo-4.jpg';
import photo6 from './assets/Photo-5.jpg';
import photo7 from './assets/Photo-6.jpg';
import photo8 from './assets/Photo-7.jpg';
import photo9 from './assets/Photo-8.jpg';
import Header from './components/header/Header'
import Cookies from "./components/cookies/Cookies";

import ProgressBar from './shared/components/progress-bar/ProgressBar';
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

function App() {
  const images = [photo8,photo9, photo1, photo2, photo4, photo3, photo5, photo6,photo7];

  return (
    <div className='app-wrapper'>
      <Header/>
      <ProgressBar/>
      <Content images={images}/>
      <Cookies/>
      <Footer/>
    </div>
  )
}

export default App
