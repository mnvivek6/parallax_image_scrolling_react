import { Parallax } from 'react-parallax';
import Underwater2 from '../img/milos-prelevic-2xuiab6o-qc-unsplash.jpg'
const ImageThree = () => (
    <Parallax className='image' bgImage={Underwater2} bgImageAlt="the cat" strength={200}>
        <div className='content'>
            <span className='img-txt'>Mn vivek</span>
        </div>
    </Parallax>
);

export default ImageThree