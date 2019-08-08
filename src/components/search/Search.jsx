import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Search = props => {
    return(
        <form onSubmit = {props.func}>
            <input type = "text" placeholder = "Enter city" name = "city"/>
            <button class = "btn btn-primary"> Search</button>
        </form>
        
    );
};
export default Search;