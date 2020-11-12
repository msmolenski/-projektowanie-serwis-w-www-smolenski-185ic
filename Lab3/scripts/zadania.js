//Zadanie 1
function countStringChars(text) {
    return `Liczba liter: ${text.length}`;
}
console.info(countStringChars("Dowolny tekst"));

//Zadanie 2
const numbers = [2, 4];
function sum(numbers) {
    console.info(numbers.reduce((a, b) => a + b, 0));
}
sum(numbers);

//Zadanie 3
function mix(text) {
    let mixResult = '';
    for (let i = 0; i < text.length; i++) {
        if (i % 2 == 0) {
            mixResult += text[i].toUpperCase();
        } else {
            mixResult += text[i].toLowerCase();
        }
    }
    return mixResult;
}
console.info(mix("Dowolny tekst"));

//Zadanie 4
function multiple(a, b) {
    if (typeof (a) !== 'number' || typeof (b) !== 'number') {
        return false;
    }
    return a * b;
}
console.info(multiple(1, 2));
console.info(multiple("jeden", 2));

//Zadanie 5
const activities = [
    {
        months: ["grudzien", "styczen", "luty"],
        resultText: " jezdzi na sankach"
    },
    {
        months: ["marzec", "kwiecien", "maj"],
        resultText: " chodzi po kaluzach"
    },
    {
        months: ["czerwiec", "lipiec", "sierpien"],
        resultText: " sie opala"
    },
    {
        months: ["wrzesien", "pazdziernik", "listopad"],
        resultText: " zbiera liscie"
    }
];

function checkActivity(name, month) {
    var caseInSensitiveMonth = month.toLowerCase();
    let resultText = '';
    activities.forEach(cos => {
        if (cos.months.includes(caseInSensitiveMonth)) {
            resultText += name + cos.resultText;
        }
    });
    if (!resultText)
        resultText = `${name} uczy się JS`;
    return resultText;
}
console.info(checkActivity("Michał", "listopad"));
console.info(checkActivity("Michał", "czwartek"));

//Zadanie 6
function sort(text) {
    splittedText = text.split('|');
    return splittedText.sort().join('|');
}
console.info(sort("Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka"));

//Zadanie 7
function namesToUpper(names) {
    return names.map(name => name.toUpperCase());
}
function namesMixCase(names) {
    mixCaseNames = [];
    for (let i = 0; i < names.length; i++) {
        mixCaseNames.push(mix(names[i]));
    }
    return mixCaseNames;
}
console.info(namesToUpper(["Ania" , "Marcin" , "Bartek" , "Piotr"]));
console.info(namesMixCase(["Ania" , "Marcin" , "Bartek" , "Piotr"]));

//Zadanie 8
function checkFemale(name) {
    return name[name.length-1] === 'a';
}
console.info(checkFemale("ania"));
console.info(checkFemale("marcin"));

//Zadanie 9
const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka"
]
function countWomanInTable(users){
    let count = 0;
    users.forEach(user => {
        const userNames = user.split(' ');
        if(checkFemale(userNames[0])){
            count++;
        }
    })
    return count;
}
console.info(countWomanInTable(users));