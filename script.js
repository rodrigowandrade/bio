function toggleMode () {
    const html = document.documentElement

    if(body.classList.contains('light')) {
        html.classList.remove('light')
    } 
        html.classList.add('light')
    }

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar.png")
    }
    else {

        img.setAttribute("src", ".assets/avatarlight.jpg")
}
