
function contactBox(){
    const containerBox = document.createElement("div")
    containerBox.id = "containerBox"
    
    const mainBox = document.createElement("div")
    mainBox.id = "mainBox"
    
    const cancel = document.createElement("button")
    cancel.id = "cancel"
    cancel.onclick = () => removeContactBox(containerBox)
    cancel.textContent = "X"

    mainBox.appendChild(cancel)
    containerBox.appendChild(mainBox)
    document.body.appendChild(containerBox)

    const line1 = document.createElement("h3")
    line1.id = "line1"
    line1.textContent = "Feel free to contact me at: "

    const email = document.createElement("p")
    email.id = "email"
    email.textContent = "jstevenson2024@gmail.com"

    const line2 = document.createElement("h3")
    line2.id = "line1"
    line2.textContent = "Be sure to include:"
    
    const line3 = document.createElement("h3")
    line3.id = "lines"
    line3.textContent = "Your name"

    const line4 = document.createElement("h3")
    line4.id = "lines"
    line4.textContent = "Your organization (if applicable)"

    const line5 = document.createElement("h3")
    line5.id = "lines"
    line5.textContent = "The reason for your email"

    function addRules(){
        const hrs = document.createElement("hr")
        hrs.className = "hrs"
        mainBox.appendChild(hrs)
    }
    

    
    
    //Be sure to include your name, your organization (if applicable), and the reason for you email.\n\nThank you!"
    mainBox.appendChild(line1)
    mainBox.appendChild(email)
    mainBox.appendChild(line2)
    mainBox.appendChild(line3)
    addRules()
    mainBox.appendChild(line4)
    addRules()
    mainBox.appendChild(line5)
    addRules()
}

function removeContactBox(containerBox){
    const items = containerBox.querySelectorAll("*")
    
    for(const i of items){
        i.remove()
    }
    containerBox.remove()
}