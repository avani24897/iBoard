// Dev
// const encodedIdentifier = "aHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaQ=="
// const socketEndPoint = "http://localhost:4001/";

// PROD
const encodedIdentifier = "aHR0cHM6Ly9pYm9hcmR4Lmhlcm9rdWFwcC5jb20vYXBp";
const socketEndPoint = "https://iboardx-streamer.herokuapp.com/";

var axios = require('axios');
const util = {
    identifier: atob(encodedIdentifier),
    socketEndpoint: socketEndPoint,
    awakeEndpoint: () => {
        axios.get(atob(encodedIdentifier));
        axios.get(socketEndPoint);
    }
};

export default util;