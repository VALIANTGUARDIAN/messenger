import { Avatar, Box, Paper } from "@mui/material";
import React from "react";
import { userChat } from "../Chats/UserChats";

const UserChat = (props) => {
  const { user, msg, image } = props;
  const isOther = user === "other";

  return (
    <div
      style={{ animationDelay: `0.8s` }}
      className={`chat__item ${isOther ? "other" : ""}`}
    >
      <Paper elevation={4}>
        <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
          {isOther ? (
            <Avatar
              sx={{ mr: 1 }}
              variant="circular"
              alt="User Image"
              src={image}
            />
          ) : null}
          <Box sx={{ flexGrow: 1 }}>
            <div className="chat__msg">{msg}</div>
            <div className="chat__meta">
              <span>16 mins ago</span>
              <span>Seen 1.03PM</span>
            </div>
          </Box>
          {!isOther ? (
            <Avatar
              sx={{ ml: 1 }}
              variant="circular"
              alt="User Image"
              src={image}
            />
          ) : null}
        </Box>
      </Paper>
    </div>
  );
};

const ChatPrompt = () => {
  return (
    <Box className="chat__list">
      {userChat.map((chat) => (
        <UserChat
          key={chat.key}
          user={chat.type}
          msg={chat.msg}
          image={chat.image}
        />
      ))}
    </Box>
  );
};

export default ChatPrompt;
