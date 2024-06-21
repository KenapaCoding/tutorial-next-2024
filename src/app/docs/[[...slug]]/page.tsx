/** @format */

export default function Docs({
	params,
}: {
	params: {
		slug: string[];
	};
}) {
	let title;
    if(params.slug?.length === 1) {
        title = `Feature ${params.slug[0]}`
    } 
    if(params.slug?.length === 2) {
        title = `Feature ${params.slug[0]} Concept ${params.slug[1]}`
    } 
    if(params.slug?.length === 3) {
        title = `Feature ${params.slug[0]} Concept ${params.slug[1]} Example ${params.slug[2]}`
    } 
    if(!params.slug){
        title = 'Docs Page'
    }
    
	return (
		<div>
			<h1>Navbar</h1>
            <p>{title}</p>
            <h2>Footer</h2>
		</div>
	);
}
