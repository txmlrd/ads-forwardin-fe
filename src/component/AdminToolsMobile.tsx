import React from "react";
import { useState } from "react";

function AdminToolsMobile() {
  const [isFirstImageOnTop, setIsFirstImageOnTop] = useState<boolean>(true);

  const handleImageClick = () => {
    setIsFirstImageOnTop(!isFirstImageOnTop);
  };
  return (
    <div className="relative flex md:hidden  w-[318px] h-[200px] md:w-[1000px] md:h-[400px]" onClick={handleImageClick}>
      {isFirstImageOnTop ? (
        <>
          <img
            src="images/landingpage/admintools1.png"
            alt="admintools1"
            className="absolute top-0 left-0 w-full h-full object-contain cursor-pointer transition-transform duration-500 ease-in-out transform-gpu hover:translate-x-2 hover:translate-y-2 z-20"
          />
          <img src="images/landingpage/admintools2.png" alt="admintools2" className="absolute bottom-[10%] right-[10%] w-full h-full object-contain cursor-pointer transition-transform duration-500 ease-in-out transform-gpu " />
        </>
      ) : (
        <>
          <img
            src="images/landingpage/admintools2.png"
            alt="admintools2"
            className="absolute top-0 left-0 w-full h-full object-contain cursor-pointer transition-transform duration-500 ease-in-out transform-gpu hover:translate-x-2 hover:translate-y-2 z-20"
          />
          <img src="images/landingpage/admintools1.png" alt="admintools1" className="absolute bottom-[10%] right-[10%] w-full h-full object-contain cursor-pointer transition-transform duration-500 ease-in-out transform-gpu" />
        </>
      )}
    </div>
  );
}

export default AdminToolsMobile;
