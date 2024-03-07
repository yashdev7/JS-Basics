// Filename - components/SidebarData.js

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Timesheets",
    path: "/about-us",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add New Timesheets",
        path: "/about-us/aim",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "View Existing Timesheets",
        path: "/about-us/vision",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "My Approvals",
        path: "/about-us/vision",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Management",
    path: "/services",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Clients",
        path: "/services/services1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Projects",
        path: "/services/services2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Tasks",
        path: "/services/services3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Users",
        path: "/services/services3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Reports",
    path: "/events",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Timesheet Report",
        path: "/events/events1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Approval Report",
        path: "/events/events2",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Schedule Report",
        path: "/events/events2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
  },

  {
    title: "Settings",
    path: "/support",
    icon: <IoIcons.IoMdSettings />,
  },
];
