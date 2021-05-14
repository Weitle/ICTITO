import React, { Component } from 'react';
import axios from 'axios';

class Abilities extends Component {
  state = {
    abilities: []
  }
  componentDidMount(){
    axios.get("http://localhost:4021/api/abilities").then(res=>{
      const {data} = res;
      if(data.status === 0){
        this.setState({abilities: data.abilities});
        console.log(this.state.abilities);
      } else{
        alert(data.message);
      }
    }).catch(err=>{
      alert("Get abilities failed.")
    })
  }
  render() { 
    return (
      <React.Fragment>
        <h1>Abilities</h1>

      </React.Fragment>
    );
  }
}
 
export default Abilities;