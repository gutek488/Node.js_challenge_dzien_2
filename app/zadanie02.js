const fs = require('fs');

fs.readdir('./data/zadanie02/', (err, data) => {
    if (err === null) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let file = data[i];
            fs.readFile(`./data/zadanie02/${file}`, (err, data) => {
                if (err === null) {
                    console.log("Zawartość pliku to:", data)
                } else {
                    console.log('Błąd podczas odczytu pliku!', err);
                }
            });
        }


    } else {
        console.log('Błąd podczas odczytu directory!', err);
    }
});


