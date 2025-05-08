import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component{
    state = {advice:''};

    componentDidMount(){
        this.fetchAdvice();
    }
    fetchAdvice=() => {
        axios.get('https://api.adviceslip.com/advice')
            .then((result) => {
                const { advice } = result.data.slip;
                this.setState({ advice });
            })
            .catch((err) => {
                console.log(err)
                
            });
    }

    render(){
        const { advice }= this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 classname="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE !</span>
                    </button>


                </div>



            </div>
        );
    }
}
export default App;