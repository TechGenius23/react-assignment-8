import { NavLink, useLoaderData } from 'react-router-dom';
import images from '../images/pngwing 1.png';
import Maincard from './Maincard';

const Home = () => {
  const datat = useLoaderData();

  // Debugging: Log the fetched data
  console.log(datat);

  return (
    <div>
      <div className="flex items-center bg-slate-400 rounded-xl">
        <div className="flex-1">
          <h2 className="font-bold text-2xl">
            This is our all book house online store.
            <br />
            Just check here and find out your concept
          </h2>
          <NavLink to={`/listedbook`} className="btn btn-active btn-primary">
            Listed Books
          </NavLink>
        </div>
        <div className="flex-1">
          <img src={images} alt="Books Illustration" />
        </div>
      </div>

      <h2 className="font-bold text-3xl text-center">Books</h2>

      <div className="grid grid-cols-3 gap-4">
        {Array.isArray(datat) ? (
          datat.map((data) => <Maincard key={data.bookId} data={data}></Maincard>)
        ) : (
          <p className="text-center">Wait to the data load or Click Home</p>
        )}
      </div>
    </div>
  );
};

export default Home;
