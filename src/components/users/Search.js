import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import githubContext from '../../context/github/githubContext';

const Search = ({ setAlert }) => {

    const GithubContext = useContext(githubContext);
    const [text, setText] = useState('')  //hook state


    const onChange = e => setText(e.target.value )
    
     const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
         setAlert('Please enter something', 'light')
        } else {
            GithubContext.searchUsers(text);
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
                {GithubContext.users.length > 0 && (<button className="btn btn-light btn-block" onClick={GithubContext.clearUsers}>Clear</button>)} 
            </div>//clear button thats visible only if meet certain condition, check app.js for conditions, check props in app.js for clear users(very good example for using props)
        )
    
}


Search.propTypes = {
    setAlert:PropTypes.func.isRequired
}

export default Search
