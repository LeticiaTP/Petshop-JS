const nomePetshop = "PETSHOP JS";
const moment = require('moment');
const fs = require('fs');
let bancoDados = fs.readFileSync('./bancoDados.json')

bancoDados = JSON.parse(bancoDados);
JSON.stringify(bancoDados, null, 2);

const atualizarBanco = () => {
    let petsAtualizado = JSON.stringify(bancoDados);

    fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
}

 const listarPets = () => {
     for(let i = 0; i < bancoDados.pets.length; i++){
         //console.log(pets[i].nome + " " + pets[i].raca);
         console.log(`O nome do pet é ${bancoDados.pets[i].nome} e ele ${bancoDados.pets[i].vacinado ? "foi vacinado" : "não foi vacinado"}`);
     }
 }

//listarPets();

// VACINARPET COM I++
const vacinarPet1 = () => {
    for (let i = 0; i < bancoDados.pets.length; i++){
        if (bancoDados.pets[i].vacinado == false){
            bancoDados.pets[i].vacinado = true;
        console.log(`${bancoDados.pets[i].nome} foi vacinado com sucesso!`)
        } else {
            console.log ((`Ops, ${bancoDados.pets[i].nome} já está vacinado!`))
        } 
    }
}

 //vacinarPet1();

//VACINAR PET COM LET PET OF PETS
const vacinarPet2 = () => {
    for (let pet of bancoDados.pets){
        if (pet.vacinado == false){
            pet.vacinado = true;
            console.log(`O pet ${pet.nome} foi vacinado.`);
        } else {
            console.log(`O pet ${pet.nome} já era vacinado.`);
        }
    }
}

//vacinarPet2();

const campanhaVacina = () => {
    let i = 0;
    for (let pet of bancoDados.pets){
        if (pet.vacinado == false){
            pet.vacinado = true;
            i++
        } 
    }
    console.log(`${i} pets foram vacinados nessa campanha!`);
}

//campanhaVacina();

const vacinarPet3 = (pet) => {
    if (pet.vacinado == false){
    pet.vacinado = true;
    console.log(`${pet.nome} foi vacinado com sucesso!`)
    } else {
        console.log ((`Ops, ${pet.nome} já está vacinado!`))
    } 
}

//vacinarPet3(bancoDados.pets[1]);

const adicionarPet = novoPet => {
    bancoDados.pets.push(novoPet);
    atualizarBanco();
    console.log(`${novoPet.nome} foi adicionado com sucesso!`);
}

// adicionarPet({
//     "nome": "Alfredo",
//     "tipo": "cachorro",
//     "idade": 2,
//     "raca": "rusky siberiano",
//     "peso": 10,
//     "tutor": "Steve",
//     "servicos": []
// });

// listar pets com LET PET OF PETS
const listarPets2 = () => {
    for (let pet of bancoDados.pets){
        console.log(`${pet.nome}, ${pet.tutor}, ${pet.tipo}, ${pet.raca}`);
    }
}

//listarPets2();

const darBanho = (pet) => {
    pet.servicos.push('banho');
    console.log(`${pet.nome} tomou banho!`)
}

//darBanho(bancoDados.pets[1]);

const tosarPet = (pet) => {
    pet.servicos.push('tosa');
    console.log(`${pet.nome} está com cabelinho na régua!`)
}

//tosarPet(bancoDados.pets[0]);

const apararUnhasPet = (pet) => {
    pet.servicos.push('corte de unhas');
    console.log(`${pet.nome} está de unhas aparadas!`)
}

//apararUnhasPet(bancoDados.pets[2]);

//apararUnhasPet com data
const apararUnhasPet2 = (pet) => {
    const now = new Date();

    let servico = { 
        tipoServ: 'corte de unhas',
        data: `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
    };
    
    pet.servicos.push(servico);
   
    console.log(`\n${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} : ${pet.nome} está de unhas aparadas!`);   
    console.log(pet.servicos);
}

// apararUnhasPet2(bancoDados.pets[1]);

const atenderCliente = (pet, servicos) => {
    console.log(`Olá, ${pet.nome}!`); 
    servicos(pet);
    console.log(`Tchau. Até mais!`)
}
//atenderCliente(bancoDados.pets[1], apararUnhasPet);

const adicionarPet2 = novoPet => {
    bancoDados.pets.push(novoPet);
    atualizarBanco();
    console.log(`${novoPet.nome} foi adicionado com sucesso!`);
}

//adicionarPet2();

const campanhaVacina2021 = () => {
    console.log("Campanha de vacina 2021");
    console.log("vacinando...");

    let petVacinadosCampanha = 0;

    bancoDados.pets = bancoDados.pets.map((pet) => {
        if (!pet.vacinado) {
            vacinarPet2(pet);
            petVacinadosCampanha++;
        }

        return pet;
    });

    // atualizarBanco();
    console.log(`${petVacinadosCampanha} pets foram vacinados nessa campanha!`);
};

//campanhaVacina2021();

const buscarPet = (nomePet) => {

    let petEncontrado = bancoDados.pets.find((pet) => {
        return pet.nome == nomePet;
    });

    return petEncontrado ? petEncontrado : `Nenhum pet encontrado com nome ${nomePet}`;
}

//buscarPet();

const filtrarTipoPet = (tipoPet) => {
    // && E - AND
    // || OU - OR
    // == verifica valores iguais
    // === verifica valores e tipos iguais
    let petsEncontrados = bancoDados.pets.filter((pet) => {
        return pet.tipo == tipoPet;
    });

    return petsEncontrados;
}

//filtrarTipoPet();
