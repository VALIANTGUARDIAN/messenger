import { styled } from "@mui/material/styles";
import { InputBase, Badge } from "@mui/material";

export const listContainer = {
  width: "100%",
  height: { xs: "auto", sm: "auto", md: "100vh" },
  overflowY: "scroll",
  maxWidth: "100vw",
  border: "1px solid #afafaf",
};

export const listHeader = {
  display: "flex",
  flexDirection: "column",
  padding: "1.5rem",
};

export const Search = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "0.5rem",
  backgroundColor: "#f7fafc",
  padding: "0.6rem",
  "&:hover": {
    backgroundColor: "#f8f8f8",
    border: "1px solid blue",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")({
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const pinIcon = {
  rotate: "45deg",
  height: "1rem",
  width: "1rem",
};
export const pinnedMessage = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "#838383",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
};

export const StyledBadge = styled(Badge)(({ theme, active }) => ({
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

export const userList = {
  display: { xs: "flex", sm: "flex", md: "flex" },
  padding: "1rem",
  paddingBottom: "0",
  cursor: "pointer",
  borderRadius: "1rem",
  "&:hover": {
    backgroundColor: "#e7e7e79e",
  },
};
