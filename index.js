console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Natyka",
    hometown: "The Virgin Islands to The Boogie-Down - BX 🙅🏾‍♂️,STAND UP",
    favoriteColors: ["red", "yellow", "purple", "pink"]
}


function introduceMe (personObj){
    // print out: "Hi, my name is {your name}, and I'm from {your hometown}"
console.log(`Hi, my name is ${personObj.name}, and I'm from ${personObj.hometown}.`)

    // print out: "My favorite colors are {your favorite colors}"
console.log(`My favorite colors are ${personObj.favoriteColors}.`)
}

introduceMe(meObj)
