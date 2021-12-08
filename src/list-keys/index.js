import React, { Component } from 'react'

export default class ListKeys extends Component {
    constructor(props){
        super(props);
        this.state = {
            listUser: [
                {username: "Nguyen", age: 18},
                {username: "Hai", age: 20},
                {username: "Man", age: 21},
            ],
        };
    }

    renderListUsser = () =>{
        return this.state.listUser.map((user,index)=>{
            return (
            <li key={index}>Username: {user.username} - Age: {user.age}</li>
            );
        });
    }
    render() {
        return (
            <div>
                <h3>ListKeys</h3>
                <ul>
                    {this.renderListUsser()}
                    {
                    // this.state.listUser.map((user,index)=>{
                    //     return (
                    //     <li key={index}>Username: {user.username} - Age: {user.age}</li>
                    //     );
                    // })
                }
                </ul>
            </div>
        )
    }
}
