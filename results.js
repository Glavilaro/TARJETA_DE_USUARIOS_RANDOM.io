async function consultar(){
    let resulta = await fetch('https://randomuser.me/api/?results=500,gender,name,nat')
    .then(response =>response.json())
    .then(data=>data)
    console.log(resulta.results[0].gender)
}

consultar()


function displayPersonas(Personas) {
    let resultContainer = document.getElementById('resultsList')
    resultContainer.innerHTML = ''

    if (Personas.lenght === 0)
        resultContainer.innerHTML = '<p> no se encontraron resultados</p>'
    return
}
