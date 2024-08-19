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

  const dictFr = {
    C: "Do",
    Db: "Do #",
    D: "Ré",
    Eb: "Ré #",
    E: "Mi",
    F: "Fa",
    Gb: "Fa #",
    G: "Sol",
    Ab: "Sol #",
    A: "La",
    Bb: "La #",
    B: "Si",
  };

  return (
    <button
      className="hover:text-white rounded-xl text-6xl p-6 border-4 hover:border-blue-800 hover:bg-blue-600 w-36 h-48 flex flex-col items-center justify-center
      active:scale-95 transition-all duration-75 border-neutral-200"
      onClick={() => {
        props.handleClick(props.name);
      }}
    >
      {props.lang === "jp" ? (
        dict[props.name].length === 1 ? (
          <span className="text-center text-4xl h-full items-end flex flex-col justify-end p-4">{dict[props.name]}</span>
        ) : (
          <div className="text-center text-4xl flex flex-col items-end justify-end h-full p-4">
            <span>{dict[props.name][0]}</span>
            <span>{dict[props.name][1]}</span>
          </div>
        )
      ) : (
        <span className="text-center text-4xl flex flex-col items-end justify-end h-full py-4">{dictFr[props.name]}</span>
      )}
    </button>
  );
}
