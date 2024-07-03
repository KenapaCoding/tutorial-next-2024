import { Metadata } from "next"

export const metadata:Metadata = {
    title: {
        absolute: "About Page"
    },
    description: 'this is about page'
}

export default function Page() {
    return <h2>About Page</h2>
}