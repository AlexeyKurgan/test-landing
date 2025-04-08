import Button from '../../shared/components/button/Button';
import Slider from '../../shared/components/slider/Slider';
import CardOption from '../card/CardOption';
import man from '../../assets/man.png';
import women from '../../assets/women.png';

const MainScreen = ({images}) => {
    return ( <>
        <h1 className="title title--main-screen">Glad you're here!</h1>
        <Slider images={images}/>
        <h2 className="subtitle">Select your sex</h2>
        <div className="sex-selection">
            <CardOption className="male" cardImg={man} imgAlt="Male Icon" title="Male"/>
            <CardOption className="female" cardImg={women} imgAlt="Women Icon" title="Female"/>
        </div>
        <Button className="btn-continue">CONTINUE →</Button>
    </> );
}

export default MainScreen;