import React, { Component } from 'react';
import axios from "axios";
class Excercise extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            exercises : []
        }
         axios.defaults.headers.common = {'Authorization': `bearer ${this.props.location.state.token}`}
    
        axios.get("http://localhost:3001/tasks/" + this.props.match.params.userId)
            .then((res)=>{
                if(res.status == 200){
                    res.data.forEach(element => {
                        // this.setState({
                        //     exercises : [...this.state.exercises, element]
                        // })
                        this.setState(prevState => ({
                            exercises: [...prevState.exercises, element]
                        }))
                    });
                    console.log(this.state.exercises);
                }
            })

            
    }



    render() {
        // if (this.props.history.location.state.auth) {
            console.log(this.props.match.params);
            return (
                <div>
                    <h1>Exercise Page</h1>
                </div>
            );
    }
}


export default Excercise;