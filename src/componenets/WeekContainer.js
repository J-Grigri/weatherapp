
import React from 'react';
import DayCard from './DayCard'


class WeekContainer extends React.Component {
    state = {
        fullData: [],
        dailyData: [],
        degreeType: "fahrenheit"
    }
    updateForecastDegree = event => {
        this.setState({
            degreeType: event.target.value
        }, () => console.log(this.state))
    }

    componentDidMount = () => {
        const weatherURL =
            `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${process.env.REACT_APP_APIKEY}`

        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                this.setState({
                    fullData: data.list,
                    dailyData: dailyData
                }, () => console.log(this.state))
            })
    }
    formatDayCards = () => {
        return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
    }

    render() {
        this.formatDayCards();
        return (

            <div className="forecastContainer">
                
                <h5 className="display-5 text-muted">New York, US</h5>
                <h3>Show 5-Day Forecast</h3>
                <div className="row justify-content-center">
                    {this.formatDayCards()}
                </div>
            </div>
        )
    }
}

export default WeekContainer;