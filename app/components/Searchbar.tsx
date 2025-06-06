// /* components/SearchBar.tsx */
// import { FC } from "react";

// const SearchBar: FC = () => {
//   return (
//     <div
//       className="w-380 h-180 bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: "url('/image/pexels-divinetechygirl-1181352.jpg')" }}
//     >
//       <div className="">
//         <div className="relative">
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;


/* components/SearchBar.tsx */
import { FC } from "react";

const SearchBar: FC = () => {
  return (
    <div
      className="w-379 h-150 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/image/students.jpg')",
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="relative w-full max-w-3xl">
          {/* You can add a search input below */}
          
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
