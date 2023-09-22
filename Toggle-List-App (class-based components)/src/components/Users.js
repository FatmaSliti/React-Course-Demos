import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {
  constructor() {
    super() //calls the constructor of the super class which is the Component class
    this.state = { //in class-based components the state always is an object and always states are grouped in one object no matter they're related or not
      showUsers: true
    };
  }

  componentDidUpdate() {
    // try {

    // }catch (err) {

    // } // in regular JS but while needing this in JSX it can't work so we use Error boundaries
    if (this.props.users.length === 0) {
      throw new Error('No users provided');
    }
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; //NOT!
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    })
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}



// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

// const usersList = (
//   <ul>
//     {DUMMY_USERS.map((user) => (
//       <User key={user.id} name={user.name} />
//     ))}
//   </ul>
// );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;





//useEffect without dependencies => componentDidMount() in class-based components
// useEffect with some dependencies => componentDidUpdate() in ..
// UseEffect cleanup function (useEffect(()=>{return ()=> {}},[])) => componentWillUnmount() : called right before component is unmounted (removed from the DOM)