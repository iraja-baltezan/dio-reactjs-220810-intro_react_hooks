import offlineData from '../../data/offlineData';

export const getQuote = (excludedId = -1) =>
    fetch( process.env.REACT_APP_API + excludedId )
        .then(response => response.json());