import React,{useEffect,useState} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

function App(){
    // constructor(){
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchField : ''
    //     }
    // }

    const [robots,setRobots] = useState([]);
    const [searchField,setSearchField] = useState('');
    const [count,setCount] = useState(0);

    const onSearchChange = (event) => {
        setSearchField( event.target.value);
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    //         return response.json();
          
    //     }).then(users => {
    //         this.setState({robots:users})
    //     })
    // }

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
          
        }).then(users => {
            setRobots(users);
        });
        console.log(count);
    },[count])
    

        const filteredRobotos = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if(robots.length === 0){
            return (<h1>Loading</h1>);
        }else{
            return (
                <div className='tc'>
                    <h1>Robofriends</h1>
                    <button onClick={()=> setCount(count+1)}>Click Me</button>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobotos}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
        
            );
        }

    

}

export default App;