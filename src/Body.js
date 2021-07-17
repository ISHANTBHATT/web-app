import React,{useState} from 'react'
import Header from './Header'
import "./Body.css"
import FeatureContainer from './FeatureContainer'
import box from './Feature'
import styled, { ThemeProvider } from "styled-components";
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import { lightTheme, darkTheme, GlobalStyles } from "./Theme.js";
import Result from './Result'


function Body() {
    const [theme, setTheme] = useState("light");
    function light() {
        setTheme("light");
      };
      function dark() {
        setTheme("dark");
      };
      
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <div className="Body">
            <div>
                {/* <Header /> */}
                <div  className="Header">
                <div className="Header__icon">
                    <WbSunnyOutlinedIcon className="icon" onClick={light}/>
                    <NightsStayOutlinedIcon className="icon" onClick={dark} />
                </div>
                </div>
            </div>
            <div className="Feature__Containers">
                {box.map((item) =>(
                    <FeatureContainer
                    id={item.id}
                    title={item.title}
                    />
                ))}                
            </div>
            <div className="Result__Containers">
                <Result />
            </div>

        </div>
        </ThemeProvider>
        
    )
}

export default Body
