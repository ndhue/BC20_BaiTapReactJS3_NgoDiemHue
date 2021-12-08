import React, { Component } from 'react'
import Child from './child';
import ChildFnc from './childFnc';
import Children from './children';
export default class Communication extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "Cybersoft",
            age: 18,
        };
    }

    changeInfo = (name, age) =>{
        this.setState({
            username: name,
            age: age
        });
    };

    reset = (username, age) =>{
        // hàm reset có nv nhận data từ component child
        // console.log(username,age);
        // cập nhật lại state
        this.setState({
            username,
            age,
        });
    };
    
    render() {
        // bóc tách
        const {username, age} = this.state;
        return (
            <div>
                <h3>Communication</h3>
                <p>Username: {username} - Age: {age}</p>
                <button className="btn btn-info" onClick={()=>{this.changeInfo("Hue",19)}}>Change Info</button>
                <hr/>
                <Child username={username} age={age} resetInfo={this.reset}/>
                <hr/>
                <ChildFnc username={username} age={age}/>
                <hr/>
                <Children>
                    <p>Username: {username} - Age: {age}</p>
                    <div>Hue</div>
                </Children>
            </div>
        )
    }
}
