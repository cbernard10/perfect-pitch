"use client";

export default function StartButton(props) {
  return (
    <button
      className="px-6 py-2"
      onClick={() => {
        props.handleClick();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="#fff"
        viewBox="0 0 256 256"
        className="hover:drop-shadow-glowGreen"
      >
        <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"></path>
      </svg>
    </button>
  );
}
