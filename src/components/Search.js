import React, { useState } from 'react';



const Search = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
 


    const handleChange = (e) => {

        const term = e.target.value;
        setSearchTerm(term);
        handleSearch(term);

    };

    return(
    <>
        <div className="container">
            <div className="row mt-3">
            <div className="col">
                <div className="input-group">
                    <input 
                        type="text"
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder="Search by Name"
                        className="form-control"
                        
                    />
                    <span className="input-group-text">
                    <i className="fa fa-search"></i>
                    </span>
                </div>
            </div>
            </div>
        </div>
       
    </>
    )
}

export default Search