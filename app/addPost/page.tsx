"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { CreatePost } from "./actions"
import {  useRouter } from "next/navigation"
import { useFormState } from "react-dom"

type Props = {}


function AddPost({}: Props) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");

  // const [formState,updatedFormState] = useFormState(CreatePost,{title, content, authorName})
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault()
  //     await CreatePost(title, content,authorName)
  //     setTitle("")
  //     setContent("")
  //     router.push('/')
  //     router.refresh()
  // }

  return (
    <main className="min-h-screen bg-slate-950 w-full flex justify-center items-center flex-col gap-4">
      <h1 className="text-5xl font-bold text-orange-200">Add Post</h1>
      <form
        action={async () => {
          await CreatePost(title, content, authorName);
          router.push("/");
          router.refresh();
        }}
        className="flex flex-col gap-4"
      >
        <Input
          type="text"
          placeholder="Title"
          id="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          defaultValue={title}
        />
        <Textarea
          placeholder="Content"
          name="content"
          id="content"
          cols={30}
          rows={10}
          defaultValue={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Author Name"
          id="authorName"
          required
          onChange={(e) => setAuthorName(e.target.value)}
          defaultValue={authorName}
        />
        <Button type="submit">Add Post</Button>
      </form>
    </main>
  );
}

export default AddPost;


