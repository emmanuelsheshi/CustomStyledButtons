
function RenderToElement(where,what){

    let location = document.querySelector(`${where}`)

    location.append(what)


 }

 let contId = Math.random()

 function RenderToClass(where,what){

    let location = document.querySelector(`.${where}`)
    let container = document.createElement('div')

    container.className = "btn " + contId

    container.append(what)

    location.append(container)



}


function RenderToId(where,what){

    let location = document.querySelector(`#${where}`)
    let container = document.createElement('div')

    container.className = "btn " + contId

    container.append(what)

    location.append(container)



}


export {RenderToElement, RenderToClass, RenderToId}
