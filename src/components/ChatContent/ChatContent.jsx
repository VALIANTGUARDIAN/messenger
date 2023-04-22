import React from "react";
import ChatContentHeader from "./ChatContentHeader";
import ChatContentBody from "./ChatContentBody";
import ChatContentFooter from "./ChatContentFooter";
import { Stack } from "@mui/material";

const chatContentContainer = {
  height: "100vh",
}

const ChatContent = () => {
  return (
    <Stack sx={chatContentContainer}>
      <ChatContentHeader />
      <ChatContentBody />
      <ChatContentFooter />
    </Stack>
  );
};

export default ChatContent;
