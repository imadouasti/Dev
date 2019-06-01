const fs = require('fs')

console.log(__dirname)
var i=0
const creerDossier = ()=>{
    
    if(!fs.existsSync('./monDossier-'+i)){
        fs.mkdirSync('./monDossier-'+i)
        console.log("Dossier monDossier-"+i+" a été crée")
    }else{
        console.log("Le dossier monDossier-"+i+" existe déjà")
    }
    i++
    creerDossier(i)
} 

creerDossier()