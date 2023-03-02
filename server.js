const express = require('express');
const app = express();
const pathh = require('path');
const axios = require('axios');
let ejs = require('ejs');


app.set('views', pathh.join(__dirname , 'views'));
app.set('views engine', 'ejs');


app.listen(3000,()=>{
    console.log("start");
    console.log("http://localhost:3000");
})

async function firstPoc() {
  const config = {
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon/pikachu",
  };

  let res = await axios(config);
  app.get('/' , (req,res) => {
    res.render('index',{
       poc : [
          {name : 'res.data.name'},
          {order : 'res.data.order'}
       ]
    })
})


  console.log("The first poc");
  console.log(`Pokemon Name: ${res.data.name}`);
  console.log(`Pokemon Order: ${res.data.order}`);
}

async function secondPoc() {
    const config2 = {
      method: "get", 
      url: "https://pokeapi.co/api/v2/item/251/", 
    };
  
    let res2 = await axios(config2);
  
    console.log("The second poc");
    console.log(`Pokemon Name: ${res2.data.name}`);
    console.log(`Pokemon Order: ${res2.data.order}`);


}
async function thirdPoc() {
    const config3 = {
      method: "get", 
      url: "https://pokeapi.co/api/v2/pokemon-form/132/", // API link
    };
  
    let res3 = await axios(config3);
  
    console.log("The third poc");
    console.log(`Pokemon Name: ${res3.data.name}`);
    console.log(`Pokemon Order: ${res3.data.order}`);
}
firstPoc();
secondPoc();
thirdPoc();




