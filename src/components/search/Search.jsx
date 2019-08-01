import React from 'react';

const Search = props => {
    return(
        <form onSubmit = {props.func}>
            <input type = "text" placeholder = "Enter city" name = "city"/>
            <button>Search</button>
        </form>
        
    );
};
export default Search;