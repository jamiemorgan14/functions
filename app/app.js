console.log('start');

let me = {
  name: 'Jamie',
  surname: 'Mr.'
}

let mark = {
  name: 'Mark',
  surname: 'Mr.'
}

let jake = {
  name: 'Jake',
  surname: ''
}

let users = [me, mark, jake]

// function greet() {
//   console.log('Hello, world')
// };

// let greet2 = greet;

// greet();
// greet2();

// let greetings = () => {
//   console.log('good morning, world!')
// }

// greetings();


function formalGreeting(user) {
  if (user.surname) {
    return 'Greetings,' + user.surname + '' + user.name;
  } else {
    return 'Hey,' + '' + user.name;
  }
}

// formalGreeting(mark);
// formalGreeting(me);
// formalGreeting(jake)

// function greetAll(arr) {
//   arr.forEach(a => {
//     formalGreeting(a);
//   });
// }

// greetAll(users)


function greetAllFancyUsers(arr) {
  let greetings = [];
  let users = arr.filter(a => {
    return a.surname.length > 0;
  })
  users.forEach(a => {
    let greeting = formalGreeting(a);
    greetings.push(greeting)
  })
}

let fancyUsersGreetings = greetAllFancyUsers(users);





console.log('finish');