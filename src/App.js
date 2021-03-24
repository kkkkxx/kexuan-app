import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import './App.css';
import Scroll from './Scroll';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield : '',         
        }
    }
    //hello
    componentDidMount() {
        // console.log('check');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response=> Response.json())
            .then(users=> this.setState({robot: users}));
        // this.setState({robot: robots})
    }

    onSearchChange = (event) => {
        console.log(event);
        this.setState({ searchfield: event.target.value})
    }
    render (){
        const filteredRobots = this.state.robots.filter(robot=>{ //filter return后面写conditions
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            {/* <button>test</button> */}
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
                
        </div>
    ); 
    }
}
 
export default App;