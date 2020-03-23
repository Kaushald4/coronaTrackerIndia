import React from "react";
import "../pages/Homepage/HomePage.css";
import LoadingIndicator from "./Loadingindicator";
import FaceBookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function summary(props) {
  const { report, activeBottomTab, primaryHelplineNo } = props;

  return (
    <div>
      {activeBottomTab === 0 ? (
        <div className="summaryContainer">
          <span className="summaryResultText">
            <h2>Total Cases</h2>
            {report.data.summary.total}
          </span>
          <span className="summaryResultText">
            <h2>Indians</h2>
            {report.data.summary.confirmedCasesIndian}
          </span>
          <span className="summaryResultText">
            <h2>Foreigners</h2>
            {report.data.summary.confirmedCasesForeign}
          </span>
          <span className="summaryResultText">
            <h2>Discharged</h2>
            {report.data.summary.discharged}
          </span>
          <span className="summaryResultText">
            <h2>Deaths</h2>
            {report.data.summary.deaths}
          </span>
        </div>
      ) : (
        <div
          style={{
            flexDirection: "row",

            alignItems: "center",
            justifyContent: "center",
            borderRadius: "1rem",
            backgroundColor: "rgba(250, 243, 243, 0.5)",
            margin: "0 2rem",
            marginTop: "4rem",
            marginTop: "4rem",
            marginBottom: "4rem",
            boxShadow: "4px 10px 20px rgba(0, 0, 0, 0.4)"
          }}
        >
          {primaryHelplineNo === null ? (
            <LoadingIndicator />
          ) : (
            <div
              style={{
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start"
              }}
            >
              <div style={{ width: "100%", color: "#FFFFFF" }}>
                <p style={{ backgroundColor: "grey", textAlign: "center" }}>
                  Primary Contact Details
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                  marginTop: "2rem"
                }}
              >
                <div style={{ textAlign: "left", fontWeight: "bold" }}>
                  <p>Number</p>
                  <p>Toll-Free No.</p>
                  <p>Email</p>
                </div>
                <div style={{ textAlign: "left" }}>
                  <p>
                    <a
                      href={`tel:${primaryHelplineNo.data.contacts.primary["number"]}`}
                    >
                      {primaryHelplineNo.data.contacts.primary["number"]}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`tel:${primaryHelplineNo.data.contacts.primary["number-tollfree"]}`}
                    >
                      {" "}
                      {
                        primaryHelplineNo.data.contacts.primary[
                          "number-tollfree"
                        ]
                      }
                    </a>
                  </p>
                  <a
                    href={`mailto:${primaryHelplineNo.data.contacts.primary["email"]}`}
                  >
                    {primaryHelplineNo.data.contacts.primary["email"]}
                  </a>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "rgb(255,222,179)",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "2rem"
                }}
              >
                <span style={{ display: "flex", alignItems: "center" }}>
                  <FaceBookIcon htmlColor="rgba(66,103,178)" />
                  <a
                    style={{ textDecoration: "none" }}
                    href={primaryHelplineNo.data.contacts.primary["facebook"]}
                  >
                    FaceBook
                  </a>
                </span>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <TwitterIcon htmlColor="rgb(29,161,242)" />
                  <a
                    style={{ textDecoration: "none" }}
                    href={primaryHelplineNo.data.contacts.primary["twitter"]}
                  >
                    Twitter
                  </a>
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
