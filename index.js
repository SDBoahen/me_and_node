console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Daryna",
    hometown: "Dnipro, Ukraine🇺🇦",
    favoriteColors: ["blue", "green", "peach", "red"]
}


function introduceMe (personObj){
    console.log(`Hi, my name is ${personObj.name}, and I'm from ${personObj.hometown}`);
    console.log(`My favorite colors are ${personObj.favoriteColors}`)
 }
 introduceMe(meObj)