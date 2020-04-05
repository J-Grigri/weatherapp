import React, { Component } from 'react';
import './App.css';
import WeekContainer from './componenets/WeekContainer';
import Card from './componenets/Card'
import DegreeToggle from './componenets/DegreeToggle'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Card/>
                <DegreeToggle />
                <WeekContainer />
            </div>
        );
    }
}

export default App;
