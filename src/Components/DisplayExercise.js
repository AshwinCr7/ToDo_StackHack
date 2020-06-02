import React , {Component} from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

function Rendercard({todos}){
		return(
		    <Card>
              <CardTitle>{todos.title}</CardTitle>
              <CardSubtitle>{todos.label}</CardSubtitle>
              <CardText>{todos.task}</CardText>
              <CardText>{todos.due}</CardText>
              <CardText>{todos.status}</CardText>
            </Card>	        		
	    );	
}

const Display = (props) => {
  let display = {};
  if(props.exercise != undefined && props.exercise != null)
  {
        display = props.exercise.map((todo) => {
          return (
            <div key={todo.id} className="col-12 col-md-5 m-1">
              <Rendercard todos = {todo} />
            </div>
          );  
        }) 
   } 
  else
  {
    display = () => {
      return(
        <div></div>
      );
    }
  }

  return (
      <div className="container">          
          <div className="row">
              {display}
          </div>
      </div>
  );
}

export default Display;