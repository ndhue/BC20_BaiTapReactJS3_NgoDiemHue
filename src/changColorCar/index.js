import React, { Component } from 'react'

export default class ChangeColorCar extends Component {
    constructor(props){
        super(props);
        this.state = {
            img: "./img/imgRedCar.jpg",
        };
    }
    changeColor = (src) =>{
        this.setState({
            img: "./img/img"+src+"Car.jpg",
        });
    }
    render() {
        const {img} = this.state;
        return (
            <div>
                <h3>ChangeColorCar</h3>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={img}></img>
                    </div>
                    {/* function có tham số thì phải dùng callback function */}
                    <div className="col-md-6">
                        <button className="btn btn-danger mx-3" onClick={()=>{this.changeColor("Red")}}>Red</button>
                        <button className="btn btn-light mx-3" onClick={()=>{this.changeColor("Silver")}}>Silver</button>
                        <button className="btn btn-dark mx-3" onClick={()=>{this.changeColor("Black")}}>Black</button>
                    </div>
                </div>
            </div>
        )
    }
}
