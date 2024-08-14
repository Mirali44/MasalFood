import "./Drawer.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Divider from "@mui/material/Divider";
import Categories from "../filter/Categories.jsx";
import PriceRange from "../filter/PriceRange.jsx";
import BasicRating from "../filter/BasicRating.jsx";
import { useState } from "react";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box className="drawer-container" role="presentation">
      <Categories />
      <Divider sx={{ backgroundColor: "rgb(216, 112, 0)" }} />
      <BasicRating />
      <Divider sx={{ backgroundColor: "rgb(216, 112, 0)" }} />
      <PriceRange />
      <Divider sx={{ backgroundColor: "rgb(216, 112, 0)" }} />
      <button onClick={toggleDrawer(false)} className="drawer-button">
        Close
      </button>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuOutlinedIcon sx={{ color: "white" }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
