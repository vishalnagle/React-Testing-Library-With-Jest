import React from "react";


export default class ClassComponent extends React.Component{
    getText(){
        return "Testing"
    }

    render(){
        return (<div>
            <h2>Class Component Testing</h2>
        </div>)
    }
}