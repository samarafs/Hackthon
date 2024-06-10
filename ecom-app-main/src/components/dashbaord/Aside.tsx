"use client";
import React from "react";
import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";

import { useState } from "react";
import { ImHome } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

function Aside() {
  const [navLinkClicked, setNavLinkClicked] = useState(false);
  return (
    <div className="flex bg-gray-100">
      <Sidebar>
        <SidebarItem
          icon={<MdOutlineProductionQuantityLimits className="text-gray-300" />}
          text="Add Product"
          path="/dashboard/products"
          setNavLinkClicked={setNavLinkClicked}
          navLinkClicked={navLinkClicked}
          active
        />
        <SidebarItem
          icon={<ImHome className="text-gray-300" />}
          text="Home"
          path="/"
          setNavLinkClicked={setNavLinkClicked}
          navLinkClicked={navLinkClicked}
        />
        <SidebarItem
          icon={<IoIosSearch className="text-gray-300" />}
          text="Search"
          path="/search"
          setNavLinkClicked={setNavLinkClicked}
          navLinkClicked={navLinkClicked}
          alert
        />

        <SidebarItem
          icon={<IoIosSearch className="text-gray-300" />}
          text="Users"
          path="/users"
          setNavLinkClicked={setNavLinkClicked}
          navLinkClicked={navLinkClicked}
          alert
        />
      </Sidebar>
    </div>
  );
}

export default Aside;
