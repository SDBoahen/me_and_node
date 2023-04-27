console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Alvin Johnson",
    hometown: "Bronx, New York",
    favoriteColors: "Haze Grey",
    favCity: "Roppongi,Japan",
    favNumber: 7
}


function introduceMe (personObj){
    console.log(`Hello my name is ${personObj.name} and I was born and raised in ${personObj.hometown}.`);
    console.log("\r\n");
    console.log(` My favorite number is ${personObj.favNumber} my favorite color is ${personObj.favoriteColors} and my favorite city is ${personObj.favCity}.`);
}
introduceMe(meObj)
