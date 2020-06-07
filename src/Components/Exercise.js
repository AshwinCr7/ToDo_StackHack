import React, { Component } from 'react';
import axios from "axios";
import Navs from './Nav';
import Display from './DisplayExercise';
import { Label, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from 'reactstrap';

class Exercise extends Component {
  constructor(props) {
    super(props);

    this.toggledroptype = this.toggledroptype.bind(this);
    this.toggledropstatus = this.toggledropstatus.bind(this);
    this.toggledroppriority = this.toggledroppriority.bind(this);
    this.changeValueextype = this.changeValueextype.bind(this);
    this.changeValueexstatus = this.changeValueexstatus.bind(this);
    this.changeValueexpriority = this.changeValueexpriority.bind(this);
    this.dateOnChange = this.dateOnChange.bind(this);
    this.state = {
      dropdownOpentype: false,
      dropdownOpenpriority: false,
      dropdownOpenstatus: false,
      dropDownValueextype: 'All',
      dropDownValueexpriority: 'All',
      dropDownValueexstatus: 'All',
      userId: this.props.match.params.userId,
      exercises: [],
      currentExercises: [],
      selectedDate: null
    };
    // console.log(localStorage.getItem("token"));
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem("token")}` }

    axios.get("https://todobackendsmith.herokuapp.com/tasks/" + localStorage.getItem("userId"))
      .then((res) => {
        if (res.status === 200) {
          res.data.forEach(element => {
            // this.setState({
            //     exercises : [...this.state.exercises, element]
            // })
            // console.log(element);
            this.setState(prevState => ({
              exercises: [...prevState.exercises, element],
              currentExercises: [...prevState.currentExercises, element]
            }))
          });
          // console.log(this.state.exercises);
        }
      })
  }

  toggledroptype() {
    this.setState({
      dropdownOpentype: !this.state.dropdownOpentype
    });
  }

  toggledropstatus() {
    this.setState({
      dropdownOpenstatus: !this.state.dropdownOpenstatus
    });
  }

  toggledroppriority() {
    this.setState({
      dropdownOpenpriority: !this.state.dropdownOpenpriority
    });
  }

  changeValueextype(e) {
    this.setState({ dropDownValueextype: e.currentTarget.textContent }, () => {
      this.filter();
    });

  }

  changeValueexstatus(e) {
    this.setState({ dropDownValueexstatus: e.currentTarget.textContent }
    );

  }  

  changeValueexpriority(e) {
    this.setState({ dropDownValueexpriority: e.currentTarget.textContent }, () => {
      this.filter();
    });

  }

  dateOnChange() {

    // var das = new Date(this.exdue.value);
    // console.log(das.getTime());
    this.setState({
      selectedDate: this.exdue.value
    }, () => {
      this.filter()
    });
  }

  filter() {
    // console.log("Inside Filter");
    var newEx = []
    this.state.exercises.forEach(exercise => {
      if (this.state.dropDownValueexpriority === "All" && this.state.dropDownValueextype === "All" && this.state.selectedDate === null) {
        newEx = this.state.exercises;
        // console.log("Inside If 1");
        var exDate = new Date(exercise.due);
        var selDate = new Date(this.state.selectedDate);
        // console.log(exDate+" :" + selDate);
        if (exDate.getTime() === selDate.getTime()) {
          // console.log("Date Equal");
        }

      } else if (this.state.dropDownValueexpriority === "All" && this.state.dropDownValueextype !== "All" && this.state.selectedDate === null) {
        // console.log("Inside If 2")
        if (exercise.label === this.state.dropDownValueextype) {
          newEx.push(exercise);
          // console.log("Inside If 3")
        }
      } else if (this.state.dropDownValueexpriority !== "All" && this.state.dropDownValueextype === "All" && this.state.selectedDate === null) {
        // console.log("Inside If 4")
        if (exercise.priority === this.state.dropDownValueexpriority) {
          newEx.push(exercise);
          // console.log("Inside If 5")
        }
      } else if (this.state.dropDownValueexpriority === "All" && this.state.dropDownValueextype === "All" && this.state.selectedDate !== null) {
        var exDate = new Date(exercise.due);
        var selDate = new Date(this.state.selectedDate);
        // console.log(exDate+" :" + selDate);
        if (exDate.getTime() === selDate.getTime()) {
          newEx.push(exercise);
        }
      } else if (this.state.dropDownValueexpriority !== "All" && this.state.dropDownValueextype !== "All" && this.state.selectedDate === null) {
        if (exercise.priority === this.state.dropDownValueexpriority && exercise.label === this.state.dropDownValueextype) {
          // console.log("Indise If");
          console.log("Inside If 7")
          newEx.push(exercise);
        }
      } else if (this.state.dropDownValueexpriority === "All" && this.state.dropDownValueextype !== "All" && this.state.selectedDate !== null) {
        if (exercise.label === this.state.dropDownValueextype) {
          // console.log("Indise If");
          var exDate = new Date(exercise.due);
          var selDate = new Date(this.state.selectedDate);
          // console.log(exDate+" :" + selDate);
          if (exDate.getTime() === selDate.getTime()) {
            newEx.push(exercise);
          }

        }
      } else if (this.state.dropDownValueexpriority !== "All" && this.state.dropDownValueextype === "All" && this.state.selectedDate !== null) {
        if (exercise.priority === this.state.dropDownValueexpriority) {
          // console.log("Indise If");
          var exDate = new Date(exercise.due);
          var selDate = new Date(this.state.selectedDate);
          // console.log(exDate+" :" + selDate);
          if (exDate.getTime() === selDate.getTime()) {
            newEx.push(exercise);
          }
        }
      } else {
        // console.log("Inside If 6")
        if (exercise.priority === this.state.dropDownValueexpriority && exercise.label === this.state.dropDownValueextype) {
          // console.log("Indise If");
          // console.log("Inside If 7")
          var exDate = new Date(exercise.due);
          var selDate = new Date(this.state.selectedDate);
          // console.log(exDate+" :" + selDate);
          if (exDate.getTime() === selDate.getTime()) {
            newEx.push(exercise);
          }
        }
      }
    });
    // console.log("Befor MyWx");
    // console.log(newEx);
    this.setState({
      currentExercises: newEx
    });
  }

  render() {
    return (
      <div>
        <Navs userId={localStorage.getItem("userId")} />
        <div id="search">
          <b><Label htmlFor="category" className="exlabel">CATEGORY</Label></b>

          <ButtonDropdown isOpen={this.state.dropdownOpentype} toggle={this.toggledroptype} id="exdroptype">
            <DropdownToggle color="warning" toggle={this.toggledroptype} caret style={{ fontSize: '19px' }}>{this.state.dropDownValueextype}</DropdownToggle>
            <DropdownMenu className="drop">
              <DropdownItem className="typelist" onClick={this.changeValueextype} >All</DropdownItem>
              <hr />
              <DropdownItem className="typelist" onClick={this.changeValueextype} >Home</DropdownItem>
              <hr />
              <DropdownItem className="typelist" onClick={this.changeValueextype} >Work</DropdownItem>
              <hr />
              <DropdownItem className="typelist" onClick={this.changeValueextype} >Shopping</DropdownItem>
              <hr />
              <DropdownItem className="typelist" onClick={this.changeValueextype} >Edu</DropdownItem>
              <hr />
              <DropdownItem className="typelist" onClick={this.changeValueextype} >Payments</DropdownItem>
              <hr />
              <DropdownItem className="typelist" onClick={this.changeValueextype} >Misc</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>

          <b><Label htmlFor="category" className="exlabel" style={{ marginLeft: '6px', fontSize: '20px' }} >DATE</Label></b>

          <Input type="date" id="exdue" name="exdue" max="2030-01-01" onChange={this.dateOnChange} innerRef={(input) => this.exdue = input} />

          <b><Label htmlFor="priority" className="exlabel" style={{ marginLeft: '20px' }} >PRIORITY</Label></b>

          <ButtonDropdown isOpen={this.state.dropdownOpenpriority} toggle={this.toggledroppriority} id="exdroppriority">
            <DropdownToggle color="warning" toggle={this.toggledroppriority} caret style={{ fontSize: '19px' }} >{this.state.dropDownValueexpriority}</DropdownToggle>
            <DropdownMenu className="drop">
              <DropdownItem className="typelist" onClick={this.changeValueexpriority} >All</DropdownItem>
              <hr />
              <DropdownItem className="typelist" onClick={this.changeValueexpriority} >High</DropdownItem>
              <hr />
              <DropdownItem className="typelist" onClick={this.changeValueexpriority} >Medium</DropdownItem>
              <hr />
              <DropdownItem className="typelist" onClick={this.changeValueexpriority} >Low</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
        <div>
          <Display exercise={this.state.currentExercises} />
        </div>
      </div>
    );
  }
}


export default Exercise;