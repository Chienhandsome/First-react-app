import React from "react";

class ChildComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: 'default value'
        };
    }

    sum = (a, b) => {
        return a + b;
    }

    handleInput = (event) => {
        this.setState({ valueInput: event.target.value });
    }

    handleSubmit = (event) => {
        //send to parent
        this.props.handleData(this.state.valueInput);

        event.preventDefault();
    }

    render() {
        return (
            <>
                <h4>
                    I'm child comp <br />
                    value from parent: {this.props.message}
                </h4>

                <h4>
                    i call function from parent: {this.props.sum(5, 10)}
                </h4>

                <input type="text" value={this.state.valueInput} 
                        onChange={this.handleInput} />

                <button onChange={(event)=>{this.handleSubmit}}>Submit</button>
            </>
        );
    }
}
export default ChildComponent;