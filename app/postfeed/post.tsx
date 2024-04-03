import Deletepost from "./DeletePost";

type Props = {
    id:string;
    title:string;
    content:string;
    authorName:string;
}

function Post({id,title,content,authorName}: Props) {
  return (
    <div className='border border-slate-300 p-4 rounded-lg hover:bg-slate-800 transition duration-150 ease-in-out cursor-pointer '>
        <h1 className='text-2xl text-white uppercase tracking-wide'><span className='text-orange-200 normal-case'>Title:</span>{title}</h1>
        <p className='text-slate-300 lowercase text-sm'><span className='text-orange-200 normal-case'>Content:</span>{content}</p>
        <p className='text-slate-300 text-xs'><span className='text-orange-200 normal-case'>By:</span> {authorName}</p>
        <Deletepost id={id}/>
    </div>
  )
}

export default Post