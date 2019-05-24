const fs = require('fs')

console.log(__dirname)

for(var i=0;i<5;i++){
    if(!fs.existsSync('./monDossier-'+i)){
        fs.mkdirSync('./monDossier-'+i)
        console.log("Dossier monDossier-"+i+" a été crée")
    }else{
        console.log("Le dossier monDossier-"+i+" existe déjà")
    }
}

