import React from "react";
import "./HomePage.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function HomePage() {
  const [report, setReport] = React.useState(null);
  const [isLoading, setIsloading] = React.useState(true);

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

  return (
    <div className="container">
      <div className="coronaContainer">
        <h1 className="coronaHeading">COVID-19 Reports India 🇮🇳</h1>
      </div>
      <div>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              height: "90vh"
            }}
          >
            <Loader type="Bars" color="#FFFFFF" height={80} width={80} />
          </div>
        ) : (
          <>
            {report === null ? (
              ""
            ) : (
              <div>
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
                <TableContainer component={Paper}>
                  <h1
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "lighter",
                      color: "#FFFFFF"
                    }}
                  >
                    Affected States
                  </h1>
                  <Table aria-label="simple table">
                    <TableHead style={{ backgroundColor: "#14252e" }}>
                      <TableRow>
                        <TableCell className="tableHeading" align="center">
                          State
                        </TableCell>
                        <TableCell className="tableHeading" align="center">
                          Indians
                        </TableCell>
                        <TableCell className="tableHeading" align="center">
                          Cured
                        </TableCell>
                        <TableCell className="tableHeading" align="center">
                          Foreigners
                        </TableCell>
                        <TableCell className="tableHeading" align="center">
                          Deaths
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {report.data.regional.map(row => (
                        <TableRow key={row.loc}>
                          <TableCell
                            component="th"
                            className="tableRowHeading"
                            scope="row"
                            align="center"
                          >
                            {row.loc}
                          </TableCell>
                          <TableCell className="tableRowHeading" align="center">
                            {row.confirmedCasesIndian}
                          </TableCell>
                          <TableCell className="tableRowHeading" align="center">
                            {row.discharged}
                          </TableCell>
                          <TableCell className="tableRowHeading" align="center">
                            {row.confirmedCasesForeign}
                          </TableCell>
                          <TableCell className="tableRowHeading" align="center">
                            {row.deaths}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
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
    </div>
  );
}
