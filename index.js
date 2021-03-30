const nomePetshop = "PETSHOP JS";
const moment = require('moment');
const fs = require('fs');
let bancoDados = fs.readFileSync('./bancoDados.json')

bancoDados = JSON.parse(bancoDados);

const atualizarBanco = () => {
    let petsAtualizado = JSON.stringify(bancoDados, null, 2);
    fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
}

 const listarPets = () => {
     for(let i = 0; i < bancoDados.pets.length; i++){
         console.log(`O nome do pet é ${bancoDados.pets[i].nome} e ele ${bancoDados.pets[i].vacinado ? "foi vacinado" : "não foi vacinado"}`);
     }
 }
//listarPets();;

const vacinarPet = pet => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        atualizarBanco();
        console.log(`${pet.nome} foi vacinado com sucesso!`);
    } else {
        console.log(`Ops, ${pet.nome} já está vacinado!`);
    }
}
//vacinarPet(bancoDados.pets[1]);

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

const atenderCliente = (pet, servicos) => {
    console.log(`Olá, ${pet.nome}!`); 
    servicos(pet);
    console.log(`Tchau. Até mais!`)
}
//atenderCliente(bancoDados.pets[1], apararUnhasPet);

const campanhaVacina = () => {
    console.log("Campanha de vacina 2021");
    console.log("vacinando...");

    let petVacinados = 0;

    bancoDados.pets = bancoDados.pets.map((pet) => {
        if (!pet.vacinado) {
            vacinarPet(pet);
            petVacinados++;
        }

        return pet;
    });

    // atualizarBanco();
    console.log(`${petVacinados} pets foram vacinados nessa campanha!`);
};
//campanhaVacina();

const buscarPet = (nomePet) => {

    let petEncontrado = bancoDados.pets.find((pet) => {
        return pet.nome == nomePet;
    });

    return petEncontrado ? petEncontrado : `Nenhum pet encontrado com nome ${nomePet}`;
}
//buscarPet();

const filtrarTipoPet = (tipoPet) => {
    let petsEncontrados = bancoDados.pets.filter((pet) => {
        return pet.tipo == tipoPet;
    });

    return petsEncontrados;
}
//filtrarTipoPet();

const clientePremium = (pet) => {
    let nServicos = pet.servicos.length;

    if (nServicos > 5) {
        console.log(`Olá, ${pet.nome}! Você é um cliente especial e ganhou um descontão!`);
    } else {
        console.log(`Olá, ${pet.nome}! Você ainda não tem descontos disponiveis!`);
    }
}
//console.log(clientePremium(bancoDados.pets[2]));

const contatoTutor = (pet) => {
    let {nome, tutor, contato} = pet;
    
    return `Tutor: ${tutor}
    Contato: ${contato}
    Pet: ${nome}`;
}
//contatoTurtor();

const filtrarTutor = (nomeTutor) => {
    let petsTutor = bancoDados.pets.filter((pet) => {
        return pet.tutor == nomeTutor;
    });
    
    console.log(`Pets do tutor ${nomeTutor}:`)
    petsTutor.forEach((pet) => {
        console.log(`${pet.nome} - ${pet.tipo}`)
    })
}
//filtrarTutor('Steve');

const adicionarPet2 = (...novosPets) => {
    novosPets.forEach((novoPet) => {
        bancoDados.pets.push(novoPet);
    })

    atualizarBanco();
    novosPets.forEach((pet) => {
        console.log(`${pet.nome} foi adicionado com sucesso!`);
    })
}
//adicionarPet2({
//     "nome": "Floquinho",
//     "tipo": "cachorro",
//     "idade": 3,
//     "raca": "Lhasa Apso",
//     "peso": 19,
//     "tutor": "Cebolinha",
//     "servicos": []
//});