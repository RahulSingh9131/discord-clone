import moment from 'moment'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import { useSelector } from 'react-redux';
import { selectChannelId } from '../features/channelSlice';

function Message({id,timestamp,name,photoURL,email,message}) {

    const [user]=useAuthState(auth);
    const channelId= useSelector(selectChannelId);


  return (
    <div className='flex items-center p-1 pl-5 my-5 mr-2 hover:bg-discord_grey group'>
        <img src={photoURL} alt="user-img" className='h-10 rounded-full cursor-pointer'/>
        <div className='flex flex-col ml-5'>
            <h4 className='flex items-center space-x-2 font-medium'>
                <span className='hover:underline text-white text-sm'>{name}</span>
                <span className='text-slate-200 text-xs'>{moment(timestamp?.toDate().getTime()).format("lll")}</span>
            </h4>
            <p className='text-sm text-slate-300'>{message}</p>
        </div>
        {user?.email===email && (
            <div className='hover:bg-red-400 p-1 ml-auto rounded-full mr-7'
            onClick={()=>db.collection("channels").doc(channelId).collection("messages").doc(id).delete()}>
                <DeleteIcon className="chat-icon opacity-0 group-hover:opacity-100"/>
            </div>
        )}
    </div>
  )
}

export default Message