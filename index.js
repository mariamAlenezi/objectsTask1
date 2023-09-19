/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/

let person = {
  name: "mariam",
  age: 25,
  city: "Kuwait",
};

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.emil = "Mariam@hotmail.com";

/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/

function hasKey(object, key) {
  if (object[key]) {
    console.log(true);
  } else {
    console.log(false);
  }
}
hasKey(person, "name");
// **************************************//
const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
console.log("************");
/******************************
	Q4) Create a function that accepts an array of objects called 'movies' 
and iterates through it to log the titles of all the movies.
********************************/

function printTitles(movies) {
  console.log(movies.title);
}
movies.forEach(printTitles);
console.log("************");

/******************************
	Q5) Create a function that accepts an array of objects called 'movies' 
and iterates through it to count how many movies were released in the year 1994.
********************************/

function countMovies(movies) {}

/******************************
	Q6) Write a function that updates the genre of the movie "The Dark Knight"
 to "Action/Drama" and returns the modified array of movies.
********************************/

function updateGenre(x) {
  if (x.title === "The Dark Knight") {
    x.genre = "Action/Drama";
  }
  return x;
}

const updatedGenre = movies.map(updateGenre);
console.log(updatedGenre);
