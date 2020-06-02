import React , {Component} from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

function Rendercard({todos}){
		return(
		    <Card className="cards">
              <CardTitle className="text">{todos.title}</CardTitle>
              <CardSubtitle className="text">{todos.label}</CardSubtitle>
              <CardText className="text">{todos.task}</CardText>
              <CardText className="text">{todos.due}</CardText>
              <CardText className="text">{todos.status}</CardText>
            </Card>	        		
	    );	
}

const Display = (props) => {
  let display = {};
  if(props.exercise != undefined && props.exercise != null)
  {
        display = props.exercise.map((todo) => {
        return (  
  			<Rendercard todos = {todo} />  				
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