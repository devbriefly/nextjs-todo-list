export const metadata = {
	title: 'Briefly.dev todo-list',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
