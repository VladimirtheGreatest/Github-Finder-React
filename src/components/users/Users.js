import React, { useContext }  from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/spinner';
import githubContext from '../../context/github/githubContext';



const Users = () => {
    const GithubContext = useContext(githubContext);

    const {loading, users} = GithubContext;


        if(loading) {
            return <Spinner />
        } else {
            return (
                <div style={userStyle}>
                 {users.map(user => (
                   <UserItem key={user.id} user={user} />
               ))} 
            </div>
            );
        }
};


//I dont need this anymore since I am managing that through github context
//Users.propTypes = {
   // users: PropTypes.array.isRequired,
   // loading: PropTypes.bool.isRequired
//}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '1rem'
};

export default Users
