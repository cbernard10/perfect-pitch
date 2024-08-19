import React from "react";

function Header(props) {
  return (
    <div
      className="absolute top-0 w-full bg-blue-700 py-4 px-48 text-xl tracking-tightest leading-tight font-extrabold flex flex-row justify-start text-white
        border-b-2 border-b-blue-800
    "
    >
      <span>絶</span>
      <span>対</span>
      <span>音</span>
      <span>感</span>
      <button onClick={props.handleSwitchLang} className="ml-auto">
        {props.lang === "fr" ? "JP" : "FR"}
      </button>
    </div>
  );
}

export default Header;
