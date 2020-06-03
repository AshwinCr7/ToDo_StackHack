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
              <hr />
              <CardText className="text">{todos.task}</CardText>
              <CardText className="text">{todos.due}</CardText>
              <CardText className="text">{todos.status}</CardText> 
              <div>
              <Button type="submit" color="danger" className="remove">Remove</Button>
              <Button type="submit" color="danger" className="done">Done</Button>
              </div>             
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