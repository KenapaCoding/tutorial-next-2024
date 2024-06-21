export default function Note ({params}:{
    params: {
        noteId: String
    }
}) {
    return <h3>Note Detail {params.noteId} </h3>
}