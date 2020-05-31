import React, { Component } from 'react';
class Excercise extends Component {
    constructor(props) {
        super(props);
        console.log("History" + this.props.history.location.state.auth);
        this.state = {
            auth : false
        }
        if(this.props.history.location.state.auth === true){
            console.log("COnst")
            this.setState({
                auth:true
            })
        }
        console.log("state" + this.state.auth);
    }



    render() {
        console.log("History1" + this.props.history.location.state.auth);
        if (this.props.history.location.state.auth) {
            return (
                <div>
                    <h1>Exercise Page</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>UnAuthorized</h1>
                </div>
            );
        }
    }
}


export default Excercise;