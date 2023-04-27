console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Tyrell",
    hometown: "Brookln",
    favoriteColors: ["green", "purple"]
}


function introduceMe (personObj){
    console.log(`Hi, my name is ${personObj.name}, and I'm from ${personObj.hometown}`)
    // print out: "Hi, my name is {your name}, and I'm from {your hometown}"

    console.log(`My favorite colors are ${personObj.favoriteColors[0]} and ${personObj.favoriteColors[1]} `)
    // print out: "My favorite colors are {your favorite colors}"
}

introduceMe(meObj);

