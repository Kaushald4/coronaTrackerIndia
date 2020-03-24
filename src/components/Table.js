import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import "../pages/Homepage/HomePage.css";

export default function CustomTable(props) {
  const { report } = props;
  return (
    <TableContainer component={Paper}>
      <h1
        style={{
          fontFamily: "Poppins",
          fontWeight: "lighter",
          color: "#000000"
          // backgroundColor: "rgba(255,222,179,.2)"
        }}
      >
        Affected States
      </h1>
      <Table aria-label="simple table">
        <TableHead style={{ backgroundColor: "rgba(250, 243, 243, 0.5)" }}>
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
          {report.data.regional
            .sort((a, b) => b.confirmedCasesIndian - a.confirmedCasesIndian)
            .map(row => (
              <TableRow key={row.loc}>
                <TableCell
                  style={{ maxWidth: "60px" }}
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
  );
}
