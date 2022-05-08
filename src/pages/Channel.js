import React from 'react'
import ServerIcon from '../components/ServerIcon'
import avatar1 from "../assets/avatar1.svg"
import avatar2 from "../assets/avatar2.svg"
import avatar3 from "../assets/avatar3.svg"
import serverlogo from "../assets/server-logo.png"
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChannelName from '../components/ChannelName'
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore';
import {useNavigate} from "react-router-dom";


function Channel() {
    const [user] = useAuthState(auth) 
    const [channels]=useCollection(db.collection("channels"));

    const navigate = useNavigate();

    const addChannelName=()=>{
        const channelName=prompt("Enter a new channel name");
        if(channelName){
            db.collection("channels").add({
                channelName:channelName,
            })
        }
    }

  return (
    <>
        {!user && navigate("/")}
        <div className='flex h-screen'>
            <div className='flex flex-col bg-discord_black space-y-3 p-3 min-w-max'>
                <div className='server-default hover:bg-discord_purple'>
                    <img src={serverlogo} className='h-10' alt='server-logo'/>
                </div>
                <hr className='border-white-700 border w-8 mx-auto'/>
                <ServerIcon image={avatar1}/>
                <ServerIcon image={avatar2}/>
                <ServerIcon image={avatar3}/>
                <div className='server-default hover:bg-discord_green group '>
                    <AddIcon className="text-discord_green h-7 group-hover:text-white "/>
                </div>
            </div>
            <div className='bg-discord_black_secondary flex flex-col min-w-max'>
                <h2 className='flex text-white font-bold text-sm items-center justify-between
                border-b p-4 hover:bg-discord_black cursor-pointer'>
                    My Server...<KeyboardArrowDownIcon className="h-5 ml-2"/>
                </h2>
                <div className='text-discord_grey_primary flex-grow overflow-y-scroll scrollbar-hide'>
                    <div className='flex items-center p-2 mb-2'>
                        <KeyboardArrowDownIcon className="h-3 mr-2"/>
                        <h4 className='font-semibold'>Channels</h4>
                        <AddIcon className='ml-auto cursor-pointer hover:text-white' onClick={addChannelName}/>
                    </div>
                    <div className='flex flex-col spcae-y-2 mb-4 px-2'>
                        {channels?.docs.map((doc)=>(
                            <ChannelName key={doc.id} id={doc.id} channelName={doc.data().channelName}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Channel