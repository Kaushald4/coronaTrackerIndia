import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Loadingindicator() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        height: "90vh"
      }}
    >
      <Loader type="Bars" color="#000000" height={80} width={80} />
    </div>
  );
}
