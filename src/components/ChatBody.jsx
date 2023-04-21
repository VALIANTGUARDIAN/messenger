import { Grid } from '@mui/material'
import React from 'react'
import ChatList from './ChatList/ChatLists';
import ChatContent from './ChatContent/ChatContent';

const ChatBody = () => {
  return (
    <>
    <Grid cotainer sx={{display:"flex", flexDirection:"row"}}>
      <Grid item>
        <ChatList />
      </Grid>
      <Grid item>
        <ChatContent />
      </Grid>
    </Grid>
    </>
  )
}

export default ChatBody