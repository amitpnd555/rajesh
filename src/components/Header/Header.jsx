import React from "react";
// import Dropdown from "./Dropdown";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,

  Menu,

  MenuItem,

  Typography,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Search", path: "/search" },
];

const drawerWidth = 230;
const Header = ({ handleSelect = null }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pages = ['Home', 'About', 'Press and Media', 'Contact'];
  const socialMediaIcon = [<FaFacebook />, <FaTwitter />,<FaInstagram />, <FaYoutube />];
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container =
    typeof window !== "undefined" ? window.document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ marginTop: 4, paddingBottom: 2 , fontWeight: "bold" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Minister 
      </Typography>
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ ml: 7, textAlign: "left" }}
              onClick={() => {
                navigate(item);
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Box>
  );

 
  return (
    <>
      <div className="fixed z-10 bg-primary-darkblue top-0 left-0 flex  border-b-2 pb-5 px-10  justify-between items-center pt-4 sm:mt-0  w-full">
      
        <div className="mb-2 md:mb-0 sm:mx-5  mr-2">
          <Typography variant="h5" className="text-white" sx={{  cursor: "pointer", fontWeight: "bold" }} onClick={() => navigate("/")}>
            MINISTER Home
          </Typography>
          
        </div>

        
        <Box className=" flex justify-between  max-w-80" sx={{ flexGrow: 1, display: { xs: 'none', md : 'flex' } ,  }}>
           
            
              {pages.map((page) => (
                  <Typography  sx={{ textAlign: 'center', fontWeight : '500' , color : 'white'  }}>{page}</Typography>
              ))}
          
          </Box>

          <Box className=" flex justify-between  max-w-64" sx={{ flexGrow: 1, display: { xs: 'none', md : 'flex' } ,  }}>
           
            
              {socialMediaIcon.map((mediaIcons) => (
                  <Typography  sx={{ textAlign: 'center', fontWeight : '500' , color : 'white', fontSize : '28px' }}>{mediaIcons}</Typography>
              ))}
          
          </Box>
          
        

        

        
        <div className="ml-auto md:hidden">
         
          <div className="md:hidden md:flex" onClick={handleDrawerToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </div>
        </div>

       

        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                borderRadius: "0px 16px 0px 0px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </div>
      <div className=" flex flex-grow mx-4">
        {/* <SearchInput value={searchQuery} onChange={handleSearchChange} /> */}
        {/* {Outlet} */}
      </div>
    </>
  );
};



export default Header;

function SearchInput({ value, onChange }) {
  return (
    <div className="flex items-center bg-white rounded-lg p-1 pl-3 pr-2">
      <input
        type="text"
        className="w-full outline-none"
        placeholder="Search for a movie"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.2-5.2"
        />
        <circle cx={10} cy={10} r={8} />
      </svg>
    </div>
  );
}


