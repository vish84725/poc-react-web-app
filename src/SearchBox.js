import React from 'react';

const SearchBox = ({searchField,searchChange})=> {
    return (
        <div>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                onChange={searchChange}
                type="search" placeholder="search robots"/>
        </div>

    );
}

export default SearchBox;