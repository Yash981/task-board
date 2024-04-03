"use client"
import { Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { DeletePost } from '../addPost/actions'
import { useRouter } from 'next/navigation'

type Props = {
    id: string
}

function Deletepost({id}: Props) {
  const router = useRouter();
  const handleDelete = async () => {
    try {
        await DeletePost(id);
        router.refresh(); 
    } catch (error) {
        console.error("Error deleting post:", error);
    }finally{
        // setisdeleting(false)
    }
};
  return (
    <div>
        <Trash2 className='w-6 h-6 text-slate-300 float-right' onClick={
            handleDelete}/>
    </div>
  )
}

export default Deletepost;