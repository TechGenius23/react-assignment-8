import { Link } from "react-router-dom";



const Hadith = () => {
   
    // const handleclick=blog=>(
    //     saveBlog(blog)
    // );
    return (

        <div>
            <div className="text-center text-3xl">
                <span className="font-extrabold  text-green-500">Book</span><br></br>
                <details className="dropdown">
                    <summary className="btn m-1">open or closed</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a></a></li>
                        <li><a>Item 2</a></li>
                        
                    </ul>
                </details>
            </div>
            <div className="flex my-10">
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                   <Link to='/readbook'  >Readbook</Link>
                </a>
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <button></button>
                    <Link to='/wishlistbook'>Wishlist Book</Link>
                </a>


            </div>

        </div>
    );
};

export default Hadith;