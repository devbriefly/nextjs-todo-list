'use client';
import { Box, TextField, Button, Grid } from '@mui/material';
import { useState } from 'react';

export default function Home() {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState('');

	const handleAdd = () => {
		setTodos((prev) => [...prev, todo]);
		setTodo('');
	};

	const handleDel = (index) => {
		setTodos((prev) => prev.filter((_, i) => i !== index));
	};
	return (
		<Box>
			<Grid
				container
				spacing={2}>
				<Grid
					item
					xs={6}>
					<TextField
						id='outlined-basic'
						label='Add To Do'
						variant='outlined'
						value={todo}
						fullWidth
						onChange={(e) => setTodo(e.target.value)}
					/>
				</Grid>
				<Grid
					item
					xs={6}>
					<Button
						variant='contained'
						fullWidth
						sx={{
							height: '100%',
						}}
						onClick={handleAdd}>
						Add ToDo
					</Button>
				</Grid>
				<Grid
					item
					xs={12}>
					<ul>
						{todos.map((todo, index) => (
							<li key={`Todos${index}`}>
								{todo}
								<Button onClick={() => handleDel(index)}>DELETE</Button>
							</li>
						))}
					</ul>
				</Grid>
			</Grid>
		</Box>
	);
}
