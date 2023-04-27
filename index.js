console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Alvin Johnson",
    hometown: "The Boogie-Down - BX 🙅🏾‍♂️",
    favoriteColors: "Haze Grey"
}


function introduceMe (personObj){
    console.log(`Hello my name is ${personObj.name} and I was born and raised in ${personObj.hometown}.`);
    console.log("\r\n");
    console.log(` My favorite color is ${personObj.favoriteColors}.`);
}
introduceMe(meObj)
