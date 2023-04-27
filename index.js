console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Kenia",
    hometown: "New York City",
    favoriteColors: ["gold", "yellow", ]
}

function introduceMe (personObj){
    let name = personObj.name
    let home = personObj.hometown
    let colors = personObj.favoriteColors
    
    console.log(`Hi, my name is ${name}, and I'm from ${home}`)

console.log(`My favorite colors are ${colors}`)
}
introduceMe(meObj)