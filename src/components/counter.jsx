import React, { Component } from 'react';

class Counter extends Component {



    render() {
        return (
            <div>
                <span className={this.getBadgeClassess()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={()=> this.props.onDelete(this.props.counter.id)}
                > 
                    Delete
                </button>
            </div>
        );
    }

    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    getBadgeClassess() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;
