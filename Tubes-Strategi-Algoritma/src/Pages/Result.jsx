import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ data }) => {
  const [greedyResult, setGreedyResult] = useState(null);
  const [bruteForceResult, setBruteForceResult] = useState(null);
  const [greedyExecutionTime, setGreedyExecutionTime] = useState(null);
  const [bruteForceExecutionTime, setBruteForceExecutionTime] = useState(null);
  const navigate = useNavigate();

  // Brute force algorithm
  function bruteForceOpt(ojekan) {
    let best = ojekan[0];
    let bestPace = ojekan[0].distance / ojekan[0].duration;

    for (let ojek of ojekan) {
      let currentPace = ojek.distance / ojek.duration;
      if (currentPace > bestPace) {
        best = ojek;
        bestPace = currentPace;
      }
    }

    return best;
  }

  // Greedy algorithm
  function greedyOpt(ojekan) {
    let best = ojekan[0];
    let bestPace = ojekan[0].distance / ojekan[0].duration;

    for (let i = 1; i < ojekan.length; i++) {
      let currentPace = ojekan[i].distance / ojekan[i].duration;
      if (currentPace > bestPace) {
        best = ojekan[i];
        bestPace = currentPace;
      }
    }

    return best;
  }

  useEffect(() => {
    if (data.length > 0) {
      const startTimeGreedy = performance.now();
      const greedyPromise = new Promise((resolve) => {
        resolve(greedyOpt(data));
      });
      const startTimeBruteForce = performance.now();
      const bruteForcePromise = new Promise((resolve) => {
        resolve(bruteForceOpt(data));
      });

      Promise.all([greedyPromise, bruteForcePromise]).then(([greedyResult, bruteForceResult]) => {
        const endTimeGreedy = performance.now();
        const endTimeBruteForce = performance.now();
        setGreedyExecutionTime((endTimeGreedy - startTimeGreedy).toFixed(6));
        setBruteForceExecutionTime((endTimeBruteForce - startTimeBruteForce).toFixed(6));
        setGreedyResult(greedyResult);
        setBruteForceResult(bruteForceResult);
      });
    }
  }, [data]);

  return (
    <div className="body-result px-[35px]">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[30px] md:text-[40px]">Hasil Kalkulasi</h2>
          <div className="mt-[20px] md:mt-[40px] flex flex-col gap-[20px] md:gap-[40px] md:flex-row text-center">
            <div className="flex flex-col items-center backdrop-blur-md backdrop-filter px-[30px] py-[20px] md:px-[60px] md:py-[40px] rounded-xl">
              <h2 className="font-bold text-[20px] md:text-[30px]">Algoritma Brute Force</h2>
              <h2 className="md:text-[20px]">Hasil Terbaik</h2>
              {bruteForceResult && (
                <>
                  <h2 className="mt-[40px] md:text-[20px]">Shelter: {bruteForceResult.shelter}</h2>
                  <h2 className="md:text-[20px]">Jarak : {bruteForceResult.distance} Km</h2>
                  <h2 className="md:text-[20px]">Waktu : {bruteForceResult.duration} Menit</h2>
                  <h2 className="mt-[20px] md:mt-[40px] md:text-[20px]">Execution Time : {bruteForceExecutionTime} ms</h2>
                </>
              )}
            </div>
            <div className="flex flex-col items-center backdrop-blur-md backdrop-filter px-[30px] py-[20px] md:px-[60px] md:py-[40px] rounded-xl">
              <h2 className="font-bold text-[20px] md:text-[30px]">Algoritma Greedy</h2>
              <h2 className="md:text-[20px]">Hasil Terbaik</h2>
              {greedyResult && (
                <>
                  <h2 className="mt-[40px] md:text-[20px]">Shelter: {greedyResult.shelter}</h2>
                  <h2 className="md:text-[20px]">Jarak : {greedyResult.distance} Km</h2>
                  <h2 className="md:text-[20px]">Waktu : {greedyResult.duration} Menit</h2>
                  <h2 className="mt-[20px] md:mt-[40px] md:text-[20px]">Execution Time : {greedyExecutionTime} ms</h2>
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
