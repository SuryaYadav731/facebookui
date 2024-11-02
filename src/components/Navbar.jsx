import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";
import { BsToggle2Off } from "react-icons/bs";
 import { BsToggle2On } from "react-icons/bs";

function Navbar({ bgColor, color, toggleButton,toggle }) {
  return (
    <>
      <div className="nav_bar">
        <div
          className="logo"
          style={{
            backgroundColor: `${bgColor}`,
            color: `${color}`,
          }}
        >
          WDM
          <div onClick = {toggleButton}>
            {toggle ? (
              <BsToggle2On />
            ):(
              <BsToggle2Off />
            )}
            {" "}
          </div>
       
        </div>
        <div
          className="search"
          style={{
            backgroundColor: `${bgColor}`,
            color: `${color}`,
          }}
        >
          <div className="left">
            <IoSearchSharp />
            Search here..
          </div>
          <div className="right">
            <IoFilterOutline />
            Filter
          </div>
        </div>
        <div
          className="seller"
          style={{
            backgroundColor: `${bgColor}`,
            color: `${color}`,
          }}
        >
          Become a seller
        </div>
      </div>
    </>
  );
}

export default Navbar;
