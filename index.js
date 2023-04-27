console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Oscar",
    hometown: "Brentwood, NY",
    favoriteColors: ["red", "blue", "russian violet"]
}


function introduceMe (personObj){
    console.log(`Hi, my name is ${meObj.name}, and I'm from ${meObj.hometown}.`)

    console.log(`My favorite colors are ${meObj.favoriteColors}.`)
}
introduceMe(meObj)