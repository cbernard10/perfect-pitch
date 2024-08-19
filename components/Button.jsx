"use client";
import { useEffect } from "react";

export default function Button(props) {
  const dict = {
    C: "ハ",
    Db: "嬰ハ",
    D: "ニ",
    Eb: "嬰ニ",
    E: "ホ",
    F: "ヘ",
    Gb: "嬰ヘ",
    G: "ト",
    Ab: "嬰ト",
    A: "イ",
    Bb: "嬰イ",
    B: "ロ",
  };

  return (
    <button
      className="hover:text-white rounded-xl text-6xl p-6 border-4 border-transparent hover:border-blue-800 hover:bg-blue-600 w-36 h-48 flex flex-col items-center justify-center
      active:scale-95 transition-all duration-75"
      onClick={() => {
        props.handleClick(props.name);
      }}
    >
      {dict[props.name].length === 1 ? (
        <>
          <span className="text-center text-4xl text-transparent">{"_"}</span>
          <span className="text-center">{dict[props.name]}</span>
        </>
      ) : (
        <>
          <span className="text-center text-4xl">{dict[props.name][0]}</span>
          <span>{dict[props.name][1]}</span>
        </>
      )}
    </button>
  );
}
