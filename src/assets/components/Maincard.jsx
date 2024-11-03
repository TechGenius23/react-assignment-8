import { Link } from "react-router-dom";


const Maincard = ({data}) => {
   
    const {image, author, rating, category,bookName} = data;
    
    return (
        
        <div className="">

            <Link to={`/home/${data.bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl max-w-sm mx-auto transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline dark:bg-gray-900">

                <figure>
                    <img src={image} alt="" />
                </figure>
                <div className="card-body">


                    <div className="badge badge-secondary">{bookName}</div>

                    <p>By: {author}</p>
                    
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}</div>
                    </div>
                </div>
            </div>
            </Link>








        </div>


    );
};

export default Maincard;