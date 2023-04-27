console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Kenneth",
    hometown: "HARLEM 🌎 & The BX 🙅🏾‍♂️",
    favoriteColors: ["Purple", "Blue"]
}


function introduceMe (personObj){
    // print out: "Hi, my name is {your name}, and I'm from {your hometown}"
return `Hi, my name is ${meObj.name}, and I'm from ${meObj.hometown}! \nMy favorite colors are ${meObj.favoriteColors[0]} & ${meObj.favoriteColors[1]}.`
    // print out: "My favorite colors are {your favorite colors}"
}
console.log(introduceMe(meObj));