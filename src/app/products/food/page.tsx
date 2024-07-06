/** @format */

'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function Page() {
	const router = useRouter();
    const searchParams = useSearchParams()
    console.log(searchParams.get('q'))
	return (
		<div className='h-[900px]'>
			<h2 >Food Page</h2>
            <button onClick={() => router.push('/products')} className='border-4 border-slate-700 text-green-400'>Go back to products</button>
		</div>
	);
}
