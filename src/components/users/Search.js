import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert:PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })
    
    onSubmit = e => {
        e.preventDefault();
        if (this.state.text === '') {
         this.props.setAlert('Please enter something', 'light')
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({text: ''});
        }
    };

    render() {
        const {clearUsers, showClear} = this.props;  //destructuring instead of this.props.clearUsers and this.props.showClear
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                <input type="text" 
                name="text" 
                placeholder="Search Users..." 
                value={this.state.text}
                onChange={this.onChange}
                 />
                <input type="Submit" name="Search" className="btn btn-dark btn-block" /> 
                </form>
                {showClear && (<button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>)}
            </div>//clear button thats visible only if meet certain condition, check app.js for conditions
        )
    }
}

export default Search
