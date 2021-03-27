import React, { Component } from 'react';
import {Card, CardImg, Button} from 'reactstrap';

export default class DogIndex extends Component {
    constructor(props){
        super(props);
        this.state = {
            randomImage: "",
            newImage: "",
            interval: 0
        };
    }

    fetchImage = () => {
        fetch('https://dog.ceo/api/breeds/image/random', {
          method: "GET",
        })
        .then((res) => res.json())
        .then((json) => {
          this.setState({
              randomImage: json.message
          })
        })
    }

    addImage = () => {  
        fetch('https://dog.ceo/api/breed/hound/images', {
            method: "GET",
            })
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    newImage: json.message[1]
                })
            })
        }
    
    componentDidMount () {
        this.fetchImage()
        this.setState({
            interval: setInterval(this.fetchImage, 5000) //this will fire the fetch dog function every 5000 milliseconds or 5 seconds - needed to bind it above since it's not an arrow function
        })
    }

    
    render(){
        return (
            <div>
                <Button onClick={(event) => this.addImage(event)}>Click for new Image</Button>
                <Card>
                    <CardImg src={this.state.randomImage}></CardImg>
                </Card>
                <Card>
                    <CardImg src={this.state.newImage}></CardImg>
                </Card>
            </div>
        );
    }
}