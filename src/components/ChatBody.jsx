import { Grid } from '@mui/material'
import React from 'react'
import ChatList from './ChatList/ChatLists';
import ChatContent from './ChatContent/ChatContent';

const ChatBody = () => {
  return (
    <>
    <Grid cotainer sx={{display:"flex", flexDirection:"row"}}>
      <Grid item width="20%">
        <ChatList />
      </Grid>
      <Grid item width="80%">
        <ChatContent />
      </Grid>
    </Grid>
    </>
  )
}

export default ChatBody