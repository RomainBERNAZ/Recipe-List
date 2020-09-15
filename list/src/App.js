import React, {useState, useEffect} from 'react';
import './App.css';

// Importing components 
import Form from './components/Form';
import Recipe from './components/Recipe';


function App() {
  
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  

useEffect (() => {
  getLocalTodos();
}, []);



  //Use effect 

  useEffect(() => {
    saveLocalTodos();
  }, [todos, status]);





const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  
};
const getLocalTodos = () => {
  if (localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', JSON.stringify([]));

  }else {
   let todoLocal =  JSON.parse(localStorage.getItem("todos"));
   setTodos(todoLocal);
  }
};


  return (
    <div className="App">
      <header>
  <h1>Ajouter idée repas</h1>
      </header>
      <Form 
            setTodos={setTodos} 
            setStatus ={setStatus}/>
    
      <Recipe/>
    </div>
  );
}

export default App;
