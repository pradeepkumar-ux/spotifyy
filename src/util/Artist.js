import React from 'react';
import {Link} from 'react-router-dom';
function Artist(props) {
    if(!props.artist) return null; // to avoid empty artist props
    const {artist} = props;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h4 className="display-4">Artist Information</h4>
                </div>
            </div>

            <div className="row mt-3 mb-3">
                <div className="col-md-4">
                    <img src={artist.images[0].url} alt="" className="img-fluid rounded-circle"/>
                </div>

                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-center">{artist.name}</h3>
                            <hr/>
                            <p className="text-dark" >{artist.genres.join(",")}</p>
                            <hr/>
                            <p className="text-dark">Followers
                            <span className="float-end">{artist.followers.total}</span>
                            </p>
                        </div>

                        <div className="card-footer">
                            <Link to={"/tracks/" + artist.id} className="btn btn-outline-info">Tracks</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artist;
