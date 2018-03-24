import React, {Component} from "react";
import axios from "axios";

export default class RandomJokesGen extends Component {
    constructor(props){
        super(props);


        this.state = {
            joke: "",
            favJokes: [],  
        };
    }

    componentDidMount(){
        this.randomJoke();
    }

    randomJoke(){
        console.log("getting joke")
        axios.get("/api/jokes/random")
        .then(response => { 
            console.log("get random response:", response.data.value);
            this.setState({ joke: response.data.value});
        })
        .catch(() => this.randomJoke());
    }

    addFavorite(){
        let { joke, favJokes } = this.state;
        axios.post("/api/jokes", { joke })
        .then(response => {
            // console.log("add fev response: ", response)
            this.setState({ favJokes: response.data})
        });
    }

    getFavorites(){
        axios.get("/api/jokes").then(response => this.setState({ favoriteJokes: response.data}));
    }

    deleteFavorite(joke){
        axios.delete(`/api/jokes/${joke}`.then(response => this.setState({ favoriteJokes: response.data })));
    }

    render() {
        const { joke, favJokes } = this.state;
        return(
        <div>
        <div>{joke}</div>
        </div>)
    }

}