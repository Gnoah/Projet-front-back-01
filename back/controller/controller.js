const express = require('express');
const app = express();
const fs = require('fs');
let data = fs.readFileSync('model/note.json', 'utf8')
let obj = JSON.parse(data)


//GET
const afficher = (request, response)  =>{
    try {         
     //       for (let i = 0; i < obj.length; i++) {
     //           app.get(obj[i].image, function (request, response) {
     //               try {
     //                    var img = '.' + obj[i].image
     //                    var pic = fs.readFileSync(img)
     //                    console.log(pic)
     //                    response.write(pic)
     //                    response.end()
     //               } catch (e) {
     //                    console.log(e.stack);
     //               }
     //          })
     //     }
         response.write(data)

         
         response.end()
    } catch (ev) {
         console.log(ev.stack)
    }
}

//UPDATE
const modifier = (request, response)  =>{
    var name = request.body.nom;
    var pren = request.body.prenom;
    //var pic = request.body.image;
    var num = request.body.id;
    for (let i=0; i<obj.length; i++){
         if(obj[i].id=== num){ 
              if (name){
                   obj[i].nom=name;
              }
              if (pren){
                   obj[i].prenom=pren;
              }
          //     if (pic){
          //          obj[i].image=pic;
          //     }                   
         }
    }
         
     let data = JSON.stringify(obj); 
     console.log('DATA: ',data) 
     fs.writeFileSync('model/note.json', data); 
     response.send(obj);
     response.end()
}


//POST
const ajouter = (request, response) => {
    var name = request.body.nom;
    var pren = request.body.prenom;
    //var pic = request.body.image;
    //var num = request.body.id;
    obj.push({id:(parseInt(obj[obj.length-1].id)+1).toString(),nom:name,prenom:pren})
     let data = JSON.stringify(obj); 
     fs.writeFileSync('model/note.json', data); 
     response.send(obj);
     response.end()
}

//DELETE
const effacer = (request, response) => {
     var num = request.body.id;
     for (let i=0; i<obj.length; i++){
          if(obj[i].id=== num){ 
               obj.splice(i,1);                 
          }
     }
          
      let data = JSON.stringify(obj); 
      console.log('DATA: ',data) 
      fs.writeFileSync('model/note.json', data); 
      response.send(obj);
      response.end()
}

//AffichageTest
exports.affichetest = (request, response)  =>{
     let data = fs.readFileSync('model/test.json', 'utf8')
     response.write(data)
     response.end()
}

module.exports.afficher = afficher; 
module.exports.modifier = modifier; 
module.exports.effacer = effacer; 
module.exports.ajouter= ajouter; 