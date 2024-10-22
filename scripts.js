let Nextbtn = document.getElementById("Nextbutton")
let Authorname = document.getElementById("Author")
let Quotetext = document.getElementById("Quote")


quote1 = {
    Quote:"Be yourself everybody else is taken",
    Author:"Oscar Wilde"
}

quote2 = {
    Quote:"The higher the rarity the more damage it does",
    Author:"Jonsey Fortnite"
}


quote3 = {
    Quote:"Lead never follow",
    Author:"Chief Keef"
}


Quotetext.innerText = "";

Authorname.innerText = "";

let selection = [quote3,quote2,quote1];




Nextbtn.addEventListener('click', function(){
    var item = selection[Math.floor(Math.random()*selection.length)];
    Authorname.innerText = item["Author"]
    Quotetext.innerText = item["Quote"]

})


