import React from "react";

function ClipboardIcon({ color, ratio }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ratio ?? "2.188vw"}
      height={ratio ?? "2.188vw"}
      fill="none"
      viewBox="0 0 42 42"
    >
      <path
        fill={color}
        d="M10.5 28.875a2.625 2.625 0 015.25 0V31.5a2.625 2.625 0 01-5.25 0v-2.625zm15.75-10.5a2.625 2.625 0 015.25 0V31.5a2.625 2.625 0 01-5.25 0V18.375zm-7.875 5.25a2.625 2.625 0 015.25 0V31.5a2.625 2.625 0 01-5.25 0v-7.875z"
      ></path>
      <path
        fill={color}
        d="M10.5 3.938H7.875a5.25 5.25 0 00-5.25 5.25V36.75A5.25 5.25 0 007.875 42h26.25a5.25 5.25 0 005.25-5.25V9.187a5.25 5.25 0 00-5.25-5.25H31.5v2.626h2.625a2.625 2.625 0 012.625 2.625V36.75a2.625 2.625 0 01-2.625 2.625H7.875A2.625 2.625 0 015.25 36.75V9.187a2.625 2.625 0 012.625-2.624H10.5V3.938z"
      ></path>
      <path
        fill={color}
        d="M24.938 2.625a1.313 1.313 0 011.312 1.313v2.624a1.313 1.313 0 01-1.313 1.313h-7.875a1.313 1.313 0 01-1.312-1.313V3.938a1.313 1.313 0 011.313-1.312h7.875zM17.063 0a3.937 3.937 0 00-3.938 3.938v2.624a3.937 3.937 0 003.938 3.938h7.875a3.937 3.937 0 003.937-3.938V3.938A3.937 3.937 0 0024.937 0h-7.875z"
      ></path>
    </svg>
  );
}

export default ClipboardIcon;
