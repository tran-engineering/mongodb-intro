const d3 = require('d3');
const fs = require('fs');
const data = fs.readFileSync('IMDB-Movie-Data.csv', 'utf-8');

const parsedData = d3.csvParse(data, row => {

    return d3.autoType(row)
}).map(row => {
    row.genre = row.genre.split(',').map(d => d.trim());
    row.actors = row.actors.split(',').map(d => d.trim());
    delete row.rank;
    return row;
});

fs.writeFileSync('imdb_top250_movies.json', JSON.stringify(parsedData, null, 2));