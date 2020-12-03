//task1

var person =
{
  name: "Michał",
  surname: "Smoleński",
  id: "17885",
  address: {
    street: "Ulica",
    house_nr: 42,
    city: "Gdynia",
    position: {
      verticalPartOfWorld: "North",
      horizontalPartOfWorld: "East",
      latitude: 54,
      longitude: 19
    }
  }
}

function loadPerson(object, callback) {

  console.log(callback(object));
}

function addPersonNumber(person) {
  return person.address.house_nr + person.address.position.latitude;
}

function addPersonString(person) {
  return person.address.position.verticalPartOfWorld + person.address.city;
}

loadPerson(person, addPersonNumber);
loadPerson(person, addPersonString);


//task 2 & 5

const url1 = "https://jsonplaceholder.typicode.com/users/10";
const url2 = "https://jsonplaceholder.typicode.com/users/9"

let promise1 = fetch(url1)
  .then(response => response.json())

let promise2 = fetch(url2)
  .then(response => response.json())

let promiseAll = Promise.all([promise1, promise2])

promiseAll.then(jsonValues => {
  logResults(jsonValues)
})
  .catch(error => console.error(error))
  .finally(() => console.log("finally"));

function addNumbers(a, b) {
  return a + b;
}

function merge(obj1, obj2) {
  return {
    obj1: obj1,
    obj2: obj2
  }
}


//Task 3 async/await + fetch (lub axios)

async function asyncMethod() {
  let jsonValues = await promiseAll;
  logResults(jsonValues);
}

function logResults(jsonValues) {
  console.log(addNumbers(jsonValues[0].id, jsonValues[1].id));
  console.log(merge(jsonValues[0], jsonValues[1]));
}

asyncMethod();


//Task 4 Zapytania AJAX

function get(url) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.responseType = "json";
    req.open('GET', url);
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function () {
      reject(Error("Network Error"));
    };
    req.send();
  });
}

Promise.all([get(url1), get(url2)])
  .then(jsonValues => logResults(jsonValues));


// Task 6 bibliotexa axios"

function getByAxios(url) {
  return new Promise(function (resolve, reject) {
    axios.get(url)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      })
      .then(function () {

      });
  });
}

Promise.all([getByAxios(url1), getByAxios(url2)])
  .then(jsonValues => logResults(jsonValues));