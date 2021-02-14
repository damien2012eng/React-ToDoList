import './App.css';
import Todoform from './components/Todoform';
import Todolist from "./components/Todolist";
import React, {useState,useEffect} from "react";

function App() {
    const [inputText, setInputText] = useState("")
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState("All")
    const [filteredTodos, setFilteredTodos] = useState([])

    //Run once when start
    useEffect(()=>{
        loadLocalTodos()
    },[])

    //Run whenever todos or status change
    useEffect(()=>{
        filterHandler()
        saveLocalTodos()
    },[status,todos])

    //Save todos
    const saveLocalTodos = ()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    //Load todos
    const loadLocalTodos = ()=>{
        if(localStorage.getItem('todos')===null){
            localStorage.setItem('todos', JSON.stringify([]))
        }else{
            let todoLocal = JSON.parse(localStorage.getItem("todos"))
            setTodos(todoLocal)
        }
    }

    //function to handle filter button
    const filterHandler = ()=>{
        switch (status){
            case "completed":
                setFilteredTodos(todos.filter(todo=>todo.completed===true))
                console.log("switch true")
                break
            case "uncompleted":
                setFilteredTodos(todos.filter(todo=>todo.completed===false))
                break
            default:
                setFilteredTodos(todos)
        }
    }

    return (
        <div className="App">
            <h1>Damien's Todo list </h1>
            <Todoform
                setInputText={setInputText}
                setTodos={setTodos}
                todos={todos}
                inputText={inputText}
                setStatus={setStatus}
            />
            <Todolist todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
        </div>
  );
}

export default App;
