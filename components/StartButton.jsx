"use client";

export default function StartButton(props) {
  return (
    <button
      className="p-8 border-4 border-blue-400 bg-blue-100 hover:bg-blue-200 group rounded-full active:scale-95"
      onClick={() => {
        props.handleClick();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="#28f"
        viewBox="0 0 256 256"
      >
        <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"></path>
      </svg>
    </button>
  );
}
