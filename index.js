console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")


const meObj = {
    name: "Marcia",
    hometown: "Brooklyn",
    favoriteColors: ["navy blue", "orange"]
}


function introduceMe (personObj){
    console.log(`Hi, my name is ${personObj.name}, and I'm from ${personObj.hometown}.`)
    console.log(`My favorite colors are ${personObj.favoriteColors}.`)
}
console.log(introduceMe(meObj))