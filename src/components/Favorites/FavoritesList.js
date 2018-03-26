import React, { Component } from "react";
import axios from "axios";
import "./FavoritesList.css"

class FavoritesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favJokes: [],
        };

        // this.updateJoke = this.updateJoke.bind(this);
    }
    componentDidMount() {
        axios.get("/api/jokes").then(response => this.setState({favJokes : response.data }))
    }

    // updateJoke(){
    //     axios.put(`/api/jokes/${result.value}`)
    //     .then(response => this.setState({ joke: response.data}))
    // };

    render(){
        console.log(this.props);
        let favorites = this.props.favJokes.map((e,i)=> (
            <div key={i} className="fav-item" 
            onClick={() => this.props.delete(i)}
            >

            <p className="joke">{e}</p>
            </div>
        ));
    
        return(
           <div className="favorites">
           {/* <div className="updatejoke" onClick={() => this.updateJoke()}>
           <div>{this.state.joke}</div> */}
           {/* </div> */}
            {/* {this.props.favJokes} */}
            {favorites}
           </div> 
        );
    };
}
export default FavoritesList;