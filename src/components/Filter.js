import React from "react"
import { useState } from "react";

const FarmFilters = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('All Farms');
    const searchFarms = () => {
        // filter logic here
    }

    return (
        <div className="farms">
            <div className="farm-filters">
                <input
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search Farms"
                />
                <select
                    value={selectedFilter}
                    onChange={e => setSelectedFilter(e.target.value)}>
                    <option>All Farms</option>
                    <option>CAKE Farms</option>
                    <option>USDT Farms</option>
                </select>
                <button onClick={searchFarms}>Search</button>
            </div>
        </div>
    )
}

export default FarmFilters;