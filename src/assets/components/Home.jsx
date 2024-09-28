/* eslint-disable react-hooks/rules-of-hooks */
import { NavLink, useLoaderData } from 'react-router-dom';
import images from '../images/pngwing 1.png'
import Maincard from './Maincard';


// const navigation = useNavigation()
// if (navigation.state === 'loading') {
//   <Loder></Loder>
// }


const Home = () => {

  const datat = useLoaderData()
  console.log(datat);
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
          datat && datat?.map(data => <Maincard key={data.id} data={data}></Maincard>)
        }
      </div>


    </div>


  );
};

export default Home;