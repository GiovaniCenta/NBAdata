const API_KEY = "bca5c3905dmsh7e1180dc4a4d7b2p181b47jsn298ac23cabff"
const PER_PAGE = 10;
const ObjectsToCsv = require('objects-to-csv')
var unirest = require("unirest");
var colors = require('colors');
const API_functions = require("./API_FUNCTIONS");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

var req = unirest("GET", "https://free-nba.p.rapidapi.com/players");

req.query({
    "per_page": PER_PAGE,
    "page": "0"
});

req.headers({
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "free-nba.p.rapidapi.com",
    "useQueryString": true
});







//});return csvWriter;}
req.end(function (res) {
    if (res.error) throw new Error(res.error);

    function get_players_names_and_positions() {
        let output = '';
        res.body.data.forEach(data => {
            output += data.first_name.green + ' ' + data.last_name.yellow + ' ' + 'position: ' + data.position.red + '\n';
            API_functions.players_names_and_positions_to_csv(data.first_name,data.last_name,data.position);
        });
        return output;
    }

    get_players_names_and_positions();

    
});






