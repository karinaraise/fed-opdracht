import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
    return(
        <div className="col col-sm-4">
            <input className="searchbox" placeholder="Type to search..." ></input>
        </div>
    );
};

export default SearchBox;