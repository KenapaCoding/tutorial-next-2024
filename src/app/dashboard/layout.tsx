/** @format */

export default function DashboardLayout({
	children,
	analytics,
	social,
	users,
	login,
}: {
	children: React.ReactNode;
	analytics: React.ReactNode;
	social: React.ReactNode;
	users: React.ReactNode;
	login: React.ReactNode;
}) {
	const isLogin = true;
	return (
		<div>
			<div>{children}</div>
			{isLogin ? (
				<div className='flex gap-2'>
					<div className='flex flex-col'>
						<div>{users}</div>
						<div>{social}</div>
					</div>
					<div className='flex flex-1'>{analytics}</div>
				</div>
			) : (
				<div>{login}</div>
			)}
		</div>
	);
}
