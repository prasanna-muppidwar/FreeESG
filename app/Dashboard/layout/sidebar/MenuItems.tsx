import {
  IconHelp,
  IconSettings,
  IconHome,
  IconFileExport,
  IconAnalyze,
  IconHeartHandshake,
  IconPresentation,
  IconHaze,
  IconUpload
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [

  {
    navlabel: true,
    subheader: "Projects",
  },
  {
    id: uniqueId(),
    title: "Create New Project",
    icon: IconUpload,
    href: "/report",
  },
  {
    id: uniqueId(),
    title: "Project 1",
    icon: IconPresentation,
    href: "/projects/most-recent",
  },
  {
    id: uniqueId(),
    title: "Project 2",
    icon: IconPresentation,
    href: "/projects/lorem-ipsum",
  },
  {
    id: uniqueId(),
    title: "Project 3",
    icon: IconPresentation,
    href: "/projects/lorem-ipsum",
  },
  {
    navlabel: true,
    subheader: "Analytics",
  },
  {
    id: uniqueId(),
    title: "Actionable Insights",
    icon: IconAnalyze,
    href: "/insights",
  },
  {
    id: uniqueId(),
    title: "Analytics",
    icon: IconFileExport,
    href: "/bar-analytics",
  },
  {
    id: uniqueId(),
    title: "ESG Score",
    icon: IconFileExport,
    href: "/analytics",
  },
  {
    id: uniqueId(),
    title: "Export",
    icon: IconFileExport,
    href: "/export",
  },
  {
    id: uniqueId(),
    title: "Climate Club",
    icon: IconHaze,
    href: "/club",
  },
  {
    id: uniqueId(),
    title: "Settings",
    icon: IconSettings,
    href: "/settings",
  },
  {
    navlabel: true,
    subheader: "Extra",
  },
  {
    id: uniqueId(),
    title: "Help Center",
    icon: IconHelp,
    href: "/helpcenter",
  },
];

export default Menuitems;
