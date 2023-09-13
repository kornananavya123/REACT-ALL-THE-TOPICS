import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor is called");
       // this is state variables inside state variables movie data is there
        this.state = {
            movieData: {
                // this link dummy data
                Poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEgoovrV3JkLLIdZtBkGka12COB2nyn2XfSjSZGEg5w&s",
                Title:"dummy title",
                Year:"dummy year",
                Genre:"dummy genre",
                Actors:"dummy actors",
                Directors:"dummy directors",
                 Awards:"dummy award",
            }
        }
    }
  // first api called next component didmountcalled only one time called componentdidmount after initial render didmount called
    async componentDidMount() {
        console.log("componentDidMount is called");
        // movie api called
        let url = "https://www.omdbapi.com/?i=tt0371746&apikey=53b4ed65";
        let response = await fetch(url);
        let data = await response.json();
        console.log("data ==>", data);
        // its refresh the page the api called  movie poster came
        //this.setState({movieDate: data})
        setTimeout(() => {
            this.setState({movieDate: data})
        },1000);
    }
   render() {
    console.log("render is called");
        return (
        <div>
            <h1>MOvie Card componnet</h1>
            <img src={this.state.movieDate.Poster} alt=""/>
            <h1>{this.state.movieData.Title}</h1>
            <h1>{this.state.movieData.Year}</h1>
            <h1>{this.state.movieData.Genre}</h1>
            <h1>{this.state.movieData.Actors}</h1>
            <h1>{this.state.movieData.Directors}</h1>
            <h1>{this.state.movieData.Award}</h1>
        </div>
        )
    }
}

export default Card;