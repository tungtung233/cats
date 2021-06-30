const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

    if (error) callback(data)
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) callback(data);

  });

  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

const bombay = (data) => {
  console.log(data)
}


// we try to get the return value
// const bombay = breedDetailsFromFile('Bombay', logging);

module.exports = breedDetailsFromFile
