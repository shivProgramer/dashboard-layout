// import React from "react";

// import { AiOutlineAppstore } from "react-icons/ai";
// import LineChart from "../components/chart/LineChart ";
// const AllApps = () => {
//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
//         <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">Card 1</div>
//             <p className="text-gray-700 text-base">Description for Card 1</p>
//           </div>
//         </div>
//         <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
//           <div className="px-6 py-4">
//             <div className="flex justify-between items-center font-bold text-xl mb-2">
//               <h3>Card 2 </h3>
//               <AiOutlineAppstore className="text-yellow-700 rounded-full  p-1 bg-[#D4D4D4]" />
//             </div>
//             <p className="text-gray-700 text-base">Description for Card 2</p>
//           </div>
//         </div>
//         <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">Card 3</div>
//             <p className="text-gray-700 text-base">Description for Card 3</p>
//           </div>
//         </div>
//         <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">Card 4</div>
//             <p className="text-gray-700 text-base">Description for Card 4</p>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row gap-4 p-4">
//         <div className="flex-1 bg-white shadow-lg p-2">
//           <LineChart />
//         </div>
//         <div className="flex-1 bg-white shadow-lg p-2">
//           <LineChart />
//         </div>
//       </div>
//     </>
//   );
// };

// export default AllApps;

import React from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import LineChart from "../components/chart/LineChart ";
import NextChart from "../components/chart/NextChart";

const AllApps = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Cards */}
        <div className="max-w-none rounded overflow-hidden shadow-lg bg-white mx-auto sm:mx-0 w-full">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card 1</div>
            <p className="text-gray-700 text-base">Description for Card 1</p>
          </div>
        </div>
        <div className="max-w-none rounded overflow-hidden shadow-lg bg-white mx-auto sm:mx-0 w-full">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center font-bold text-xl mb-2">
              <h3>Card 2 </h3>
              <AiOutlineAppstore className="text-yellow-700 rounded-full p-1 bg-[#D4D4D4]" />
            </div>
            <p className="text-gray-700 text-base">Description for Card 2</p>
          </div>
        </div>
        <div className="max-w-none rounded overflow-hidden shadow-lg bg-white mx-auto sm:mx-0 w-full">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card 3</div>
            <p className="text-gray-700 text-base">Description for Card 3</p>
          </div>
        </div>
        <div className="max-w-none rounded overflow-hidden shadow-lg bg-white mx-auto sm:mx-0 w-full">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card 4</div>
            <p className="text-gray-700 text-base">Description for Card 4</p>
          </div>
        </div>
      </div>

      {/* LineCharts */}
    </div>
  );
};

export default AllApps;
