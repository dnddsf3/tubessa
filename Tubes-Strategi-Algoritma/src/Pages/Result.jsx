import React from "react";

const Result = () => {
  return (
    <div className="body-result px-[35px]">

      
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[30px] md:text-[40px]">Hasil Kalkulasi</h2>
          <div className="mt-[20px] md:mt-[40px] flex flex-col gap-[20px] md:gap-[40px] md:flex-row text-center">
            <div className="flex flex-col items-center backdrop-blur-md backdrop-filter px-[30px] py-[20px] md:px-[60px] md:py-[40px] rounded-xl">
              <h2 className="font-bold text-[20px] md:text-[30px]">Algoritma Greedy</h2>
              <h2 className="md:text-[20px]">Hasil Terbaik</h2>
              <h2 className="mt-[40px] md:text-[20px]">Shelter: </h2>
              <h2 className="md:text-[20px]">Jarak : Km</h2>
              <h2 className="md:text-[20px]">Waktu : Menit</h2>
              <h2 className="mt-[20px] md:mt-[40px] md:text-[20px]">Execution Time : ms</h2>
            </div>
            <div className="flex flex-col items-center backdrop-blur-md backdrop-filter px-[30px] py-[20px] md:px-[60px] md:py-[40px] rounded-xl">
              <h2 className="font-bold text-[20px] md:text-[30px]">Algoritma Brute Force</h2>
              <h2 className="md:text-[20px]">Hasil Terbaik</h2>
              <h2 className="mt-[40px] md:text-[20px]">Shelter: </h2>
              <h2 className="md:text-[20px]">Jarak : Km</h2>
              <h2 className="md:text-[20px]">Waktu : Menit</h2>
              <h2 className="mt-[20px] md:mt-[40px] md:text-[20px]">Execution Time : ms</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;