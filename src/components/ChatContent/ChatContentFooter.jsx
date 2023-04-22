import React from "react";
import { Box, Button, TextField } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ImageIcon from "@mui/icons-material/Image";
import SendIcon from "@mui/icons-material/Send";
const inputBox = {
  padding: "1.5rem",
  height: "25vh",
  "& .MuiOutlinedInput-root": {
    borderRadius: "0.5rem 0.5rem 0 0 ",
  },
};
const attachBox = {
  padding: "1rem",
  border: "1px solid #b1b1b1",
  borderRadius: "0 0 0.5rem 0.5rem",
};

const submitBtn = {
  textAlign: "right",
  marginTop: "1rem",
};

const ChatContentFooter = () => {
  return (
    <Box sx={inputBox}>
      <TextField
        fullWidth
        style={{ textAlign: "left" }}
        hintText="Message Field"
        floatingLabelText="MultiLine and FloatingLabel"
        multiline
        rows={4}
      />
      <Box sx={attachBox}>
        <FormatBoldIcon />
        <FormatItalicIcon />
        <FormatUnderlinedIcon />
        <AttachFileIcon />
        <ImageIcon />
      </Box>
      <Box sx={submitBtn}>
        <Button
          variant="contained"
          type="submit"
          sx={{ borderRadius: "0.5rem", height: "2.5rem", width: "5.7rem" }}
        >
          <SendIcon
            sx={{ height: "1.3rem", width: "1.3rem", paddingRight: "0.5rem" }}
          />
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatContentFooter;
