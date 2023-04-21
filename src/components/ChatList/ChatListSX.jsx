import { styled } from "@mui/material/styles";
import { InputBase } from "@mui/material";

export const listContainer = {
  width: "100%",
  maxWidth: "20rem",
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
