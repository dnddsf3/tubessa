import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/index.css";

const InputWaktu = ({ updateEntry }) => {
  const navigate = useNavigate();
  const [duration, setDuration] = useState("");

  const handleSubmit = () => {
    updateEntry("duration", `${duration}`);
    navigate("/");
  };

  return (
    <div className="body-waktu">
      <div className="flex flex-col items-center justify-center min-h-screen gap-[30px] sm:gap-[40px]">
        <h2 className="text-[25px] font-bold sm:text-[40px]">Masukan Waktu Tempuh</h2>
        <div className="flex items-center border-b-2 w-[200px]">
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Waktu"
            className="bg-transparent focus:outline-none w-full text-[20px] sm:text-[30px]"
          />
          <h2 className="font-semibold text-[20px] sm:text-[30px]">Menit</h2>
        </div>
        <button
          className="btn text-white hover:bg-white bg-[#4da6ff] hover:text-[#4da6ff] border-0 px-[40px] sm:px-[50px] sm:text-[20px]"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Submit
        </button>
        <dialog id="my_modal_5" className="modal modal-center sm:modal-middle">
          <div className="modal-box bg-white rounded-lg shadow-xl p-6 flex flex-col items-center text-center">
            <h3 className="font-bold text-black text-lg">Data telah berhasil disimpan.</h3>
            <p className="py-4 text-black">Lihat data di data perjalanan.</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn bg-[#41BE46] border-none text-white" onClick={handleSubmit}>
                  OK
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default InputWaktu;
