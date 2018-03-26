import React, {Component} from "react";
import axios from "axios";
import FavoritesList from "../Favorites/FavoritesList";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import "./RandomJokesGen.css";

export default class RandomJokesGen extends Component {
    constructor(props){
        super(props);


        this.state = {
            joke: "",
            favJokes: [],  
        };

        this.addFavorite = this.addFavorite.bind(this);
        // this.getFavorites = this.getFavorites.bind(this);
        this.deleteFavorite = this.deleteFavorite.bind(this);

    }

    componentDidMount(){
        this.randomJoke();
        this.getFavorites();
    }

    randomJoke(){
        
        axios.get("/api/jokes/random")
        .then(response => { 
            console.log("get random response:", response.data.value);
            this.setState({ joke: response.data.value});
        })
        .catch(() => this.randomJoke());
    }

    addFavorite(){
        let { joke, favJokes } = this.state;
        axios.post("/api/jokes", { joke:this.state.joke })
        .then(response => {
            // console.log("add fev response: ", response)
            this.setState({ favJokes: response.data})
        });

    }

    getFavorites(){
        axios.get("/api/jokes").then(response => this.setState({ favJokes: response.data}));
    }

    deleteFavorite(joke){
        axios.delete(`/api/jokes/${joke}`)
        .then(response => this.setState({ favJokes: response.data }));
    }

    render() {
        const { joke, favJokes } = this.state;
        console.log(favJokes);
        
        return(
        //NEED DELETE BUTTON
        
        <div className="RandomJokesGen">
            <div className="background"></div>
            
            <header className="title">CHUCK NORRIS JOKE GENERATOR</header>
            
            <div className = "main">
                <div className = "joketext">{joke}</div>
                <div className="buttons">
                    <button className = "new-joke-button" onClick={()=>this.randomJoke()}>
                        MORE FUNNY
                    </button>
                    <FavoriteButton add={this.addFavorite}/>
                </div>
            </div> 
                
            <div className="favorites-list">
                <FavoritesList 
                favJokes={favJokes}
                
                delete={this.deleteFavorite}
                />
            </div>

        </div>
        )
    }

}