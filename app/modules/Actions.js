import React from 'react';

// We speciify the name of the action as a variable
const UPDATE_SEARCH = 'UPDATE_SEARCH';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
const UPDATE_FILTER = 'UPDATE_FILTER';
const UPDATE_PRICE = 'UPDATE_PRICE';


// This is an action creator, it simply specifies the action.
// this is what we call to send an action.
export const updateSearch = (text) => ({
    type: UPDATE_SEARCH,
    text
});

//pending: start API call is timed to do things async (when first triggered, turn pending on (is pending)) have loading bar
//Once pending finishes, call success/failure (this is a service).
//Call service, which calls action