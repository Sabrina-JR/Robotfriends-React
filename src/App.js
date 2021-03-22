import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component{
    constructor(){
        super()
        this.state={
            robots: [],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=>Response.json())
        .then(user=>this.setState({robots:user}))
    }
   
    onSearchChange = (event) => {
       this.setState({ searchfield: event.target.value })
      
     
   }



    render(){
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
          return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1 className='f1'>ROBOTFRIEND</h1>
                <SearchBox SearchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        )
    }
}

export default App;