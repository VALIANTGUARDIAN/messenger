import { Box } from "@mui/material";
import React from "react";
import ChatPrompt from './Chats/ChatPrompt';

const ChatContentBodyStyle = {
  height: "65vh",
  borderRadius: "0.5rem",
  marginLeft: "1.5rem",
  marginRight: "1.5rem",
  marginBottom: "-1rem",
  bgcolor: "#f3f3f389",
  overflowY: "scroll"
};

const ChatContentBody = () => {
  return (
    <>
      <Box sx={ChatContentBodyStyle}>
        <ChatPrompt />
      </Box>
    </>
  );
};

export default ChatContentBody;