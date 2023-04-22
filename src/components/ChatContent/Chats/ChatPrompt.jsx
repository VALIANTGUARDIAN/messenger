import { Avatar, Box, Paper } from '@mui/material';
import React from 'react';
import { userChat } from "../Chats/UserChats"

const ChatPrompt = (props) => {
  return (
    <div
      style={{ animationDelay: `0.8s` }}
      className={`chat__item ${props.user ? props.user : ""}`}
    >
      <Paper elevation={4}>
        <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
          <Box sx={{ flexGrow: 1 }}>
            <div className="chat__msg">{props.msg}</div>
            <div className="chat__meta">
              <span>16 mins ago</span>
              <span>Seen 1.03PM</span>
            </div>
          </Box>
          <Avatar sx={{ ml: 1 }} variant="circular" alt="User Image" src={props.image} />
        </Box>
      </Paper>
    </div>
  );
};

const ChatList = () => {
  return (
    <div className="chat__list">
      {userChat.map((chat) => (
        <ChatPrompt
          key={chat.key}
          user={chat.type === "other" ? "other" : ""}
          msg={chat.msg}
          image={chat.image}
        />
      ))}
    </div>
  );
};

export default ChatList;
