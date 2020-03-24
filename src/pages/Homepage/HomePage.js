import React, { useState } from "react";
import "./HomePage.css";

import PhoneIcon from "@material-ui/icons/Phone";
import SuccessIcon from "@material-ui/icons/DoneAll";

import Table from "../../components/Table";
import BottomTabNavigator from "../../components/BottomTabNavigator";
import LoaderIndicator from "../../components/Loadingindicator";
import Summary from "../../components/summary";
import MyGraph from "../../components/CustomGrapg";
import MyMap from "../../components/CustomMap";
import CustomCard from "../../components/Customcard";

export default function HomePage() {
  const [report, setReport] = React.useState(null);
  const [isLoading, setIsloading] = React.useState(true);
  const [activeBottomTab, setActiveBottomTab] = React.useState(0);
  const [helplineNumbers, setHelplineNumbers] = React.useState(null);
  const [isGraphShown, toggleGraph] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      setIsloading(true);
      const response = await fetch(
        "https://api.rootnet.in/covid19-in/stats/latest"
      );
      const data = await response.json();
      setIsloading(false);
      setReport(data);
    })();
  }, []);
  React.useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.rootnet.in/covid19-in/contacts"
      );
      const data = await response.json();
      setHelplineNumbers(data);
    })();
  }, []);

  return (
    <div className="container">
      <div className="coronaContainer">
        <h1 className="coronaHeading">
          {activeBottomTab === 0 ? (
            <div>
              <p> COVID-19 Reports India 🇮🇳 </p>
            </div>
          ) : (
            "Helpline Numbers"
          )}
        </h1>
        <div className="Showbutton">
          <button
            onClick={() => setActiveBottomTab(activeBottomTab === 0 ? 1 : 0)}
          >
            <PhoneIcon />
            {activeBottomTab === 0 ? "HelpLine" : "Show Reports"}
          </button>
        </div>
      </div>
      <div>
        {isLoading ? (
          <LoaderIndicator />
        ) : (
          <>
            {report === null ? (
              ""
            ) : (
              <div>
                {activeBottomTab === 0 ? (
                  <div>
                    <div className="data-source-btn">
                      <button>Show Official</button>
                      <button>Show Latest</button>
                    </div>
                    <p className="data-source">
                      Official Data From -
                      <a href="https://www.mohfw.gov.in/" target="_blank">
                        Ministry of health and family welfare
                      </a>
                    </p>
                  </div>
                ) : null}
                <Summary
                  report={report}
                  activeBottomTab={activeBottomTab}
                  primaryHelplineNo={helplineNumbers}
                />
                {activeBottomTab === 0 ? (
                  <div>
                    <div className="analytics-show-btn">
                      <button
                        onClick={() => toggleGraph(true)}
                        style={{
                          backgroundColor: isGraphShown ? "#31373f" : "#FFFFFF",
                          color: isGraphShown ? "#FFFFFF" : "#31373f"
                        }}
                      >
                        Graph
                      </button>
                      <button
                        onClick={() => toggleGraph(false)}
                        style={{
                          backgroundColor: isGraphShown ? "#FFFFFF" : "#31373f",
                          color: isGraphShown ? "#31373f" : "#FFFFFF"
                        }}
                      >
                        Map
                      </button>
                    </div>
                    {isGraphShown ? (
                      <MyGraph report={report} />
                    ) : (
                      <MyMap report={report} />
                    )}
                    <Table report={report} />
                    <div className="adviceContainer">
                      <div className="pretective-mesaureContainer">
                        <p>protective measures against the new coronavirus</p>
                        <span className="adviceListContainer">
                          <span>
                            <SuccessIcon />
                          </span>
                          <span>Wash your hands frequently</span>
                        </span>
                        <span className="adviceListContainer">
                          <span>
                            <SuccessIcon />
                          </span>
                          <span>Maintain social distancing</span>
                        </span>
                        <span className="adviceListContainer">
                          <span>
                            <SuccessIcon />
                          </span>
                          <span>Avoid touching eyes, nose and mouth</span>
                        </span>
                        <span className="adviceListContainer">
                          <span>
                            <SuccessIcon />
                          </span>
                          <span>Practice respiratory hygiene</span>
                        </span>
                      </div>
                    </div>
                    <div className="adviceContainerQuote">
                      <em>Be Safe From #coronaVirus</em>
                      <em>Be Smart and inform yourself about it</em>
                      <em>Be kind and support one another</em>
                    </div>
                  </div>
                ) : (
                  <CustomCard
                    helplineNumbers={helplineNumbers}
                    onchange={onchange}
                  />
                )}
              </div>
            )}
          </>
        )}
      </div>
      <footer className="footer">
        <div>
          <div
            style={{
              fontWeight: "lighter",
              textShadow: "1px 10px 20px #000000"
            }}
          >
            ❤️ Coded By Kaushal Mehta
          </div>
        </div>
        <div className="quote">
          <em style={{ fontWeight: "lighter" }}>
            "Don't Panic We Will get through this together
            <br />
            Stay Safe, Keep Social Distancing & Follow Quarantine"
          </em>
        </div>
      </footer>
      <BottomTabNavigator
        activeBottomTab={activeBottomTab}
        setActiveBottomTab={setActiveBottomTab}
      />
    </div>
  );
}
