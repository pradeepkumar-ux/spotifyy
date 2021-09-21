import React, { Component } from 'react';
import Search from '../util/Search';
import axios from 'axios';
import Artist from '../util/Artist';

const API_URI = "https://spotify-api-wrapper.appspot.com";

class Music extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            artist : ''
        };
        this.search = this.search.bind(this); 
    }
    search(data)
    {
        console.log("Artist-name - ",data);
        // api logic 

        axios.get(`${API_URI}/artist/${data}`)
            .then(res=>{
                console.log('output', res); // Here the data is in Object format
                if(res.status === 200)
                {
                    let artist = res.data.artists.items[0];
                    this.setState({
                        artist:artist
                    });
                }
            })
            .catch(err=>{
                console.log(err.message);
            });

            
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-center display-3">Music</h3>
                        <Search search={this.search}/>
                        <Artist artist={this.state.artist}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Music;
