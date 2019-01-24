const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', (err, data) => {
    if (err === null){
        let arr = JSON.parse(data);
        fs.writeFile('./data/zadanie01/sum.txt', arr.reduce((a,b)=>a+b) , err => {
            if (err === null){
                console.log('Zapisano poprawnie!');
            } else {
                console.log('Błąd podczas zapisu pliku!', err);
            }
        });
    } else {
        console.log('Błąd podczas odczytu pliku!', err);
    }
});