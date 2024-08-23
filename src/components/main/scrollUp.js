import React from "react";

const ScrollUp = () => {
  return (
    <>
      <div className="aspect-square bg-sky-600 text-white p-3 rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
          />
        </svg>
      </div>
    </>
  );
};

export default ScrollUp;
