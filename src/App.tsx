import React, { useState } from 'react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  List,
  ListItem,
  ListIcon,
  Input,
  Button,
  Heading
} from '@chakra-ui/react'
import './App.css';

type Todo = {
  id: number,
  task: string,
  isCompleted: boolean;
}

function App() {

  const [todos, setTodos] = useState<Todo[]>([])
  const [task, setTask] = useState<string>("")

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const todo: Todo = {
      id: Date.now(),
      task: task,
      isCompleted: false
    }

    setTodos([todo, ...todos])
    setTask("done")
  }

  return (
    <div className="App">
      <Heading className="heading" as='h3' size='xl' color='teal'>
          Todos
      </Heading>
      <form onSubmit={handleFormSubmit}>
        <Input type="text" name="task" placeholder='Enter a todo' size='lg' onChange={handleInput}/>
       
        {/* <button >Submit</button> */}
        <Button className="submitButton" type="submit" colorScheme='teal'>Submit</Button>
      </form>

      <List spacing={3}>
        {todos.map((oneTodo) => {
          return (
            <>
              <ListItem key={`${oneTodo.id}${oneTodo.task}`}>
                <ListIcon as={CheckCircleIcon} color='teal.500' />
                  {oneTodo.task}
              </ListItem>
            </>
          )
        })}
      </List>
    </div>
  );
}

export default App;
