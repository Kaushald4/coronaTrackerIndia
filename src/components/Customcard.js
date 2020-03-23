import React from "react";
import LoadingIndicator from "./Loadingindicator";
import "./customCard.css";

export default function Customcard(props) {
  const { helplineNumbers, onchange } = props;
  const [searchResult, setSreachResult] = React.useState("");

  if (helplineNumbers === null) return <LoadingIndicator />;
  const filteredHelplinenumbers = helplineNumbers.data.contacts.regional.filter(
    state => state.loc.toLowerCase().includes(searchResult.toLowerCase())
  );
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          placeholder="Search for states"
          className="searchInput"
          onChange={e => setSreachResult(e.target.value)}
        />
      </div>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center"
        }}
      >
        {filteredHelplinenumbers.map(({ loc, number }, i) => {
          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgb(131,84,163)",
                margin: "1rem",
                color: "#FFFFFF",
                padding: "1rem",
                minWidth: "18rem",
                maxWidth: "18rem"
              }}
            >
              {filteredHelplinenumbers.length === 0 ? (
                <h2>No Resluts Found</h2>
              ) : (
                <>
                  <p style={{ fontSize: "1.5rem" }}>{loc}</p>
                  <p style={{ fontSize: "1.4rem" }}>{number}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
