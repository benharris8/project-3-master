import React from 'react'



const SearchBar = ({ query, onChange }) => {


  return <div className="search">
    <div className="field">
      <div className="control"><strong>Choose by restaurant</strong>
        <input
          className="input is-info"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={onChange}>
        </input>
      </div>
    </div>
  </div >
}

export default SearchBar