import React from 'react'
import TagIcon from '@mui/icons-material/Tag';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setChannelInfo } from '../features/channelSlice';
import { useDocumentTitle } from '../pages/useDocumentTitle';

function ChannelName({id,channelName}) {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const setChannel=()=>{
        dispatch(
            setChannelInfo({
                channelId: id,
                channelName: channelName,
            })
        )
        navigate(`/channel/${id}`);
    }
  return (
    <div className='font-medium flex items-center cursor-pointer
     hover:text-white hover:bg-discord_black p-1 rounded-md ' onClick={setChannel}>
        <TagIcon className='mr-2'/>
        {channelName}
    </div>
  )
}

export default ChannelName