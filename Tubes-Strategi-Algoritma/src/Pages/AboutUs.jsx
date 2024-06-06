import React from "react";
import "../../src/index.css";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleShowData = () => {
    navigate("/showdata");
  };

  const handleLanding = () => {
    navigate("/");
  };

  return (
    <div className="body-result px-[35px]">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[30px] md:text-[40px]">Optimasi Penempatan Titik Pelayanan Ojek Online</h2>
          <h2 className="font-bold text-[30px] md:text-[40px]">di Area Metropolitan</h2>
          <div className="mt-[20px] md:mt-[40px] flex flex-col gap-[20px] md:gap-[40px] md:flex-row text-center">
            <div className="flex flex-col items-center border-2 backdrop-blur-md backdrop-filter px-[30px] py-[20px] md:px-[60px] md:py-[40px] rounded-xl">
              <h2 className="font-bold text-[20px] md:text-[30px]">Tujuan</h2>
              <h2 className="md:text-[20px]">Website ini bertujuan untuk mencari pilihan shelter terbaik bagi pengemudi ojek. Hal ini bertujuan untuk mengurangi waktu tunggu pelanggan dan jarak yang harus ditempuh serta meningkatkan pendapatan pengemudi.</h2>
            </div>
            <div className="flex flex-col items-center border-2 backdrop-blur-md backdrop-filter px-[30px] py-[20px] md:px-[60px] md:py-[40px] rounded-xl">
              <h2 className="font-bold text-[20px] md:text-[30px]">Pengembang</h2>
              <h2 className="md:text-[20px]">1. Dinda Desfira (1301223236)</h2>
              <h2 className="md:text-[20px]">2. Indah Pratiwi (1301223157)</h2>
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
        >
          About Us
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
