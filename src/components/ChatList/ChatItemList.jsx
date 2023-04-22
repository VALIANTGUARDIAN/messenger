import React from "react";
import { Avatar, Box, Stack, Divider } from "@mui/material";
import { StyledBadge, userList } from "./ChatListSX";

const ChatItem = ({ image, name, active, isOnline, message }) => {
  return (
    <Box sx={userList}>
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
      <Divider sx={{ paddingBottom: "1rem" }} />
    </Box>
  );
};

const ChatItemList = ({ items }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", sm: "row", md: "column" },
      }}
    >
      {items.map((item) => (
        <ChatItem
          key={item.id}
          image={item.image}
          name={item.name}
          active={item.active}
          message={item.message}
        />
      ))}
    </Box>
  );
};

export default ChatItemList;
