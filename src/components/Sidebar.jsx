import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CiShop } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
function Sidebar({bgColor, color}) {
  return (
    <>
    <div className="side_bar_content"  style={{
      backgroundColor: `${bgColor}`,
      color: `${color}`
    }}>
        <div className="top_content">
            <div className="items"><FaHome className="icons"/>Home</div>
            <div className="items"><IoIosNotifications className="icons"/>Notification</div>
            <div className="items"><CiShop className="icons"/>Shop</div>
            <div className="items"><CiChat1 className="icons"/>Conversation</div>
            <div className="items"><CiWallet className="icons"/>Wallet</div>
            <div className="items"><MdSubscriptions className="icons"/>Subscription</div>
            <div className="items"><CgProfile className="icons"/>My Profile</div>
        </div>
        <div className="bottom_content"><IoLogOutOutline />Logout</div>
    </div>
      
    </>
  )
}

export default Sidebar
