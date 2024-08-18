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
      className="rounded-md h-24 hover:text-pink-100 text-6xl hover:drop-shadow-glow w-full"
      onClick={() => {
        props.handleClick(props.name);
      }}
    >
      <span className="text-center">
        {dict[props.name]}
      </span>
    </button>
  );
}
