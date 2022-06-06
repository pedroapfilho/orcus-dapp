import React from "react";

function VaultIcon({ color, ratio }) {
  return (
    <svg
      height={ratio ?? "1.779vw"}
      width={ratio ?? "1.779vw"}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8888 15.1075C12.6713 14.3512 13.2119 13.3797 13.442 12.316C13.6722 11.2523 13.5816 10.1442 13.1817 9.13205C12.7819 8.11986 12.0907 7.24905 11.1957 6.62985C10.3007 6.01064 9.24218 5.67086 8.15401 5.65353C7.06584 5.6362 5.99699 5.94208 5.08274 6.53247C4.1685 7.12286 3.44995 7.97121 3.01806 8.97015C2.58616 9.96908 2.46033 11.0737 2.65649 12.1442C2.85265 13.2147 3.36198 14.2029 4.12002 14.9838"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.4736 17.6557C13.173 16.6098 12.5688 15.6765 11.7376 14.974C10.9064 14.2715 9.88544 13.8315 8.804 13.7095C7.72256 13.5875 6.62924 13.7891 5.66241 14.2887C4.69559 14.7884 3.89873 15.5636 3.37268 16.5163C2.84664 17.469 2.61507 18.5564 2.70728 19.6408C2.79949 20.7252 3.21133 21.7578 3.89068 22.6081C4.57002 23.4583 5.48634 24.0879 6.52365 24.4171C7.56095 24.7463 8.67261 24.7604 9.71793 24.4576"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5009 12.405C16.7917 13.4538 17.387 14.3927 18.2117 15.1029C19.0363 15.8132 20.0531 16.2628 21.1334 16.3949C22.2136 16.527 23.3088 16.3356 24.2803 15.845C25.2518 15.3544 26.0558 14.5866 26.5907 13.6388C27.1257 12.691 27.3674 11.6059 27.2853 10.5206C27.2032 9.43542 26.8009 8.39895 26.1295 7.54243C25.4581 6.6859 24.5477 6.04782 23.5135 5.70895C22.4792 5.37009 21.3677 5.34567 20.3196 5.63878M16.4259 17.6394C15.3758 17.3534 14.2645 17.3853 13.2326 17.7312C12.2008 18.077 11.2947 18.7212 10.6291 19.5823C9.96345 20.4433 9.56825 21.4824 9.49347 22.5682C9.41869 23.6539 9.6677 24.7374 10.209 25.6816C10.7503 26.6257 11.5595 27.3881 12.5342 27.8721C13.5089 28.3562 14.6054 28.5402 15.6847 28.4008C16.764 28.2615 17.7778 27.805 18.5976 27.0893C19.4174 26.3736 20.0065 25.4307 20.2903 24.38L16.4259 17.6394Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.8373 15.2227C17.1003 16.0235 16.6175 17.0249 16.4499 18.1003C16.2823 19.1756 16.4375 20.2765 16.8958 21.2636C17.3542 22.2507 18.095 23.0796 19.0247 23.6454C19.9544 24.2113 21.031 24.4886 22.1183 24.4423C23.2057 24.396 24.2548 24.0281 25.133 23.3853C26.0111 22.7424 26.6789 21.8535 27.0516 20.831C27.4244 19.8085 27.4854 18.6984 27.227 17.6412C26.9685 16.584 26.4023 15.6273 25.5998 14.8921M13.628 12.3739C14.6807 12.6499 15.7917 12.6074 16.8203 12.2517C17.8489 11.8959 18.7488 11.2431 19.4061 10.3757C20.0635 9.50827 20.4487 8.46534 20.5131 7.3789C20.5774 6.29246 20.318 5.21135 19.7676 4.27242C19.2173 3.33349 18.4007 2.57895 17.4213 2.10431C16.4419 1.62967 15.3437 1.45627 14.2657 1.60605C13.1877 1.75584 12.1784 2.22208 11.3655 2.94576C10.5527 3.66944 9.97275 4.61802 9.69922 5.67144L13.628 12.3739Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default VaultIcon;
