
//1 (3 BODA)
//Napisi funkciju koja ispisuje parne brojeve od 0 do 100 (ukljucujuci 100)

/*
for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}


*/
//2 (3 BODA)
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u dan u tjednu. Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Ponedjeljak";
//INPUT: 5; OUTPUT: "Petak"; 
let number = 1;
for (numb of number) {
    switch (numb) {
        case 1:
            if (numb = 1)
                return "Ponedeljak";
        case 2:
            if (numb = 1)
                return "Utorak";
        case 3:
            if (numb = 1)
                return "Srijeda";

        case 4:
            if (numb = 1)
                return "Cetvrtak";
        case 5:
            if (numb = 1)
                return "Petak";
        case 6:
            if (numb = 1)
                return "Subota";
        case 7:
            if (numb = 7)
                return "Nedelja";
    }
}


//3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere ne uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao";
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 35)



//4 (4 BODA)
//Napisi funkciju koja vraca najkraci kljuc u danom objektu
const somePeople = {
    Donald: "Knuth",
    Bjarne: "Stroustrup",
    Ada: "Lovelace",
    Kent: "Beck",
    Martin: "Fowler",
    Erich: "Gamma"
}


//INPUT: somePeople
//OUTPUT: "Ada"

//5 (4 BODA)
//Napisi funkciju u obliku function expressiona koja vraca proste brojeve
//INPUT: [3, 4, 5, 8, 11]
//OUTPUT: [3, 5, 11]
/*
let brojevi = [3, 4, 5, 8, 11];
for (broj of brojevi) {
    if (broj % 2 === 0) {

    }
    else console.log(broj)
}

*/
//ZAMJENA ZA 5 (4 BODA)
//Napisi funkciju u obliku arrow functiona koja kvadrira i vraca dane inpute
//INPUT: [2, 4, 6, 0, 1]
//OUTPUT: [4, 16, 36, 0, 1]

//6 (4 BODA)
//Napisi funkciju koja vraca sve dogadaje koji su se dogodili prije od vrijednosti iz ulaznog parametra
const someEvents = [
    {
        eventName: "Izasla je Java",
        eventYear: 1995,
    },
    {
        eventName: "Izasao je C#",
        eventYear: 2000,
    },
    {
        eventName: "Izasao je Python",
        eventYear: 1991,
    },
    {
        eventName: "Izasao je C++",
        eventYear: 1985,
    },
    {
        eventName: "Izasao je JavaScript",
        eventYear: 1995,
    },
];
//INPUT: (someEvents, 1992)
//OUTPUT: [{eventName: "Izasao je Python", eventYear: 1991}, {eventName: "Izasao je C++", eventYear: 1985}]