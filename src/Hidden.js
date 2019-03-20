import React, { Component } from "react";
//import Data from './data.json';
import { Route, Link, Switch } from 'react-router-dom';
//import Details from './Detail';
import Data from './data.json';
import PostData from "./PostData";
class Hidden extends Component {
    state = {
        text: "",
        listing: [],
        details: []
    };
    onSearch = (e) => {
        const value = e.target.value;
        let details = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, "i");
            details = Data.Data.map(persi => persi.title)
                .sort()
                .filter(v => regex.test(v));
        }
        console.log( details);
        this.setState({
            text: value,
            details

        });
    };
    suggestionsSelected(value) {
        let listing = [];
        listing = Data.Data.filter(person => person.title.toLowerCase() === value.toLowerCase());
        console.log(listing);
        this.setState({
            text: value,
            listing: listing
        });
        this.history.push("/food-details");
    }
    renderSuggest() {
        const { details } = this.state;
        if (details.length === 0) {
            return null;
        }

        /* Discp=()=>{
             return(
                 <{}
             );
         }*/
        return (
            <div>
                <ul>
                    {details.map(food => {
                        console.log( food)
                        return (<li className="acb"
                            key={food}
                            onClick={() => this.suggestionsSelected(food)}>
                           {food}
                        </li>
                        )
                    }
                    )}
                </ul>
            </div>
        );
    }
    render() {
        console.log( this.state.text)
        console.log( this.state.listing);
        return (
            <div className="oo">
                <input className="xyz"
                    className="xx"
                    type="text"
                    placeholder="search"
                    onChange={this.onSearch}
                    value={this.state.text}/>
                <div>
                    <div >{this.renderSuggest()}</div>
                </div>
                <PostData title={this.state.listing.title}  carb={this.state.listing.carb} />
            </div>
        );
    }

}

export default Hidden;