import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {
    const [text, setText] = useState('')  //hook state


    const onChange = e => setText(e.target.value )
    
     const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
         setAlert('Please enter something', 'light')
        } else {
            searchUsers(text);
            setText('');
        }
    };
    //no longer need this. keyword since I am using hooks and there is no class
        return (
            <div>
                <form onSubmit={onSubmit} className="form"> 
                <input type="text" 
                name="text" 
                placeholder="Search Users..." 
                value={text}
                onChange={onChange}
                 />
                <input type="Submit" name="Search" className="btn btn-dark btn-block" /> 
                </form>
                {showClear && (<button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>)}
            </div>//clear button thats visible only if meet certain condition, check app.js for conditions
        )
    
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert:PropTypes.func.isRequired
}

export default Search
