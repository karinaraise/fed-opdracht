import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
    return(
        <div className="zoeken">
            <input className="searchbox" 
            value={props.value}
            onChange={(event)=> props.setSearchValue(event.target.value)}
            placeholder="Type to search..." 
            ></input>
        </div>
    );
};

export default SearchBox;