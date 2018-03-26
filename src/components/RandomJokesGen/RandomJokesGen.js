import React, {Component} from "react";
import axios from "axios";
import FavoritesList from "../Favorites/FavoritesList";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import MoreJokes from "../MoreJokes/MoreJokes"
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
        this.editFavorite = this.editFavorite.bind(this)
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
        this.randomJoke();
    }

    editFavorite(joke, id) {
        axios.put(`/api/jokes/${id}`, {joke})
        .then(response => {
            console.log(response.data);
           this.setState({ favJokes: response.data})
        })
    }

    getFavorites(){
        axios.get("/api/jokes").then(response => this.setState({ favJokes: response.data}));
    }

    deleteFavorite(id){
        axios.delete(`/api/jokes/${id}`)
        .then(response => this.setState({ favJokes: response.data }));
    }

    render() {
        const { joke, favJokes } = this.state;
        // console.log(favJokes);
        
        return(
        
        <div className="RandomJokesGen">
            <div className="background"></div>
            
            <header className="title">CHUCK NORRIS JOKE GENERATOR</header>
            
            <div className = "main">
                <div className = "joketext">{joke}</div>
                <div className="buttons">
                    <MoreJokes randomJoke={()=>this.randomJoke()} />
                    <div>
                    <FavoriteButton add={this.addFavorite}/>
                    </div>
                </div>
            </div> 
                
            <div className="favorites-list">
                <FavoritesList 
                favJokes={favJokes}
                edit={this.editFavorite}
                delete={this.deleteFavorite}
                />
            </div>

        </div>
        )
    }

}