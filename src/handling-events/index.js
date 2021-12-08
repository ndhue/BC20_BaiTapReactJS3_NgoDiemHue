import React, { Component } from 'react'
import ExampleHandlingEvents from './example';
export default class HandlingEvents extends Component {
    handlingEvent(){
        console.log("success");
    }
    handlingEventsParams(a){
        console.log(a);
    }
    render() {
        return (
            <div>
                <h3>HandlingEvents</h3>
                <button className="btn btn-success" onClick={this.handlingEvent}>HandlingEvents</button>

                <button className="btn btn-info" onClick={()=>{console.log("info");}}>HandlingEvents</button>

                <button className="btn btn-danger" onClick={()=>{this.handlingEventsParams("Cybersoft");}}>HandlingEvents</button>

                <ExampleHandlingEvents/>
            </div>
        )
    }
}
