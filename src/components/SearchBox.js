import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
    return(
        <div className="zoeken">
            <input className="searchbox" placeholder="Type to search..." ></input>
        </div>
    );
};

export default SearchBox;