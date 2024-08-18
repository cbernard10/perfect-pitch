"use client";
import { useEffect } from "react";

export default function Button(props) {
  const dict = {
    C: "ド",
    D: "レ",
    E: "ミ",
    F: "ファ",
    G: "ソ",
    A: "ラ",
    B: "シ",
  };

  return (
    <button
      className="hover:text-white text-6xl border-2 border-transparent hover:border-black hover:bg-rose-600 w-36 h-48"
      onClick={() => {
        props.handleClick(props.name);
      }}
    >
      <span className="text-center">{dict[props.name]}</span>
    </button>
  );
}
