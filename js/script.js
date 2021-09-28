//const ul = document.querySelector('ul');
//ul.remove

// рабочий код!!!!
document.querySelector("input")
  input.addEventListener('change', (e) => {
    console.log(e.currentTarget.value);
 });
 
 const options = {
    name: 'And',
    age: '34',
    email: 'ghgh'
    }

for (let key in options) {
if (typeof(options[key])=== 'object') {
for (let i in options[key]){
    console.log(`свойство ${i} имеет значение ${options[key][i]}`);
}
} else { 
console.log(`свойство ${key} имеет значение ${options[key]}`);
}
}
/*let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
}

}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};
 
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько его оцените?',''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько его оцените?','');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

function rememberMyFilms(){
    for (let i = 0; i > 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько его оцените?','');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        else {i--;
        }
        } 
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 ) {
        console.log ('просмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) { 
        console.log ('классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log ('киноман')
            else {
                console.log ('error');
            }
        }
}

detectPersonalLevel();

function showMyDB (hidden) {
if (!hidden) {
    console.log (personalMovieDB);

}
}
 showMyDB(personalMovieDB.privat);

 function writeYourGenres() {
     for (let i =1; i<= 3; i++) {
         const genre = prompt (`Ваш любимый жанр под номером ${i}`);
         personalMovieDB.genres[i-1] = genre;
     }
 }
console.log (personalMovieDB);


*/






/*button.addEventListener('click', () =>{
    const li =document.createElement('li');
    li.textContent = prompt('add something new to do');
    ul.prepend(li);
    var x = document.getElementById("myText");
});
function myFunction() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Hello World!");
    document.body.appendChild(x);

  }

/*const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e =>{
       //console.log(e.target);
        //console.log(item);
       // e.target.style.textDecoration = 'line-through';
       e.target.remove();
       e.stopPropagation();
    })
})
ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }

})*/