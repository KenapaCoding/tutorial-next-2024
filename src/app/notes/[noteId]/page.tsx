import { notFound } from "next/navigation"
import { Metadata } from "next"

type Props = {
    params: {
        noteId: string
    }
}

export const generateMetadata = ({params}: Props):Metadata => {
    return {
        title: `Note Detail ${params.noteId}`
    }
}

export default function Note ({params}:Props) {
    if(parseInt(params.noteId)>100) {
        notFound()
    }
    return <h3>Note Detail {params.noteId} </h3>
}