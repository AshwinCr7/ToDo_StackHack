import React , { Component } from 'react';
import { Card, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Rendercard = (props) => {
    if(props.exercise !== undefined && props.exercise !== null)
    {
      return(
          props.exercise.map((todo) => {
          return (  
              <Card className="cards">
                <CardTitle className="text">{todo.title}</CardTitle>
                <CardSubtitle className="text">{todo.label}</CardSubtitle>
                <hr id="hrcard" />
                <CardText className="text">{todo.task}</CardText>
                <CardText className="text">{todo.due}</CardText>
                <CardText className="text">{todo.status}</CardText> 
                <div>
                <Button type="submit" color="danger" className="remove"><i class="fa fa-times-circle-o" aria-hidden="true" style={{marginRight: '5px'}} ></i>Remove</Button>
                <Button type="submit" color="danger" className="done"><i class="fa fa-check-circle" aria-hidden="true" style={{marginRight: '5px'}} ></i>Done</Button>
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