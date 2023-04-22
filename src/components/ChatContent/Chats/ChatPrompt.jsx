import { Avatar, Box, Paper } from "@mui/material";
import React from "react";
import { userChat } from "../Chats/UserChats";

const UserChat = ({ user, msg, image }) => {
  const isOther = user === "other";

  return (
    <Box sx={{ float: isOther ? "left" : "right", paddingTop:"1rem" }} >
      <Paper elevation={4} sx={{ display: "flex", alignItems: "center", p: 1}}>
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
    </Box>
  );
};

const ChatPrompt = () => (
  <Box sx={{width:"100%", maxWidth:"20rem", height:"auto", padding:"1rem"}}>
    {userChat.map(({ key, type, msg, image }) => (
      <UserChat key={key} user={type} msg={msg} image={image} />
    ))}
  </Box>
);

export default ChatPrompt;
