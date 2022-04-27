// array is also an object and it has some properties

var  array=['danish',4556,'@gmail.com'];
//  console.log(array[0]);
//  console.log(array[1]);
//  console.log(array[2]);
//  console.log(array[3]);


// array.sort();
// array.fill('don');
// array.values();
// console.log(array);

// window object

window.innerHeight;
window.AbortSignal;
window.AbortController;



// person information
var name;
var email;
var id;
var adress;


// opps
var person={
    name:'danish',
    email:'danish@gmail.com',
    id:432,
    adress:'sikanderabad',
    login(){
        console.log(this.email ,'has logged in');
     
    },

    logout(){
        console.log(this.email,'has logged out');
    }

}

// person.login();
// person.logout();
// console.log(person.email);
// console.log(person.name);
// console.log(person.id);

// if we have more then one persons then we use a constructor then we have to declare more then one objects 
// but we can use construtor to resolve this problem



// accessing properties by using .notation and square brakets
// square brackets access dynamically


// console.log(person.name);
// console.log(person['name']);


var prop='name';
// console.log(person[prop]);   correct

// console.log(prop.name);        wrong 

// creating objects and methods
person.age='45';
// console.log(person);


person['gender']='male';

person.change=function change(){
    console.log('change your id');
}









