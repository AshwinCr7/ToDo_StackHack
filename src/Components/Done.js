import React , { Component } from 'react';
import { Card, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Navs from './Nav';

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
        console.log(props.exercise)     
  }  

  render(){
    return (  
    <div>
    	<Navs userId={localStorage.getItem("userId")}/>  
            <div className="container">        	       
            <div className="row">              
              <Rendercard props = {this.props} />
            </div>
            </div>
    </div>
    );
  }
}

export default Done;