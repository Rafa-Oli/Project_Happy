const Database= require('./db')

Database.then(async db => {
//inserir dados na tabela
await db.run(`
INSERT INTO orphanages(
    lat,
    lng,
    name,
    about,
    whatsapp,
    images,
    instructions,
    opening_hours,
    open_on_weekends
)VALUES(
    "-7.2290248",
    "-35.902706",
    "Lar das meninas",
    "sfsdfgsgf",
    "514544151",
    "https://images.unsplash.com/photo-1602571833724-984f81111ce1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    "sjfsajfjdfnsdngvjsodg",
    "dsfsdgd",
    "1"
); 
`)


//consultar dados da tabela
const selectedOrphanage= await db.all("SELECT * FROM orphanages")
console.log(selectedOrphanage)


//consultar somente 1 orphanato, pel id
const orphanage= await db.all("SELECT * FROM orphanages where id = '1' " )
console.log(orphanage)
})