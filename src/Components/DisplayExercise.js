import React , { Component } from 'react';
import { Card, CardText, CardTitle, Button } from 'reactstrap';
import axios from "axios";

function del(taskId){
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem("token")}` }

  axios.delete("https://todobackendsmith.herokuapp.com/tasks/delete/" + taskId )
    .then((res) => {
      if (res.status === 200) {
        // console.log(this.state.exercises);
        // console.log(res.data);
        window.location.reload();
      }
    })
}

function done(taskId){
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem("token")}` }

  axios.post("https://todobackendsmith.herokuapp.com/tasks/done/" + taskId )
    .then((res) => {
      if (res.status === 200) {
        // console.log(this.state.exercises);
        // console.log(res.data);
        window.location.reload();
      }
    })
}

const Rendercard = ({props}) => {
    if(props.exercise !== undefined && props.exercise !== null)
    {
      return(
          props.exercise.map((todo) => {
          return (  
              <Card key={todo._id} className="cards">
                <CardTitle className="text">Name : {todo.title}</CardTitle>
                <CardText className="text">Label : {todo.label}</CardText>
                <hr id="hrcard" />
                <CardText className="text">Task : {todo.task}</CardText>
                <CardText className="text">Date : {new Date(todo.due).toDateString()}</CardText>
                <CardText className="text">Status : {todo.status}</CardText> 
                <CardText className="text">Priority : {todo.priority}</CardText>
                <div>
                <Button type="submit" color="danger" onClick={()=>{del(todo._id)}} className="remove"><i class="fa fa-times-circle-o" aria-hidden="true" style={{marginRight: '5px'}} ></i>Remove</Button>
                <Button type="submit" color="danger" onClick={()=>{done(todo._id)}} className="done"><i class="fa fa-check-circle" aria-hidden="true" style={{marginRight: '5px'}} ></i>Done</Button>
                </div>             
            </Card>    
            );  
          })
        );
     } 
     else
     {    
        return(
          <div style={{overflow: 'hidden'}}> <b><p id="nocard">No ToDo Lists Available ..!!</p><i class="far fa-frown" style={{marginTop : '60px', marginLeft: '40px',fontSize: '75px', color: 'black'}}></i></b>          
          </div>
        );
     }
}

class Display extends Component{

  constructor(props) {
        super(props);  
        // console.log(props.exercise)     
  }  

  render(){
    return (
        <div className="container">          
            <div className="row">              
              <Rendercard props = {this.props} />
            </div>
        </div>
    );
  }
}

export default Display;