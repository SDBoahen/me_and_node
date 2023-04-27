console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Anamaria T.",
    hometown: "Born in Providence, RI ; Raised in the Bronx, NY",
    favoriteColors: ["Lavender", "Green", "Black"]
}


function introduceMe (personObj){
    console.log(`Hi, my name is ${personObj.name}, and I was ${personObj.hometown}`)

    console.log(`My favorite colors are ${personObj.favoriteColors}`)
}
console.log (introduceMe(meObj))