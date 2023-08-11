import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Megamenu = () => {
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
      <span className="pr-1 flex-1 ">Office Supplies</span>
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
            <h3 className="font-bold mb-2 text-sm whitespace-nowrap">WRITING SUPPLIES</h3>
            <ul className="space-y-2">
              {/* <div className="grid grid-cols-3 gap-x-20 gap-y-4"> */}

                <li><a href="#" className="hover:text-gray-500 text-xs whitespace-nowrap">Highlighters</a></li>
              <li><a href="#" className="hover:text-gray-500 text-xs whitespace-nowrap">Pencils</a></li>
              <li><a href="#" className="hover:text-gray-500 text-xs">Markers</a></li>
              <li><a href="#" className="hover:text-gray-500 text-xs">Pens</a></li>
              <li><a href="#" className="hover:text-gray-500 text-xs">Correction & White-Out</a></li>
              <li><a href="#" className="hover:text-gray-500 text-xs">FOLDERS & FILING</a></li>
              <li><a href="#" className="hover:text-gray-500 text-xs">File Folders</a></li>
              <li><a href="#" className="hover:text-gray-500 text-xs">File Storage</a></li>
              <li><a href="#" className="hover:text-gray-500 text-xs">Hanging File Folders</a></li>
              <li><a href="#" className="hover:text-gray-500 text-xs">Filler Paper</a></li>
              <li><a href="#" className="hover:text-gray-500 text-xs">Sheet Protectors</a></li>
              <li><a href="#" className="hover:text-gray-500 text-xs">Dividers</a></li>
              <li><a href="#" className="hover:text-gray-500 text-xs">BINDERS</a></li>


              </ul>
            </div>
            <div className="sm:col-span-1">
                                <h3 className="font-bold mb-2 text-sm whitespace-nowrap">OFFICE BASICS</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-gray-500 text-xs whitespace-nowrap">Post-it & Sticky Notes</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">Pocket Folders</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">Notepads</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">Notebooks</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">Clips & Fasteners</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">Tape & Adhesives</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">Staplers</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">Scissors</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">CALENDARS & PLANNERS</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">Academic Planners</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">BAGS & BRIEFCASES</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">Backpacks, Totes & Bags</a></li>
                                    <li><a href="#" className="hover:text-gray-500 text-xs">Lunch Totes & Water Bottles</a></li>
                                </ul>
                            </div>
              
                            <div className="sm:col-span-1">
                                <h3 className="font-bold mb-2 text-sm whitespace-nowrap">Papper</h3>
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
                                <h3 className="font-bold mb-2 text-sm">Brands</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="w-20">
                                        <img
                                            src="https://assets.staples-static.com/sbd/cre/products/200412/dg23195/logo_banners/images/dg23195-bos_logos_3m_32x32.png?imWidth=1416"
                                            alt="Featured Item"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="w-20">
                                        <img
                                            src="https://assets.staples-static.com/sbd/cre/products/200412/dg23195/logo_banners/images/dg23195-bos_logos_hp_32x32.png?imWidth=1416"
                                            alt="Featured Item"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="w-20">
                                        <img
                                            src="https://assets.staples-static.com/sbd/cre/products/200412/dg23195/logo_banners/images/dg23195-bos_logos_trured_32x32.png?imWidth=1416"
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

export default Megamenu
