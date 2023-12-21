import { Parallax } from 'react-parallax';
import UnderWater3 from '../img/raychan-L2X8XMVd_rY-unsplash.jpg'
const ImageTwo = () => (
    <Parallax className='image' bgImage={UnderWater3} bgImageAlt="the cat" strength={200}>
        <div className='content'>
            <span className='img-txt'>FISHSSS</span>
        </div>
    </Parallax>
);

export default ImageTwo