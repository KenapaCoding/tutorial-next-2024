import { redirect } from "next/navigation"

export default function Page(){
    const isAdmin = true
    if(!isAdmin){
        redirect('/products')
    }
    return <h2 className="h-[900px]">Sports Page</h2>
}