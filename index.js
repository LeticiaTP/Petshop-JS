const nomePetshop = "PETSHOP JS";
let pets = [{
    nome: 'Tofu',
    tipo: 'gato',
    idade: 1,
    raca: 'ragdoll',
    peso: 2,
    tutor: 'Kauã',
    vacinado: true,
    servicos: [
        {tipoServ:'banho'}, {dataServ:'10/08/2020'},
        {tipoServ:'exames'}, {dataServ:'10/08/2020'}
    ]
},
{
    nome: 'Iggy',
    tipo: 'cachorro',
    idade: 3,
    raca: 'Boston-terrier',
    peso: 5,
    tutor: 'Jean Pierre Polnareff',
    vacinado: false,
    servicos: [
        {tipoServ:'medicação'}, {dataServ:'15/05/2019'},
        {tipoServ:'vacinação'}, {dataServ:'03/05/2020'}
    ]
},
{
    nome: 'Danny',
    tipo: 'cachorro',
    idade: 2,
    raca: 'Harlequin Great Dane',
    peso: 8,
    tutor: 'Jonathan Joestar',
    vacinado: true,
    servicos: [
        {tipoServ:'banho'}, {dataServ:'08/08/2017'},
        {tipoServ:'tosa'}, {dataServ:'10/09/2020'}
    ]
}]

/* ListarPets
const listarPets = () => {
    for(let i = 0; i < pets.length; i++){
        //console.log(pets[i].nome + " " + pets[i].raca);
        console.log(`O nome do pet é ${pets[i].nome}`);
    }
}*/

/*VACINARPET COM I++
const vacinarPet = () => {
    for (let i = 0; i < pets.length; i++){
        if (pets[i].vacinado == false){
        pets[i].vacinado = true;
        console.log(`${pets[i].nome} foi vacinado com sucesso!`)
        } else {
            console.log ((`Ops, ${pets[i].nome} já está vacinado!`))
        } 
    }
}

vacinarPet();

VACINAR PET COM LET PET OF PETS
const vacinarPet = () => {
    for (let pet of pets){
        if (pet.vacinado == false){
            pet.vacinado = true;
            console.log(`O pet ${pet.nome} foi vacinado.`);
        } else {
            console.log(`O pet ${pet.nome} já era vacinado.`);
        }
    }
}

vacinarPet();*/

const campanhaVacina = () => {
    let i = 0;
    for (let pet of pets){
        if (pet.vacinado == false){
            pet.vacinado = true;
            i++
        } 
    }
    console.log(`${i} pets foram vacinados nessa campanha!`);
}

//campanhaVacina();

const vacinarPet = (pet) => {
    if (pet.vacinado == false){
    pet.vacinado = true;
    console.log(`${pet.nome} foi vacinado com sucesso!`)
    } else {
        console.log ((`Ops, ${pet.nome} já está vacinado!`))
    } 
}

//vacinarPet(pets[1]);

let adicionarPet = () => {
    let pet =
        {
            nome: 'Alfredo',
            tipo: 'cachorro',
            idade: 2,
            raca: 'rusky siberiano',
            peso: 10,
            tutor: 'Steve',
            vacinado: false,
            servicos: ['', '']    
        };

    pets.push(pet);
}

adicionarPet();

const listarPets = () => {
    for (let pet of pets){
        console.log(`${pet.nome}, ${pet.tutor}, ${pet.tipo}, ${pet.raca}`);
    }
}

listarPets();