
import { NavLink, useLoaderData } from 'react-router-dom';
import images from '../images/pngwing 1.png'
import Maincard from './Maincard';




const Home = () => {

  const datat = useLoaderData();
 
  return (
    <div>
      <div className="flex items-center bg-slate-400 rounded-xl">
        <div className="flex-1"><h2 className='font-bold text-2xl'>This is our all book house online store.<br></br>Just check here and findout your concept</h2>
          <NavLink to={`/listedbook`} className="btn btn-active btn-primary">Listed Books</NavLink>

        </div>
        <div className="flex-1">
          <img src={images} alt="" />
        </div>



      </div>
      <h2 className='font-bold text-3xl text-center'>Books</h2>

      <div className='grid grid-cols-3'>
        {
          datat?.map(data => <Maincard key={data.bookId} data={data}></Maincard>)
        }
      </div>


    </div>


  );
};

export default Home;