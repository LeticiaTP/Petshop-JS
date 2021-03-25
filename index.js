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

const listarPets = () => {
    for(let i = 0; i < pets.length; i++){
        console.log(pets[i].nome);
    }
}

listarPets();