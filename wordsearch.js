//////////Jaxson Baerg & Ning Li//////////
const wordSearch = (letters, word) => {
    if (letters.length === 0) return false;

    const horizontalJoin = letters.map(ls => ls.join(""));
    for (l of horizontalJoin) {
        if (l.includes(word) || l.split("").reverse().join("").includes(word)) return true;
    }

    const verticalJoin = transpose(letters).map(ls => ls.join(""));
    for (l of verticalJoin) {
        if (l.includes(word) || l.split("").reverse().join("").includes(word)) return true;
    }
    
    let foundWordDown = [];
    let foundWordUp = [];
    let foundWordDownBack = [];
    let foundWordUpBack = [];
    for (let i = 0; i < letters.length; i++) { // Rows
        for (let x = 0; x < letters[i].length; x++) { // Letters in row

            for (let j = 0; j < word.length; j++) { // Length of inputted word down
                try {
                  foundWordDown.push(letters[i + j][x + j]);
                } catch(err) {
                  break;
                }
            }
            for (let j = 0; j < word.length; j++) { // Length of inputted word up
                try {
                  foundWordUp.push(letters[i - j][x + j]);
                } catch(err) {
                  break;
                }
            }
            for (let j = 0; j < word.length; j++) { // Length of inputted word down backwards
                try {
                  foundWordDownBack.push(letters[i - j][x - j]);
                } catch(err) {
                  break;
                }
            }
            for (let j = 0; j < word.length; j++) { // Length of inputted word up backwards
                try {
                  foundWordUpBack.push(letters[i + j][x - j]);
                } catch(err) {
                  break;
                }
            }

            if (foundWordDown.join("").includes(word)) return true;
            foundWordDown = [];
            if (foundWordUp.join("").includes(word)) return true;
            foundWordUp = [];
            if (foundWordDownBack.join("").includes(word)) return true;
            foundWordDownBack = [];
            if (foundWordUpBack.join("").includes(word)) return true;
            foundWordUpBack = [];
        }
    }

    return false;
};

const transpose = function (grid) {
    let newRows = [];
    const numRows = grid.length//row
    const numColumns = grid[0].length//column
  
      for (let c = 0; c < numColumns; c++) {
        let newRow = []
        for (let r = 0; r < numRows; r++) {
          const swapped = grid[r][c]
          newRow.push(swapped)
        }
      newRows.push(newRow) 
      }
  return newRows
  };

module.exports = wordSearch;