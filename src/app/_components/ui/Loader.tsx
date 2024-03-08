import React from "react";

const spinnerStyle: React.CSSProperties = {
  border: "4px solid #f3f3f3",
  borderRadius: "50%",
  borderTop: "4px solid #3498db",
  width: "40px",
  height: "40px",
  animation: "spin 2s linear infinite",
};

export const Loader = () => {
  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={spinnerStyle}></div>
    </>
  );
};

export default Loader;
