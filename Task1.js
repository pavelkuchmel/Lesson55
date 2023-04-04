function checkForm(event){
    event.preventDefault()
    let nameText = document.getElementById("name").value;
    if(nameText.length > 0) document.getElementById("poll").submit(); //sending form
}

document.getElementById("poll").addEventListener("submit", checkForm)