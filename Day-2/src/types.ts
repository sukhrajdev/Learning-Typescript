type Todo = {
    id: number,
    title: string,
    completed: boolean
}

function verifyTodoStructure(todo: any): todo is Todo {
    return (
        typeof todo === 'object' &&
        todo !== null &&
        typeof todo.id === 'number' &&
        typeof todo.title === 'string' &&
        typeof todo.completed === 'boolean'
    )
}

async function getTodosById(todoId: number): Promise<Todo> {
    const todos = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then(response => response.json());
    if (!verifyTodoStructure(todos)) {
        throw new Error('Invalid todo structure');
    }
    return todos;
}

const result = await getTodosById(1);
console.log(result);