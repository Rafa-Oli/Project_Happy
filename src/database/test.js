const Database= require('./db')
const saveOrphanage= require('./saveOrphanage')
Database.then(async db => {


//inserir dados na tabela
// await saveOrphanage(db,{ 
//     lat: "-7.2290248",
//     lng: "-35.905706",
//     name: "Lar das meninos",
//     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
//     whatsapp: "(47) 9 9293 1142",
//     images:[
// "https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
// "https://images.unsplash.com/photo-1602571833724-984f81111ce1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
//     ].toString(),
//     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
//     opening_hours:"Das 8h até 18h",
//     open_on_weekends:"1"
// })


//consultar dados da tabela
const selectedOrphanage= await db.all("SELECT * FROM orphanages")
console.log(selectedOrphanage)


//consultar somente 1 orphanato, pel id
// const orphanage= await db.all("SELECT * FROM orphanages where id = '3' " )
// const orphanage1= await db.all("SELECT * FROM orphanages where id = '4' " )
// const orphanage1= await db.all("SELECT * FROM orphanages where id = '5' " )
// console.log(orphanage)

//deletar dado da tabela
// console.log(await db.run("DELETE FROM orphanages WHERE id = '2' "))
// console.log(await db.run("DELETE FROM orphanages WHERE id = '1' "))
})