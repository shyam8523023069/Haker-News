import React from 'react';
import './Filter.css';

export default function Filter() {
    return (
        <form>
            <label for="searchlabel">Search</label>
            <select name="Post" id="post">
                <option value="All">All</option>
                <option value="Stories">Stories</option>
                <option value="Comments">Comments</option>
            </select>

            <label for="bylabel">by</label>
            <select name="Post" id="post">
                <option value="Popularity">Popularity</option>
                <option value="Date">Date</option>
            </select>

            <label for="forlabel">for</label>
            <select name="Post" id="post">
                <option value="AllTime">All time</option>
                <option value="Last">Last 24h</option>
                <option value="Week">Past Week</option>
                <option value="Month">Past Month</option>
                <option value="Year">Past Year</option>
                <option value="Range">Custom range</option>
            </select>
        </form>
    )
}


