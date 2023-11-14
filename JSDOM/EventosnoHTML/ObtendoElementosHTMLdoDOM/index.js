    //No javascript, através da função show() que será executada ao clicar no botão, podemos obter um elemento do DOM através do id:
function show() {
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    //Também podemos obter elementos a partir de um nome de tag:
    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    //E também a partir de uma class:
    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    //E o método mais flexível de todos, através de uma query (semelhante ao que fazemos com o CSS):
    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)

    //Podemos obter uma lista de elementos a partir do atributo name:
    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    //- Além disso, também é possível obter um único elemento através de uma query. O comportamento é igual ao do querySelectorAll(), porém selecionando o primeiro elemento que corresponder à query:
    
    //Obs.: Repare que também podemos acessar propriedade internas do elemento obtido.
    const firstContact = document.querySelector('#contact-list > li > label')
    console.log(firstContact)
}
