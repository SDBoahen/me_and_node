//console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Jackie",
    hometown: "Queens",
    favoriteColors: ["Gray", "navy blue", "sea green", "red"]
}


function introduceMe (personObj){
    console.log(`Hi, my name is ${personObj.name}, and I'm from ${personObj.hometown}.`)
    // print out: "Hi, my name is {name}, and I'm from {hometown}"
    console.log(`My favorite colors are ${personObj.favoriteColors}`)
    // print out: "My favorite colors are {your favorite colors}"
}
 introduceMe(meObj) ;