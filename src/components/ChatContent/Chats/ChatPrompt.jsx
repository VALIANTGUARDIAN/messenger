import { Avatar, Box, Paper } from "@mui/material";
import React from "react";
import { userChat } from "../Chats/UserChats";



const UserChat = ({ user, msg, image }) => {
  const isOther = user === "other";
  
  const promptBox = {
    display: "flex",
    alignItems: "flex-start",
    minHeight: "4rem",
    p: 1,
    height: "auto",
    padding: "1rem",
    background: isOther ? "#e7e7e79e" : "#1c84da",
    borderRadius: isOther? "2rem 2rem 2rem 0" : "2rem 2rem 0 2rem",
    float: isOther ? "left" : "right", marginTop: "1rem"
  }

  return (
      <Paper
        elevation={4}
        sx={promptBox}
      >
        {isOther && (
          <Avatar
            sx={{ mr: 1 }}
            variant="circular"
            alt="User Image"
            src={image}
          />
        )}
        <Box sx={{ flexGrow: 1 }}>
          <div className="chat__msg">{msg}</div>
          <div className="chat__meta">
            <span>16 mins ago</span>
            <span>Seen 1.03PM</span>
          </div>
        </Box>
        {!isOther && (
          <Avatar
            sx={{ ml: 1 }}
            variant="circular"
            alt="User Image"
            src={image}
          />
        )}
      </Paper>
  );
};

const ChatPrompt = () => (
  <Box sx={{ width: "100%",}}>
    {userChat.map(({ key, type, msg, image }) => (
      <UserChat key={key} user={type} msg={msg} image={image} />
    ))}
  </Box>
);

export default ChatPrompt;
