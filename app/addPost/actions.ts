"use server"
import  prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function CreatePost(title: string,content: string,authorName: string) {
    // console.log(title, content, authorName)
    try{
        const post = await prisma.post.create({
            data:{
                title: title,
                content: content,
                published: true,
                author: {
                    create: {
                        name: authorName
                    }
                }
            }
        })
        revalidatePath('/')
        return post
    } catch(e){
        console.log(e)
    }

}

export async function DeletePost(id: string) {
    console.log(id)
    try{
        const post = await prisma.post.delete({
            where: {
                id: id
            }
        })
        revalidatePath('/')
        console.log(post,'delete')
        return post
    } catch(e){
        console.log(e)
    }

}