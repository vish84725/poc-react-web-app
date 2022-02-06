import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import { render } from 'react-dom';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
          
        }).then(users => {
            this.setState({robots:users})
        })
    }
    
    render(){
        const filteredRobotos = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        if(this.state.robots.length === 0){
            return (<h1>Loading</h1>);
        }else{
            return (
                <div className='tc'>
                    <h1>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobotos}/>
                </div>
        
            );
        }

    }

}

export default App;