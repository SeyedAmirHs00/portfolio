import { useState } from "react";
import Popup from "reactjs-popup";

import CandyMenuImg from "/assets/candy-menu.svg";

import Menu from "./menu";

export default function CandyMenu() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
        <Popup
          trigger={
            <a
              href="#"
              onClick={(e) => {e.preventDefault()}}
              className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer focus:bg-gray-400"
            >
              <img src={CandyMenuImg} className="w-5 h-5" />
            </a>
          }
          position={["bottom left", "bottom right", "bottom center"]}
          closeOnDocumentClick
          // keepTooltipInside="body"
        >
          <div className="p-2 bg-slate-200 rounded-[2.5rem]">
            {" "}
            <Menu className="grid grid-cols-[70px_70px_70px] gap-5 p-7 rounded-[2rem] bg-white" />
          </div>
        </Popup>

    </div>
  );
}
