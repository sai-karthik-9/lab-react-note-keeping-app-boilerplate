import React, { Component } from "react";
import  "../App.css";

class Editor extends Component{

    constructor(props) {
        super(props);
        this.state = {
            initialNote: 'Hello WelCome to NotePad Pro'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ initialNote: e.target.value });
    }

    render(){
        return( <div className="container">
            <div className="editor">
                <h2>Editor</h2>
                <textarea className="inputText" defaultValue={this.state.initialNote} onChange={this.handleChange}></textarea>
            </div>

            <div className="display">
                <h2>Display</h2>
                <div className="outputText" defaultValue={this.state.initialNote}>{this.state.initialNote}</div>
            </div>
        </div>
        )
    }
}

export default Editor;