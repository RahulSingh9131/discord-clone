import React,{useEffect} from 'react'

const useDocumentTitle=(pageTitle)=>{
    useEffect(()=>{
        document.title=pageTitle;
    },[pageTitle])
}

export {useDocumentTitle}