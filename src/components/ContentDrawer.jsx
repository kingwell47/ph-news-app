import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import BusinessIcon from "@mui/icons-material/Business";
import TheatersIcon from "@mui/icons-material/Theaters";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ScienceIcon from "@mui/icons-material/Science";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";

const CATEGORY_ICONS = {
  General: <AnnouncementIcon />,
  Business: <BusinessIcon />,
  Entertainment: <TheatersIcon />,
  Health: <HealthAndSafetyIcon />,
  Science: <ScienceIcon />,
  Sports: <SportsBasketballIcon />,
  Technology: <DesktopWindowsIcon />,
};

const ContentDrawer = ({ toggleDrawer, setCategory, setTopic }) => {
  const handleClick = (text) => {
    setCategory(text);
    setTopic("");
  };

  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          "General",
          "Business",
          "Entertainment",
          "Health",
          "Science",
          "Sports",
          "Technology",
        ].map((text, index) => (
          <ListItem button key={text} onClick={() => handleClick(text)}>
            <ListItemIcon>{CATEGORY_ICONS[text]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Box>
  );
};

export default ContentDrawer;
