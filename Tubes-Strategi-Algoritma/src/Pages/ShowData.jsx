import React from "react";
import "../../src/index.css";
import { useNavigate } from "react-router-dom";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const monthNames = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const dayName = dayNames[date.getDay()];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${dayName}, ${day} ${month} ${year}`;
};

const ShowData = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="body-data px-[35px] bg-black min-h-screen flex flex-col justify-between">
      <div>
        <div className="header flex justify-between items-center pt-[75px]">
          <h2 className="text-[30px] font-bold md:text-[30px]">Data Shelter Menuju Titik Penjemputan Pelanggan</h2>
          <button
            className="btn bg-[#ff9933] text-white px-[30px] hover:text-[#ff9933] border-none hover:bg-white md:px-[55px]"
            onClick={() => navigate("/result")}
          >
            Hitung
          </button>
        </div>
        <div className="mt-[30px]">
          {data.map((entry, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-2 px-[10px] py-[10px] rounded-md md:rounded-2xl mt-[30px] md:px-[30px] bg-white bg-opacity-10 backdrop-blur-lg"
            >
              <h2 className="md:text-[20px] font-bold">{formatDate(entry.date)}</h2>
              <h2 className="md:text-[20px] font-bold">Shelter {entry.shelter}</h2>
              <h2 className="md:text-[20px] font-bold">{entry.distance} Km</h2>
              <h2 className="md:text-[20px] font-bold">{entry.duration} Menit</h2>
            </div>
          ))}
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

export default ShowData;
