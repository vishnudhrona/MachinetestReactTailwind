
const Bodyslider = () => {
  return (
    <div className="bg-gray-400">
        <img className="pl-44" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/your_study_station_01102021_31.jpg" alt="" />
    <div className="container-fluid pl-7  pr-7 py-3">
      <div id="controls-carousel" className="relative w-full" data-carousel="static">
  {/* Carousel wrapper */}
  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    {/* Item 1 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <img
        src="https://previews.123rf.com/images/vectormarco/vectormarco1908/vectormarco190801299/131791709-welcome-back-to-school-banner-poster-with-colorful-school-supplies-education-tools-bag-book-flat.jpg"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
    {/* Item 2 */}
    <div
      className="hidden duration-700 ease-in-out"
      data-carousel-item="active"
    >
      <img
        src="https://png.pngtree.com/thumb_back/fw800/background/20230705/pngtree-school-supplies-banner-cartoon-blackboard-pencils-and-stationery-on-a-white-image_3802144.png"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
    {/* Item 3 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <img
        src="https://png.pngtree.com/background/20210709/original/pngtree-cartoon-hand-painted-school-season-school-supplies-picture-image_923821.jpg"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
    {/* Item 4 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <img
        src="https://www.creativefabrica.com/wp-content/uploads/2021/08/28/Vector-Cartoon-School-Supplies-character-Graphics-16471223-1-580x386.jpg"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
    {/* Item 5 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <img
        src="https://www.shutterstock.com/shutterstock/photos/2127714104/display_1500/stock-vector-group-of-little-children-draw-big-art-together-with-large-school-supplies-colorful-cartoon-2127714104.jpg"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
  </div>
  {/* Slider controls */}
  <button
    type="button"
    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    data-carousel-prev=""
  >
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg
        className="w-4 h-4 text-white dark:text-gray-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 1 1 5l4 4"
        />
      </svg>
      <span className="sr-only">Previous</span>
    </span>
  </button>
  <button
    type="button"
    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    data-carousel-next=""
  >
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg
        className="w-4 h-4 text-white dark:text-gray-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m1 9 4-4-4-4"
        />
      </svg>
      <span className="sr-only">Next</span>
    </span>
  </button>
</div>

    </div>
    </div>
  )
}

export default Bodyslider
