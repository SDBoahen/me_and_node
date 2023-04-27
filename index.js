//console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌");



const meObj = {
    name: "Shaka",
    hometown: "Brooklyn, Ny 🙅🏾‍♂️",
    favoriteColors: ["purple", "blue", "red", "orange"]
};



function introduceMe (personObj){
    // print out: "Hi, my name is {your name}, and I'm from {your hometown}"
    console.log("Hi, my name is"+" "+meObj.name+","+" "+"and I'm from"+" "+meObj.hometown);

    // print out: "My favorite colors are {your favorite colors}"
     console.log("My favorite colors are"+" "+ meObj.favoriteColors+".");
  }
  
 introduceMe(meObj)

