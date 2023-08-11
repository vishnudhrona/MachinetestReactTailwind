import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Servicemegamenu = () => {
    const [menuVisible, setMenuVisible] = useState(false);

  // const toggleMenu = () => {
  //   setMenuVisible(!menuVisible);
  // };

  const handleMouseEnter = () => {
    setMenuVisible(true);
};

const handleMouseLeave = () => {
    setMenuVisible(false);
};
  return (
    <div className="relative group"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
    <button
      // onClick={toggleMenu}
      className="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex items-center min-w-32 text-sm"
    >
      <span className="pr-1 flex-1 ">School Supplies</span>
      <span>
        <svg
          className={`fill-current h-4 w-4 transform transition-transform ${
            menuVisible ? 'rotate-0' : 'rotate-90'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </span>
    </button>
    {menuVisible && (
        <div className="absolute top-0 left-full mt-2 p-3">
            <div className=" bg-white inline-block w-auto">
        {/* Mega Menu Content */}
        <div className="flex sm:grid-cols-3 gap-0 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 p-5 h-56 overflow-auto">
          <div className="sm:col-span-1">
            <h3 className="font-bold mb-2 text-sm whitespace-nowrap">SCHOOL SUPPLIES DEALS</h3>
            <ul className="space-y-2">
              {/* <div className="grid grid-cols-3 gap-x-20 gap-y-4"> */}

                <li><a href="#" className="hover:text-gray-500 text-xs whitespace-nowrap">Preschool Supplies</a></li>
              <li><a href="#" className="hover:text-gray-500 text-xs whitespace-nowrap">Elementary School Supplies</a></li>
              <li><a href="#" className="hover:text-gray-500 text-xs">Middle School Supplies</a></li>
              <li><a href="#" className="hover:text-gray-500 text-xs">High School Supplies</a></li>
              <li><a href="#" className="hover:text-gray-500 text-xs">College Supplies</a></li>
              <li><a href="#" className="hover:text-gray-500 text-xs">Middle School Supplies</a></li>

              </ul>
            </div>
            <div className="sm:col-span-1">
                                <h3 className="font-bold mb-2 text-sm whitespace-nowrap">CLASSROOM ESSENTIALS</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-gray-500 text-xs whitespace-nowrap">School Paper</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">School Writing Supplies</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">School Calculators</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">School Planners & Calendars</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">School Glue</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">School Binders & Folders</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">School Notebooks</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">School Art SuppliesSchool Calculators</a></li>

                                </ul>
                            </div>
              
                            <div className="sm:col-span-1">
                                <h3 className="font-bold mb-2 text-sm whitespace-nowrap">TEACHER SUPPLIES</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-gray-500 text-xs">Education Supplies</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">Teaching Supplies </a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">Classroom Cleaning Supplies</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">Coffee & Breakroom Supplies</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">School Games, Puzzles & Toys</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">STEM Education SuppliesClassroom Cleaning Supplies</a></li>
                                </ul>
                            </div>
              </div>


              <div className="flex md:flex-row md:space-x-8 md:mt-0 p-5">
                            {/* Image Column */}
                            <div className="sm:col-span-1">
                                <h3 className="font-bold mb-2 text-sm">Featured Items</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="w-20">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRItz4YFpfsHA5YkmNKdcXuJd8LBKOcktaWgMqqgiMfX988iSdXMJgzc04sbeJIk0LoZdk&usqp=CAU"
                                            alt="Featured Item"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="w-20">
                                        <img
                                            src="https://www.smilykiddos.in/cdn/shop/products/004_1_300x.png?v=1573714999"
                                            alt="Featured Item"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="w-20">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjogPUkyh2N9lQLmsv_epDXoU1lzcWd5T6ww&usqp=CAU"
                                            alt="Featured Item"
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            </div>
              
              {/* Add more categories here */}
          </div>
          {/* Add more mega menu content here */}
        </div>
      // </div>
      
        // </div>
      
    )}
  </div>
  
  )
}

export default Servicemegamenu
