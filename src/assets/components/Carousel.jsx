
import { Link } from 'react-router-dom';
import image from '../images/pngwing 1.png'


const Carousel = () => {
    return (
        <div>
            <div className="flex items-center rounded-xl bg-slate-400">
                <div className="flex-1 font-bold text-xl">
                    <h2>All book house is a complete book store <br></br>Just check your best book<br></br>Lets check</h2>
                 <Link to=''><button className="btn btn-outline btn-secondary  font-bold text-xl">Listed Books</button></Link> 
                </div>
                <div className="flex-1">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Carousel;