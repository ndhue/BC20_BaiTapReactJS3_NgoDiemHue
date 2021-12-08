import React, { Component } from 'react'

export default class State extends Component {
    constructor(props){
        super(props);
        this.state = {
            // object
            username: "Cybersoft",
            isLogin: false,
        }
    }
    
    handleLogin = () =>{
        // setState: gán lại giá trị cho object state
        this.setState({
            isLogin:true,
        },
        // arrow function do trong state bị bất đồng bộ nếu gọi hàm bth
        ()=>{
            console.log(this.state.isLogin);
        }
        );
    };

    handleLogout = () =>{
        // setState: gán lại giá trị cho object state
        this.setState({
            isLogin:false,
        });
    };

    renderHTML(){
        return this.state.isLogin?(
            <div>
                <h1>Hello {this.state.username}</h1>
                <button className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
            </div>
            ):(
            <div>
                <h1>Vui long login</h1>
                <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
            </div>
            );
    }

    render() {
        return (
            <div>
                <h3>State</h3>
                {this.renderHTML()}
            </div>
        )
    }
}
