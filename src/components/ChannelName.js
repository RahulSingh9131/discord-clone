import React from 'react'
import TagIcon from '@mui/icons-material/Tag';

function ChannelName({id,channelName}) {
    const setChannel=()=>{}
  return (
    <div className='font-medium flex items-center cursor-pointer
     hover:text-white hover:bg-discord_black p-1 rounded-md ' onClick={setChannel}>
        <TagIcon className='mr-2'/>
        {channelName}
    </div>
  )
}

export default ChannelName