import React , { Component } from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import Navs from './Nav';
import axios from "axios";
const Rendercard = ({props}) => {
  // console.log(props)
    if(props !== undefined && props !== null)
    {
      return(
          props.map((todo) => {
          return (  
              <Card key={todo._id} className="cards">
                <CardTitle className="text">Name : {todo.title}</CardTitle>
                <CardText className="text">Label : {todo.label}</CardText>
                <hr id="hrcard" />
                <CardText className="text">Task : {todo.task}</CardText>
                <CardText className="text">Date : {new Date(todo.due).toDateString()}</CardText>      
              </Card>    
            );  
          })
        );
     } 
     else
     {    
        return(
          <div style={{overflow: 'hidden'}}> <b><p id="nocard">No Done ToDo Lists Available ..!!</p><i class="far fa-frown" style={{marginTop : '60px', marginLeft: '40px',fontSize: '75px', color: 'black'}}></i></b>          
          </div>
        );
     }
}

class Done extends Component{

  constructor(props) {
        super(props);  
        // console.log(props.exercise)     ;
        this.state = {
          exercise : []
        }
        
        axios.defaults.withCredentials = true;
        axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem("token")}` }
    
        axios.get("https://todobackendsmith.herokuapp.com/tasks/" + localStorage.getItem("userId") +"/donetask")
          .then((res) => {
            if (res.status === 200) {
              res.data.forEach(element => {
                // this.setState({
                //     exercises : [...this.state.exercises, element]
                // })
                // console.log(element);
                this.setState(prevState => ({
                  exercise: [...prevState.exercise, element],
                }))
                // this.props.exercise.push(element);
                // console.log(element);
              });
              // console.log(this.state.exercises);
            }
          })
  }  

  render(){
    return (  
    <div>
    	<Navs userId={localStorage.getItem("userId")}/>  
            <div className="container">        	       
            <div className="row">              
              <Rendercard props = {this.state.exercise} />
            </div>
            </div>
    </div>
    );
  }
}

export default Done;