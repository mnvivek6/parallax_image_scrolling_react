import { Parallax } from 'react-parallax';
import Underwater from '../img/joel-filipe-_AjqGGafofE-unsplash.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Underwater} bgImageAlt="the cat" strength={200}>
        <div className='content'>
            <span className='img-txt'>Mn vivek</span>
        </div>
    </Parallax>
);

export default ImageOne