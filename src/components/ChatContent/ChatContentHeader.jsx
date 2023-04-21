import React from "react";
import ChatItemList from "../ChatList/ChatItemList";
import { myUser } from "../ChatList/UserDetails";
import { Box } from "@mui/material";

const ChatContentHeader = () => {
  return (
    <>
      <Box>
        <ChatItemList items={myUser} />
      </Box>
    </>
  );
};

export default ChatContentHeader;
