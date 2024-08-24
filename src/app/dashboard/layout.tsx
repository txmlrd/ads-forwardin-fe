"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import ContactsIcon from "@mui/icons-material/Contacts";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import CampaignIcon from "@mui/icons-material/Campaign";
import ReplayIcon from "@mui/icons-material/Replay";
import CustomerServiceIcon from "@mui/icons-material/SupportAgent";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ForwardingApiIcon from "@mui/icons-material/Api";
import Settings from "@mui/icons-material/Settings";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import InboxIcon from "@mui/icons-material/Inbox";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import DarkModeToggle from "@/component/darkModeToggle";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import WidgetsIcon from '@mui/icons-material/Widgets';
import Tooltip from "@mui/material/Tooltip";

const links = [
  { name: "Dashboard", path: "/dashboard/main", icon: <DashboardIcon /> },
  { name: "Device", path: "/dashboard/device", icon: <AdUnitsIcon /> },
  { name: "Contacts", path: "/dashboard/settings", icon: <ContactsIcon /> },
  { name: "Message List", path: "/dashboard/messages", icon: <ChatBubbleIcon /> },
];

const toolsLinks = [
  { name: "Broadcast", path: "/dashboard/tools/broadcast", icon: <PodcastsIcon /> },
  { name: "Campaign", path: "/dashboard/tools/campaign", icon: <CampaignIcon /> },
  { name: "Auto Reply", path: "/dashboard/tools/auto-reply", icon: <ReplayIcon /> },
  { name: "Customer Service", path: "/dashboard/tools/customer-service", icon: <CustomerServiceIcon /> },
  { name: "Analytics", path: "/dashboard/tools/analytics", icon: <LeaderboardIcon /> },
  { name: "Forwardin API", path: "/dashboard/tools/forwardin-api", icon: <ForwardingApiIcon /> },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!session) {
      router.push("/signin");
    }
  }, [session, router]);



 
  const [activeLink, setActiveLink] = useState(pathname);
  const [showContactLinks, setShowContactLinks] = useState(false);
  const [showMessageLinks, setShowMessageLinks] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const handleContactClick = () => {
    setShowContactLinks(!showContactLinks);
  };

  const handleMessageClick = () => {
    setShowMessageLinks(!showMessageLinks);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!session) {
    return null;
  }
  return (
    <main className="bg-white transition-all duration-500 ease-in-out dark:bg-[#121212] flex flex-row min-h-screen ">
      <DarkModeToggle />
      {/* Sidebar (Mobile Only) */}
      <div
        className={`fixed  top-0 left-0 h-screen bg-white dark:bg-[#121212] transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0 blur-0" : "-translate-x-full blur-md"
        } w-72 flex flex-col p-5 z-50 md:hidden`}
      >
        <a href="/" className="my-10 flex justify-center items-center">
          <img src="../logoforwardinfullbiru.svg" alt="logo" />
        </a>
        <div className="w-full bg-white overflow-y-auto  dark:bg-[#121212] transition-all duration-500 ease-in-out h-fit">
          <ul className="flex flex-col p-5 ">
            {links.map((link) => (
              <li key={link.path} className="text-[14px] mt-2">
                {link.name === "Contacts" ? (
                  <>
                    <div
                      onClick={handleContactClick}
                      className={`flex flex-row items-center justify-between px-6 py-3 mb-2 cursor-pointer hover:bg-biru dark:hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                        activeLink === link.path ? "bg-biru text-white" : "bg-[#F3F5F8] dark:bg-[#1F1F21]  dark:text-white text-black"
                      }`}
                    >
                      <div className="flex flex-row items-center">
                        {link.icon}
                        <span className="ml-2">{link.name}</span>
                      </div>
                      <ArrowDropDown className={`${showContactLinks ? "rotate-180" : "rotate-0"} `} />
                    </div>
                    {showContactLinks && (
                      <ul className="pl-6 mt-2">
                        <li>
                          <Link href="/dashboard/contact/contacts">
                            <div
                              className={`flex flex-row items-center px-6 py-3 mb-2 hover:bg-biru dark:hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                                activeLink === "/dashboard/contact/contacs" ? "bg-biru text-white" : "bg-white dark:bg-transparent dark:text-white text-black"
                              }`}
                            >
                              <ContactsIcon className="mr-2" />
                              Contacts
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/dashboard/contact/groups">
                            <div
                              className={`flex flex-row items-center px-6 py-3 mb-2 hover:bg-biru dark:hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                                activeLink === "/dashboard/contact/groups" ? "bg-biru text-white" : "bg-white dark:bg-transparent dark:text-white text-black"
                              }`}
                            >
                              <Diversity3Icon className="mr-2" />
                              Groups
                            </div>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </>
                ) : link.name === "Message List" ? (
                  <>
                    <div
                      onClick={handleMessageClick}
                      className={`flex flex-row items-center justify-between px-6 py-3 mb-2 cursor-pointer dark:hover:bg-biru hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                        activeLink === link.path ? "bg-biru text-white" : "bg-[#F3F5F8] dark:bg-[#1F1F21] dark:text-white text-black"
                      }`}
                    >
                      <div className="flex flex-row items-center">
                        {link.icon}
                        <span className="ml-2">{link.name}</span>
                      </div>
                      <ArrowDropDown className={`${showMessageLinks ? "rotate-180" : "rotate-0"} `} />
                    </div>
                    {showMessageLinks && (
                      <ul className="pl-6 mt-2">
                        <li>
                          <Link href="/dashboard/messages/inbox">
                            <div
                              className={`flex flex-row items-center px-6 py-3 mb-2 hover:bg-biru dark:hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                                activeLink === "/dashboard/messages/inbox" ? "bg-biru text-white" : "bg-white dark:bg-transparent dark:text-white text-black
                              }`}
                            >
                              <InboxIcon className="mr-2" />
                              Messenger
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/dashboard/messages/archived">
                            <div
                              className={`flex flex-row items-center px-6 py-3 mb-2 hover:bg-biru dark:hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                                activeLink === "/dashboard/messages/archived" ? "bg-biru text-white" : "bg-white dark:bg-transparent dark:text-white text-black"
                              }`}
                            >
                              <MoveToInboxIcon className="mr-2" />
                              Incoming Chat
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/dashboard/messages/outgoing">
                            <div
                              className={`flex flex-row items-center px-6 py-3 mb-2 hover:bg-biru dark:hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                                activeLink === "/dashboard/messages/outgoing" ? "bg-biru text-white" : "bg-white dark:bg-transparent dark:text-white text-black"
                              }`}
                            >
                              <ForwardToInboxIcon className="mr-2" />
                              Outgoing Chat
                            </div>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={link.path}>
                    <div
                      className={`flex flex-row items-center px-6 py-3 mb-2 hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                        activeLink === link.path ? "bg-biru text-white" : "bg-transparent  dark:text-white text-black"
                      }`}
                    >
                      {link.icon}
                      <span className="ml-2">{link.name}</span>
                    </div>
                  </Link>
                )}
              </li>
            ))}
            <h1 className="text-[10px] text-black dark:text-white transition-all duration-500 ease-in-out   font-inter">Tools</h1>

            {toolsLinks.map((link) => (
              <li key={link.path} className="text-[14px] mt-2">
                <Link href={link.path}>
                  <div
                    className={`flex flex-row items-center px-6 py-3 mb-2 hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                      activeLink === link.path ? "bg-biru text-white" : "bg-transparent dark:text-white text-black"
                    }`}
                  >
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </div>
                </Link>
              </li>
            ))}
            <h1 className="text-[10px] text-black dark:text-white transition-all duration-500 ease-in-out  font-inter">Others</h1>
            <li className="text-[14px] mt-2">
              <Link href="/dashboard/others/settings">
                <div
                  className={`flex flex-row items-center px-6 py-3  hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                    activeLink === "/dashboard/others/settings" ? "bg-biru text-white" : "bg-transparent dark:text-white text-black"
                  }`}
                >
                  <Settings />
                  <span className="ml-2">Settings</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Sidebar (Desktop Only) */}
      <div className=" flex-col h-screen hidden md:flex ">
        <a href="/" className="my-10 flex justify-center items-center">
          <img src="../logoforwardinfullbiru.svg" alt="logo" />
        </a>
        <div className="w-72 bg-white  dark:bg-[#121212] transition-all duration-500 ease-in-out h-fit">
          <ul className="flex flex-col p-5 ">
            {links.map((link) => (
              <li key={link.path} className="text-[14px] mt-2">
                {link.name === "Contacts" ? (
                  <>
                    <div
                      onClick={handleContactClick}
                      className={`flex flex-row items-center justify-between px-6 py-3 mb-2 cursor-pointer hover:bg-biru dark:hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                        activeLink === link.path ? "bg-biru text-white" : "bg-[#F3F5F8] dark:bg-[#1F1F21]  dark:text-white text-black"
                      }`}
                    >
                      <div className="flex flex-row items-center">
                        {link.icon}
                        <span className="ml-2">{link.name}</span>
                      </div>
                      <ArrowDropDown className={`${showContactLinks ? "rotate-180" : "rotate-0"} `} />
                    </div>
                    {showContactLinks && (
                      <ul className="pl-6 mt-2">
                        <li>
                          <Link href="/dashboard/contact/contacts">
                            <div
                              className={`flex flex-row items-center px-6 py-3 mb-2 hover:bg-biru dark:hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                                activeLink === "/dashboard/contact/contacs" ? "bg-biru text-white" : "bg-white dark:bg-transparent dark:text-white text-black"
                              }`}
                            >
                              <ContactsIcon className="mr-2" />
                              Contacts
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/dashboard/contact/groups">
                            <div
                              className={`flex flex-row items-center px-6 py-3 mb-2 hover:bg-biru dark:hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                                activeLink === "/dashboard/contact/groups" ? "bg-biru text-white" : "bg-white dark:bg-transparent dark:text-white text-black"
                              }`}
                            >
                              <Diversity3Icon className="mr-2" />
                              Groups
                            </div>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </>
                ) : link.name === "Message List" ? (
                  <>
                    <div
                      onClick={handleMessageClick}
                      className={`flex flex-row items-center justify-between px-6 py-3 mb-2 cursor-pointer dark:hover:bg-biru hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                        activeLink === link.path ? "bg-biru text-white" : "bg-[#F3F5F8] dark:bg-[#1F1F21] dark:text-white text-black"
                      }`}
                    >
                      <div className="flex flex-row items-center">
                        {link.icon}
                        <span className="ml-2">{link.name}</span>
                      </div>
                      <ArrowDropDown className={`${showMessageLinks ? "rotate-180" : "rotate-0"} `} />
                    </div>
                    {showMessageLinks && (
                      <ul className="pl-6 mt-2">
                        <li>
                          <Link href="/dashboard/messages/inbox">
                            <div
                              className={`flex flex-row items-center px-6 py-3 mb-2 hover:bg-biru dark:hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                                activeLink === "/dashboard/messages/inbox" ? "bg-biru text-white" : "bg-white dark:bg-transparent dark:text-white text-black 
}`}>
                              <InboxIcon className="mr-2" />
                              Messenger
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/dashboard/messages/archived">
                            <div
                              className={`flex flex-row items-center px-6 py-3 mb-2 hover:bg-biru dark:hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                                activeLink === "/dashboard/messages/archived" ? "bg-biru text-white" : "bg-white dark:bg-transparent dark:text-white text-black"
                              }`}
                            >
                              <MoveToInboxIcon className="mr-2" />
                              Incoming Chat
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/dashboard/messages/outgoing">
                            <div
                              className={`flex flex-row items-center px-6 py-3 mb-2 hover:bg-biru dark:hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                                activeLink === "/dashboard/messages/outgoing" ? "bg-biru text-white" : "bg-white dark:bg-transparent dark:text-white text-black"
                              }`}
                            >
                              <ForwardToInboxIcon className="mr-2" />
                              Outgoing Chat
                            </div>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={link.path}>
                    <div
                      className={`flex flex-row items-center px-6 py-3 mb-2 hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                        activeLink === link.path ? "bg-biru text-white" : "bg-transparent  dark:text-white text-black"
                      }`}
                    >
                      {link.icon}
                      <span className="ml-2">{link.name}</span>
                    </div>
                  </Link>
                )}
              </li>
            ))}
            <h1 className="text-[10px] text-black dark:text-white transition-all duration-500 ease-in-out   font-inter">Tools</h1>

            {toolsLinks.map((link) => (
              <li key={link.path} className="text-[14px] mt-2">
                <Link href={link.path}>
                  <div
                    className={`flex flex-row items-center px-6 py-3 mb-2 hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                      activeLink === link.path ? "bg-biru text-white" : "bg-transparent dark:text-white text-black"
                    }`}
                  >
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </div>
                </Link>
              </li>
            ))}
            <h1 className="text-[10px] text-black dark:text-white transition-all duration-500 ease-in-out  font-inter">Others</h1>
            <li className="text-[14px] mt-2">
              <Link href="/dashboard/others/settings">
                <div
                  className={`flex flex-row items-center px-6 py-3  hover:bg-biru hover:text-white transition-all duration-500 ease-in-out rounded-xl ${
                    activeLink === "/dashboard/others/settings" ? "bg-biru text-white" : "bg-transparent dark:text-white text-black"
                  }`}
                >
                  <Settings />
                  <span className="ml-2">Settings</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Tooltip title={isSidebarOpen ? "Open menu" : "Close Menu"}>
      <div
               onClick={toggleSidebar}
                className={`fixed bottom-5 right-5 md:hidden p-4 bg-biru text-whiteshadow-lg transition-all duration-300 ease-in-out transform ${isSidebarOpen ? "rotate-180" : "rotate-0"} hover:bg-gray-700 focus:outline-none rounded-full`}
>
       <WidgetsIcon/>
      </div>
      </Tooltip>

      <div className="w-full h-full overflow-hidden rounded-xl md:m-5 ">{children}</div>
    </main>
  );
}
