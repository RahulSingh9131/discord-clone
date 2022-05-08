import React,{useState} from 'react'
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import PushPinIcon from '@mui/icons-material/PushPin';
import ChatIcon from '@mui/icons-material/Chat';
import InboxIcon from '@mui/icons-material/Inbox';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifBoxIcon from '@mui/icons-material/GifBox';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from '../features/channelSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import firebase from 'firebase/compat/app';
import { useCollection } from 'react-firebase-hooks/firestore';
import Message from './Message';



function Chat() {
    const [message,setMessage]=useState("");

    const channelId= useSelector(selectChannelId);
    const ChannelName = useSelector(selectChannelName);
    const [user]= useAuthState(auth);

    const [messages]=useCollection(channelId && db.collection("channels").doc(channelId).collection("messages").orderBy("timestamp","asc"));

    const scrollToBottom=()=>{

    }

    const sendMessage=(e)=>{
        e.preventDefault();
        if(message!==""){
            db.collection("channels").doc(channelId).collection("messages").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: message,
                name: user?.displayName,
                photoURL: user?.photoURL,
                email: user?.email,
            })
        }

        setMessage("");
        scrollToBottom()
    }

  return (
    <div className='flex flex-col h-screen'>
        <header className='flex items-center justify-between space-x-7 border-b p-5 -mt-1 border-gray-800'>
            <div className='flex items-center space-x-1'>
                <TagIcon className="h-10 text-indigo-100"/>
                <h4 className='text-white font-semibold'>{ChannelName}</h4>
            </div>
            <div className='flex items-center space-x-2'>
                <ChatIcon className="chat-icon"/>
                <NotificationsIcon className="chat-icon"/>
                <PushPinIcon className="chat-icon"/>
                <PersonIcon className="chat-icon"/>
                <div className='bg-discord_grey text-xs p-1 flex rounded-md'>
                    <input type="text" placeholder='search' className='bg-transparent focus:outline-none text-white pl-1 ' />
                </div>
                <InboxIcon className='chat-icon'/>
                <HelpCenterIcon className='chat-icon'/>
            </div>
        </header>
        <main className='flex-grow overflow-y-scroll scrollbar-hide'>
            {messages?.docs.map((doc)=>{
                const {message,timestamp,name,photoURL,email}=doc.data();
                return <Message key={doc.id} id={doc.id} message={message} timestamp={timestamp} name={name} photoURL={photoURL} email={email}  />;
            })}
        </main>
        <div className='flex items-center p-2 bg-discord_grey mx-5 mb-7 rounded-lg'>
            <AddCircleIcon className='chat-icon mr-4'/>
            <form className='flex-grow'>
                <input
                    type="text"
                    disabled={!channelId}
                    placeholder={channelId ? `Message #${ChannelName}`:"select a channel"}
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                    className="text-white bg-transparent focus:outline-none w-full placeholder-slate-200 text-sm"
                 />
                 <button type='submit' hidden onClick={sendMessage}>
                    send
                 </button>
            </form>
            <GifBoxIcon className='chat-icon mr-2'/>
            <CardGiftcardIcon className='chat-icon mr-2'/>
            <EmojiEmotionsIcon className='chat-icon mr-2'/>
        </div>
    </div>
  )
}

export default Chat