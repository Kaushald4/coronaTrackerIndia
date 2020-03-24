import React from "react";
import India from "@svg-maps/india";
import { RadioSVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import "./customMap.css";

export default function CustomMap(props) {
  const [pointedLocation, setPointedLocation] = React.useState(null);
  const [currentLoc, setCurrentLoc] = React.useState(null);

  const handleChange = e => {
    setPointedLocation(e.target.attributes.name.value.toLowerCase());
    for (let i = 0; i < props.report.data.regional.length; i++) {
      console.log(props.report.data.regional[i]);
      if (
        props.report.data.regional[i].loc.toLowerCase() ===
        e.target.attributes.name.value.toLowerCase()
      ) {
        setCurrentLoc(props.report.data.regional[i]);
        break;
      } else {
        setCurrentLoc({ confirmedCasesIndian: 0, discharged: 0, deaths: 0 });
      }
    }
  };
  return (
    <div
      className="myMapContainer"
      style={{
        display: "flex",
        justifyContent: "center",
        boxShadow: ".4rem .8rem 4rem rgba(0,0,0,.4)",
        height: "80rem",
        paddingTop: "2rem",
        marginBottom: "4rem",
        width: "100%"
      }}
    >
      <div className="myMap" style={{ width: "60rem", position: "relative" }}>
        <p style={{ fontSize: "4rem", paddingBottom: "3.7rem" }}>
          Intractive Map
        </p>
        <RadioSVGMap
          className="svg-map"
          map={India}
          onLocationMouseOver={e => handleChange(e)}
        />
        <div
          className="mapToolTip"
          style={{
            position: "absolute",
            top: 100,
            right: 50,
            boxShadow: ".4rem 1rem 2rem rgba(0,0,0,.4)",
            width: "20rem",

            fontFamily: "Poppins",
            fontWeight: "normal",
            border: "1px solid #31373f",
            borderRadius: "8px",
            opacity: currentLoc === null ? 0 : 1
          }}
        >
          <div>
            {currentLoc === null ? (
              ""
            ) : (
              <div>
                {pointedLocation}
                <p>Total Cases: {currentLoc.confirmedCasesIndian}</p>
                <p>Recoveries: {currentLoc.discharged}</p>
                <p>Deaths: {currentLoc.deaths}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
