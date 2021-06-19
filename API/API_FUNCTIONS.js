const createCsvWriter = require('csv-writer').createObjectCsvWriter;
fs = require('fs');


let content = "name,position\n";

module.exports = {
    players_names_and_positions_to_csv(first_name, last_name, position) {

        const CSVFILE = createCsvWriter({
            path: 'names_and_positions.csv',
            header: [
                { id: 'name', title: 'NAME' },
                { id: 'pos', title: 'POS' }
            ]
        });


        full_name = first_name + ' ' + last_name;
        const data = full_name + ',' + position + '\n';
        
        content += data;
        console.log('\n\n\n\ncontent: \n ' + content);
        CSVFILE.writeRecords(content);
        fs.writeFile('names_and_positions.csv', content, function (err,data) {
            if (err) {
                return console.log(err);
              }
            });

}
    
}
