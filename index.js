//console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Xavier",
    hometown: "Roeland Park, Kansas - KC 👠",
    favoriteColors: ["Purple", " Gold", " forest green", " hot pink"]
}


function introduceMe (personObj){
   console.log(`Hi, my name is ${personObj.name}, and I'm from ${personObj.hometown}`)

   console.log(`My favorite colors are ${personObj.favoriteColors}`)
}

console.log(introduceMe(meObj))