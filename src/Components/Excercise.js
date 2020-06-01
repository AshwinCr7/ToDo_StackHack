import React, { Component } from 'react';
import axios from "axios";
class Excercise extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exercises: [{ "_id": { "$oid": "5ed36af8e801ec1571642d5c" }, "title": "Smith", "author": { "$oid": "5ed36476ca2ab8030452bc2f" }, "due": { "$date": { "$numberLong": "1590913784982" } }, "status": "done", "label": "label", "createdAt": { "$date": { "$numberLong": "1590913785007" } }, "updatedAt": { "$date": { "$numberLong": "1590913785007" } }, "__v": { "$numberInt": "0" } }, { "_id": { "$oid": "5ed47252b2a99d2a34247e2e" }, "title": "BroSmith", "author": { "$oid": "5ed471f2b2a99d2a34247e2d" }, "due": { "$date": { "$numberLong": "1590913709827" } }, "status": "done", "label": "label", "createdAt": { "$date": { "$numberLong": "1590981202568" } }, "updatedAt": { "$date": { "$numberLong": "1590981202568" } }, "__v": { "$numberInt": "0" } }]
        }
        axios.defaults.headers.common = { 'Authorization': `bearer ${this.props.location.state.token}` }

        axios.get("http://localhost:3001/tasks/" + this.props.match.params.userId)
            .then((res) => {
                if (res.status == 200) {
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