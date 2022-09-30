import express from 'express';
import cors from 'cors';

const app = express()
const port = process.env.PORT || 3000;

let todos = [];

//   UNIFORM INTERFACE:

//  post/todo   
//  get /todos              get server sy get krny k liya 
//  put /updatetodo         put is used for updating todo
//  delete /removetodo      remove krny k liya delete lgta hai 
//  get /todo/:id           for single get todo

// kisi ek todo k sath khelny k liya /:id daalni hogi end mai 

app.use(express.json());
app.use(cors());

app.post('/todo', (req, res) => {
    
    todos.push(req.body.text);

    res.send({
        message: "your todo is saved",
        data: todos
    })
})
app.get('/todos', (req, res) => {
    
    res.send({
        message: "here is you todo list",
        data: todos
    })
})


app.delete('/del', (req, res) => {
    todos=[]
    res.send({
        message: "todo is deleted",
        data: todos
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})