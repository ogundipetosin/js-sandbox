//assignment1
/*var user={
  username: "Tosin",
  password: "1234",
  status: "active"
}
console.log(user);*/



//assignment2
/*var database=[
  {
      username: "Tosin",
      password: "1234",
      status: "active"  
  }
];
console.log(database);*/



//assignment3
/*var database=[
  {
      username: "Tosin",
      password: "1234",
      status: "active"  
  }
];
var userName=prompt("Enter your Username");
var passWord=prompt("Enter your password");
var statuss=prompt("Enter your Status");
database[0].username=userName;
database[0].password=passWord;
database[0].status=statuss;
console.log(database);*/

//assignmnet4
/*var database=[
  {
      username: "Tosin",
      password: "1234",
      status: "active"  
  }
];
/*function signIn(){
  var userName1=prompt("Enter your username")
  var passWord1=prompt("Enter your password")
  if(userName1 === (database[0].username) && passWord1===(database[0].password));
  {
      console.log(userName1,passWord1);    
  }
  else {
      alert(sorry,wrong username and password);
  };
}
console.log(signIn());*/




//asignment5
var database=[
    {
        username: "Tosin",
        password: "1234",
        status: "active"  
    }
  ];
  var dbase=5;
  //for(var i=0; i>dbase; i++){
      var userName=prompt("Enter your Username");
      var passWord=prompt("Enter your password");
      var statuss=prompt("Enter your Status");
      do {database[0].username=userName;
      database[0].password=passWord;
      database[0].status=statuss;
      
      }
      while(dbase<0)
      dbase--;
      console.log(database,dbase);