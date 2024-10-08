"use client";

export default function ReplayButton(props) {
  return (
    <button
      className="p-8 border-4 border-transparent hover:border-blue-400 hover:bg-blue-200 group rounded-full"
      onClick={() => {
        props.handleReplay();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="#000"
        viewBox="0 0 256 256"
      >
        <path d="M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"></path>
      </svg>
    </button>
  );
}
