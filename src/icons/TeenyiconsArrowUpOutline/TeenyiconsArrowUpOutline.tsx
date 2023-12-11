/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const TeenyiconsArrowUpOutline = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`teenyicons-arrow-up-outline ${className}`}
      fill="none"
      height="15"
      viewBox="0 0 15 15"
      width="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.5 1.49997L7.854 1.14597L7.5 0.792969L7.146 1.14597L7.5 1.49997ZM7.146 1.85397L11.146 5.85397L11.854 5.14597L7.854 1.14597L7.146 1.85397ZM7.146 1.14597L3.146 5.14597L3.854 5.85397L7.854 1.85397L7.146 1.14597ZM7 1.49997V14H8V1.49997H7Z"
        fill="black"
      />
    </svg>
  );
};
