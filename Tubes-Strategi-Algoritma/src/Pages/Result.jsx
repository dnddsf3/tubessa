import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { bruteForce, greedy } from "../Utils/Algorithms";

const Result = ({ data }) => {
  const [bruteForceResult, setBruteForceResult] = useState(null);
  const [greedyResult, setGreedyResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.length > 0) {
      // Hitung hasil menggunakan algoritma Brute Force
      const startTimeBruteForce = performance.now();
      const bruteForceResult = bruteForce(data);
      const endTimeBruteForce = performance.now();
      const executionTimeBruteForce = (endTimeBruteForce - startTimeBruteForce).toFixed(6);
      setBruteForceResult({ ...bruteForceResult, executionTime: executionTimeBruteForce });

      // Hitung hasil menggunakan algoritma Greedy
      const startTimeGreedy = performance.now();
      const greedyResult = greedy(data);
      const endTimeGreedy = performance.now();
      const executionTimeGreedy = (endTimeGreedy - startTimeGreedy).toFixed(6);
      setGreedyResult({ ...greedyResult, executionTime: executionTimeGreedy });
    }
  }, [data]);

  return (
    <div className="body-result px-[35px]">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[30px] md:text-[40px]">Hasil Optimasi Shelter Terbaik</h2>
          <div className="mt-[20px] md:mt-[40px] flex flex-col gap-[20px] md:gap-[40px] md:flex-row text-center">
            <div className="flex flex-col items-center border-2 backdrop-blur-md backdrop-filter px-[30px] py-[20px] md:px-[60px] md:py-[40px] rounded-xl">
              <h2 className="font-bold text-[20px] md:text-[30px]">Algoritma Brute Force</h2>
              {bruteForceResult && (
                <>
                  <h2 className="mt-[40px] md:text-[20px]">Shelter: {bruteForceResult.bestShelterByDensity}</h2>
                  <h2 className="md:text-[20px]">Waktu Eksekusi: {bruteForceResult.executionTime} ms</h2>
                </>
              )}
            </div>
            <div className="flex flex-col items-center border-2 backdrop-blur-md backdrop-filter px-[30px] py-[20px] md:px-[60px] md:py-[40px] rounded-xl">
              <h2 className="font-bold text-[20px] md:text-[30px]">Algoritma Greedy</h2>
              {greedyResult && (
                <>
                  <h2 className="mt-[40px] md:text-[20px]">Berdasarkan Jarak: {greedyResult.bestShelterByWeight}</h2>
                  <h2 className="md:text-[20px]">Berdasarkan Waktu: {greedyResult.bestShelterByProfit}</h2>
                  <h2 className="md:text-[20px]">Berdasarkan Density: {greedyResult.bestShelterByDensity}</h2>
                  <h2 className="md:text-[20px]">Waktu Eksekusi: {greedyResult.executionTime} ms</h2>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 mt-4 mr-4 flex items-center">
        <button
          className="btn bg-transparent text-white hover:bg-transparent hover:text-[#3399ff] border-none ml-4 md:text-lg md:px-8 md:rounded-1xl"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="btn bg-transparent text-white hover:bg-transparent hover:text-[#3399ff] border-none ml-4 md:text-lg md:px-8 md:rounded-1xl"
          onClick={() => navigate("/showdata")}
        >
          Data Perjalanan
        </button>
        <button
          className="btn bg-transparent text-white hover:bg-transparent hover:text-[#3399ff] border-none ml-4 md:text-lg md:px-8 md:rounded-1xl"
          onClick={() => navigate("/aboutus")}
        >
          About Us
        </button>
      </div>
    </div>
  );
};

export default Result;
