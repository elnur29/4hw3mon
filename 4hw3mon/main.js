

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
  
//   let userWithId2 = users.find(user => user.id === 2);
//   console.log(userWithId2);

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  let filteredUsers = users.filter(user => user.id > 1);
  
  console.log(filteredUsers);