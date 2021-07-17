// import React,{useState} from 'react'
// import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
// import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
// import "./Header.css"
// function Header() {
//     const [theme, setTheme] = useState("light");
//     const LightTheme = () => {
//         setTheme("light");
//       };
//       const DarkTheme = () => {
//         setTheme("dark");
//       };
//     return (
//         <div  className="Header">
//             <div className="Header__icon">
//                 <WbSunnyOutlinedIcon className="icon" onclick={LightTheme}/>
//                 <NightsStayOutlinedIcon className="icon" onclick={DarkTheme} />
//             </div>
//         </div>
//     )
// }

// export default Header

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1)
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none"
      }
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff"
    }
  },
  thumb: {
    width: 24,
    height: 24
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});

export default function CustomizedSwitches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <IOSSwitch
            checked={state.checkedB}
            onChange={handleChange}
            checkedIcon={<NightsStayOutlinedIcon className="icon"  />}
            icon={<WbSunnyOutlinedIcon className="icon" />}
            name="checkedB"
          />
        }
      />
    </FormGroup>
  );
}

