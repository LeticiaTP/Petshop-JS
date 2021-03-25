const nomePetshop = "PETSHOP JS";
let pets = [{
    nome: 'Tofu',
    tipo: 'gato',
    idade: 1,
    raca: 'ragdoll',
    peso: 2,
    tutor: 'Kauã',
    vacinado: true,
    servicos: ['banho', 'tosa']
},
{
    nome: 'Iggy',
    tipo: 'cachorro',
    idade: 3,
    raca: 'Boston-terrier',
    peso: 5,
    tutor: 'Jean Pierre Polnareff',
    vacinado: false,
    servicos: ['medicação', 'vacinação']
},
{
    nome: 'Danny',
    tipo: 'cachorro',
    idade: 2,
    raca: 'Harlequin Great Dane',
    peso: 8,
    tutor: 'Jonathan Joestar',
    vacinado: true,
    servicos: ['banho', 'exames']
}]

/*const listarPets = () => {
    for(let i = 0; i < pets.length; i++){
        //console.log(pets[i].nome + " " + pets[i].raca);
        console.log(`O nome do pet é ${pets[i].nome}`);
    }
}*/

/*const listarPets = () => {
    for (let pet of pets){
        //template string
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}

listarPets();*/

const vacinarPet = () => {
    for (let i = 0; i < pets.length; i++){
        if (pets[i].vacinado == false){
        pets[i].vacinado = true;
        console.log(`O pet ${pets[i].nome} foi vacinado.`)
        } else {
            console.log ((`O pet ${pets[i].nome} já era vacinado.`))
        } 
    }
}

vacinarPet();