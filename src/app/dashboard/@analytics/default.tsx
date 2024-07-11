import Card from "@/components/Card";

function getRandomItem(arr:string[]) {
    return arr[Math.floor(Math.random() * arr.length)]
}

export default function DefaultAnalytics(){
    return <Card>Analytics slot</Card>
}