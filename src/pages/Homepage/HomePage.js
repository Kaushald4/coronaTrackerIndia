import React, { useState } from "react";
import "./HomePage.css";
import PhoneIcon from "@material-ui/icons/Phone";

import Table from "../../components/Table";
import BottomTabNavigator from "../../components/BottomTabNavigator";
import LoaderIndicator from "../../components/Loadingindicator";
import Summary from "../../components/summary";
import CustomCard from "../../components/Customcard";

export default function HomePage() {
  const [report, setReport] = React.useState(null);
  const [isLoading, setIsloading] = React.useState(true);
  const [activeBottomTab, setActiveBottomTab] = React.useState(0);
  const [helplineNumbers, setHelplineNumbers] = React.useState(null);

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
            <p>
              {" "}
              COVID-19 <br /> Reports India 🇮🇳{" "}
            </p>
          ) : (
            "Helpline Numbers"
          )}
        </h1>
        <div className="Showbutton">
          <button
            onClick={() => setActiveBottomTab(activeBottomTab === 0 ? 1 : 0)}
          >
            <PhoneIcon />
            {activeBottomTab === 0 ? "Show HelpLine Numbers" : "Show Reports"}
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
                <Summary
                  report={report}
                  activeBottomTab={activeBottomTab}
                  primaryHelplineNo={helplineNumbers}
                />
                {activeBottomTab === 0 ? (
                  <Table report={report} />
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
          <p>🇮🇳 DATA SOURCE: Ministry of Health and Family Welfare</p>
          <p>⚡️ Api Credits: Amod Malviya</p>
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
