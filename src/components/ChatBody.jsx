import { Grid } from '@mui/material'
import React from 'react'
import ChatList from './ChatList/ChatLists';
import ChatContent from './ChatContent/ChatContent';

const ChatBody = () => {
  return (
    <>
      <Grid container sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", md: "row" } }}>
        <Grid item xs={12} md={2} lg={2}>
          <ChatList />
        </Grid>
        <Grid item xs={12} md={10} lg={10}>
          <ChatContent />
        </Grid>
      </Grid>
    </>
  )
}

export default ChatBody