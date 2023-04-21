import React from "react";
import { Avatar, Box, Badge, Stack, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme, active }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: active ? "green" : "red",
    color: active ? "green" : "red",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      content: '""',
    },
  },
}));

const userList = {
  padding: "1rem",
  paddingBottom: "0",
  cursor: "pointer",
  borderRadius: "1rem",
  "&:hover": {
    backgroundColor: "#e7e7e79e",
  },
};

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

        <Box>
          <Box fontWeight="bold">{name}</Box>
        </Box>
        <Box></Box>
        {isOnline && <Box flexGrow={1} />}
      </Stack>
      <Divider sx={{paddingBottom:"1rem"}} />
    </Box>
  );
};

const ChatItemList = ({ items }) => {
  return (
    <Box>
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
