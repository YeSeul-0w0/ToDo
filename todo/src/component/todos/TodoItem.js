function TodoItem({todos, toggleTodo, removeTodo}){

    return (
        <div>
            const todoList = todos.map((todo) => (
            <TodoItem
                todo={todo}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                key={todo.id}
            />
            ));
        </div>
    )
}

export default TodoItem;