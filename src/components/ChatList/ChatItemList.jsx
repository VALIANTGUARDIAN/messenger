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
          sx={{ mr: { xs: 2, sm: 2, md: 0 } }}
        >
          <Avatar alt={name} src={image} />
        </StyledBadge>
        <Stack
          direction="column"
          rowGap={0.5}
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            flexGrow: 1,
            paddingLeft: { md: "1rem" },
          }}
        >
          <Box>
            <Box fontWeight="bold">{name}</Box>
          </Box>
          <Box fontSize="0.9rem" color="#b1b1b1">
            {message}
          </Box>
        </Stack>
        {isOnline && (
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <Box
              sx={{
                width: "0.5rem",
                height: "0.5rem",
                borderRadius: "50%",
                backgroundColor: "green",
                display: "flex",
              }}
            />
            <Box
              sx={{
                display: "flex",
                paddingLeft: "0.5rem",
                color: "grey",
                fontSize: "0.75rem",
              }}
            >
              Online
            </Box>
          </Box>
        )}
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
