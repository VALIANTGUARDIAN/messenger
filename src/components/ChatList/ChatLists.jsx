import { Box, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import PushPinIcon from "@mui/icons-material/PushPin";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import React from "react";
import {
  listContainer,
  listHeader,
  pinnedMessage,
  pinIcon,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./ChatListSX";
import ChatItemList from "./ChatItemList";
import { pinnedChatUsers, allUsers } from "./UserDetails";




const ChatList = () => {
  return (
    <div>
      <Box sx={listContainer}>
        <Box sx={listHeader}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <Typography variant="h5">Messenger (22)</Typography>
            <EditIcon />
          </Box>
          <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search Message" />
            </Search>
          </Box>
        </Box>
        <Box sx={pinnedMessage}>
          <Typography variant="body1">
            <PushPinIcon sx={pinIcon} /> Pinned Message (3)
          </Typography>
          <IoEllipsisHorizontalOutline />
        </Box>
        <Box>
          <ChatItemList items={pinnedChatUsers} />
        </Box>
        <Box sx={pinnedMessage}>
          <Typography variant="body1" sx={{paddingTop:"1rem"}}>
            <MdEmail /> All Message (22)
          </Typography>
          <IoEllipsisHorizontalOutline />
        </Box>
        <Box>
          <ChatItemList items={allUsers} />
        </Box>
      </Box>
    </div>
  );
};

export default ChatList;
