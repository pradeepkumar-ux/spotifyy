import React, {Component} from 'react';

class Search extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            artist: '',
        };
        this.onChangeArtist= this.onChangeArtist.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
    }

    submitHandler(event)
    {
        event.preventDefault();
        console.log("Searched for ",this.state.artist);
        this.props.search(this.state.artist);
    }

    onChangeArtist(e)
    {
        this.setState({
            artist:e.target.value
        });
    }
    render()
    {
        return(
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-text">Artist/Album Name</span>
                                        <input type="text" name="artist" value={this.state.artist} onChange ={this.onChangeArtist} className="form-control" required>
                                        </input>
                                        <button type="submit" className="btn btn-outline-success">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;