import React, { Component } from "react";
import axios from "axios";
import "./FavoritesList.css"

class FavoritesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favJokes: [],
            userInput: "",
        };

        this.updateJoke = this.updateJoke.bind(this);
        this.editFavorite = this.editFavorite.bind(this)
        
    }
    componentDidMount() {
        axios.get("/api/jokes").then(response => this.setState({favJokes : response.data }))
    }

    updateJoke(id){
        axios.put(`/api/jokes/${id}`, {joke: this.state.userInput, id: id})
        .then(response => {
            console.log(response.data);
           this.setState({ favJokes: response.data})
        })
    };

    editFavorite(value){
        this.setState({userInput : value})
    }

    render(){
        console.log(this.state.favJokes);
        console.log(this.state.userInput)
        let favorites = this.props.favJokes.map((e,i)=> (
            <div key={e.id} className="fav-item" 
            onClick={() => this.props.delete(e.id)}
            >

            <p className="joke">{e.joke}</p>

            {/* EDIT FUNCTIONALITY */}
            <input onChange={(e) => this.editFavorite(e.target.value)}/>
           <button className="updatejoke" onClick={() => this.updateJoke(e.id)}>
            click</button>
            </div>
        ));
    
        return(
           <div className="favorites">
            {/* {this.props.favJokes} */}
            {favorites}
        
           </div> 
           
        );
    };
}
export default FavoritesList;