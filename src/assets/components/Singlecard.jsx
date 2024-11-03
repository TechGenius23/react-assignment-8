import { NavLink, useLoaderData, useParams } from "react-router-dom";




const Singlecard = () => {
    const blog = useLoaderData();
    const { bookId } = useParams();
    const parint = parseInt(bookId);
    const sin = blog.find(sin => sin.bookId === parint);
   console.log(sin);
  

    return (


       
            <div className="flex">
                <div className="flex-1">
                    <div className="">

                        <div className="max-w-xs rounded-xl items-center ">
                            <img
                                src={sin.image}
                                alt="Movie" />

                        </div>
                    </div>
                </div>
                <div className="card-body flex-1 border-red-500 rounded-xl ">
                    <span className="font-bold text-3xl"><h2>{sin.bookName}</h2></span>
                    <span className="font-semibold"><h2>By:{sin.author}</h2></span>
                    <span className=""><h2>{sin.category}</h2></span>
                    <span className="font-semibold"><h2>Review: {sin.review}</h2></span>
                    <span className="text-green-400"><h2>Tags: {sin.tags}</h2></span>
                    <span className=""><h2>Number of pages:{sin.totalPages}</h2></span>
                    <span className=""><h2>Publisher: {sin.publisher}</h2></span>
                    <span className=""><h2>Year: {sin.year}</h2></span>
                    <span className=""><h2>Rating: {sin.rating}</h2></span>
                   
                    <div className="flex gap-4">
                    <NavLink to='/readbook'  className="btn btn-info">Read    </NavLink>
                    <NavLink to='/wishlistbook' className="btn btn-info">Wishlist</NavLink>
                    </div>
                </div>
            </div>
        
    );
};

export default Singlecard;