 import prisma from "@/lib/prisma"
import Post from "./postfeed/post"
import Link from "next/link"
import { Button } from "@/components/ui/button"
 async function getPosts(){
  const posts = await prisma?.post.findMany({
    where:{published:true},
    include:{
      author:{
        select:{
          name:true
        }
      }
    }
  })
  return posts
}

export default async function Home() {
  const posts = await getPosts()
  
  return (
    <main className="min-h-screen bg-slate-950 w-full flex justify-center items-center flex-col gap-4"> 
      <Button asChild>
        <Link href="/addPost" className="text-orange-200 border border-orange-200 px-4 py-2 hover:bg-orange-200 hover:text-slate-950">Add Post</Link>
        </Button>
      <h1 className="text-5xl font-bold text-orange-200">Feed</h1>
      <div className="flex  gap-4 flex-wrap">
      {posts.map((post) => {
        return (
        <Post key={post.id} id={post.id} title={post.title} content={post.content || ''} authorName={post?.author?.name || ''} />
        )
})}
</div>
    </main>
  );
}
