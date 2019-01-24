//process.argv
const fs = require('fs');

//ODCZYT PLIKU
//     KIEDY SKOŃCZY - CALLBACK:
//     ZMIANA TEKSTU WEDŁUG WZORU
//     ZAPIS TAKIEGO SAMEGO PLIKU
//         KIERY SKOŃCZY - CALLBACK:
//         INFORMACJA O POWODZENIU LUB BŁĘDZIE


fs.readFile(`./data/zadanieDnia/${process.argv[2]}`,"utf8", (err,data) => {
    if (err === null) {
        let newArr = data.split("");
        for (let i = 0; i < data.length; i++) {
            if (i%2 ===0) {
                newArr[i] = newArr[i].toUpperCase();
            } else {
                newArr[i] = newArr[i].toLowerCase();
            }
        }
        fs.writeFile(`./data/zadanieDnia/${process.argv[2]}`, newArr.join(""), err => {
            if (err === null) {
                console.log("Zapis zakończony powodzeniem")
            } else {
                console.log("Błąd przy zapisie pliku:", err)
            }
        })

    } else {
        console.log("Błąd przy odczycie pliku", err)
    }



});