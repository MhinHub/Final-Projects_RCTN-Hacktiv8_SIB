import { useState } from "react";
import { IconControl, IconLogo, IconRekap, IconStok } from "../assets/icon";

const AdminSidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#EF6136] h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={IconControl}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={IconLogo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Admin Dashboard
          </h1>
        </div>
        <ul className="pt-6">
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              `}
          >
            <img src={IconStok} />
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200  text-white`}
            >
              Stock Update
            </span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              `}
          >
            <img src={IconRekap} />
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 text-white`}
            >
              Rekap Penjualan
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AdminSidebar;
