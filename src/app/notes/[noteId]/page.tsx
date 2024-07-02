import { notFound } from "next/navigation"
export default function Note ({params}:{
    params: {
        noteId: string
    }
}) {
    if(parseInt(params.noteId)>100) {
        notFound()
    }
    return <h3>Note Detail {params.noteId} </h3>
}