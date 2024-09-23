import React from "react";
// import Dropdown from "./Dropdown";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,

  Typography,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Search", path: "/search" },
];

const drawerWidth = 240;
const Header = ({ handleSelect = null }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
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
        sx={{ marginTop: 4, marginLeft: 10, paddingBottom: 2 }}
        onClick={() => {
          navigate("/");
        }}
      >
        Minister 
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item?.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                navigate(item?.path);
              }}
            >
              <ListItemText primary={item?.name} />
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
            MINISTER Home Master Branch 
          </Typography>
          
        </div>
        

        

        
        <div className="ml-auto md:hidden">
         
          <div className="md:hidden md:flex" onClick={handleDrawerToggle}>
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
