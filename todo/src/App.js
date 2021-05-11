import Todo from './components/Todo';

function App() {
	return (
		<div>
			<h1>My Todos</h1>
			<Todo text="text1" />
			<Todo text="text2" paragraph="p text hehe" />
			<Todo text="text3" />
		</div>
	);
}

export default App;
