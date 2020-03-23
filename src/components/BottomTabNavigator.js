import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/AddAlert";
import LocationOnIcon from "@material-ui/icons/Phone";

import "./BottomTabStyle.css";

export default function SimpleBottomNavigation(props) {
  const { activeBottomTab, setActiveBottomTab } = props;

  return (
    <BottomNavigation
      value={activeBottomTab}
      onChange={(event, newValue) => {
        setActiveBottomTab(newValue);
      }}
      showLabels
      className="root"
      style={{ position: "fixed", width: "100%", bottom: 0 }}
    >
      <BottomNavigationAction label="Report" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Helpline No." icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
