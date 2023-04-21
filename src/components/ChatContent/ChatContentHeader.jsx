import React from "react";
import { myUser } from "../ChatList/UserDetails";
import { StyledBadge } from "../ChatList/ChatListSX";
import { Avatar, Box, Stack } from "@mui/material";
import { HiEllipsisVertical } from "react-icons/hi2";

const prfile = {
  padding: "1rem",
  paddingBottom: "0",
};

const UserProfile = ({ image, name, active, isOnline, message }) => {
  return (
    <Box sx={prfile}>
      <Stack direction="row" spacing={2}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          active={active}
        >
          <Avatar alt={name} src={image} />
        </StyledBadge>
        <Stack direction="column" rowGap={0.5}>
          <Box>
            <Box fontWeight="bold">{name}</Box>
          </Box>
          <Box fontSize="0.9rem" color="#b1b1b1">
            {message}
          </Box>
        </Stack>
        {isOnline && <Box flexGrow={1} />}
      </Stack>
    </Box>
  );
};

const ChatContentHeader = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "95%",
          height:"10vh"
        }}
      >
        <Box>
          {myUser.map((item) => (
            <UserProfile
              key={item.id}
              image={item.image}
              name={item.name}
              active={item.active}
              message={item.message}
            />
          ))}
        </Box>
        <HiEllipsisVertical style={{ height: "1.7rem", width: "1.7rem", color:"#b1b1b1" }} />
      </Box>
    </>
  );
};

export default ChatContentHeader;
