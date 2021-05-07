import { Container,Card,Form,Button,Row,Col } from 'react-bootstrap';
import React,{useState,useEffect} from 'react'
import {AiFillDelete,AiFillEdit} from 'react-icons/ai'

function App() {
  const [todo, setTodo] = useState('')
  const[todos,setTodos]=useState([])
  const[editTodo,setEditTodo]=useState(null)


  useEffect(()=>{
    if(editTodo){
      setTodo(editTodo.inputs)
    
    }else{
      setTodo('')
    }
  },[editTodo,setTodo])

  const updatedTodo =(inputs,id) =>{
    const newTodo = todos.map((todo)=>
    todo.id === id ? {inputs,id} : todo
    );
    setTodos(newTodo)
    setEditTodo('')

  }


  const handleChange= e =>{
    setTodo(e.target.value)
  }
  const handleSubmit = event =>{
    event.preventDefault()
   
    if(!editTodo){
      setTodos([...todos,{id:Math.floor(Math.random()*100),inputs:todo}])
      setTodo('')
    }else{
      updatedTodo(todo,editTodo.id)
    }
    console.log(todo)
  }
  const onDelete = id =>{
    setTodos(todos.filter( item => item.id !== id))
  }
  const onEdit = id =>{
    const newTodo = todos.find( item=> item.id === id)
    setEditTodo(newTodo)
    console.log(newTodo);
  }
  return (
    <>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group>
                <Row>
                  <Col>
                   <Form.Control type="text" value={todo} onChange={handleChange}/>
                  </Col>
                  <Col>
                    <Button onClick={handleSubmit}>Add</Button>
                  </Col>
                </Row>
                
               
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Container>
        {todos.map((item) =>{
            return(
              <Card key={item.id} col={5}>         
                <Card.Body>
                  <Row>
                    <Col>
                      {item.inputs}
                    </Col>
                    <Col>
                      <AiFillEdit onClick={(id)=>onEdit(item.id)} />{'  '}{' '}
                      <AiFillDelete onClick={(id)=>onDelete(item.id)} />
                    </Col>
                  </Row>
                 
                </Card.Body>
              </Card>
            )
          })}
          
        

        </Container>
        
      </Container>
    </>
  );
}

export default App;
