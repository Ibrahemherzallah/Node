const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log("start");
  console.log("http://localhost:3000");
})

async function pocFun(Pname) {
  const config = {
    method: "get",
    url: `https://pokeapi.co/api/v2/pokemon/${Pname}`,
  };

  let res = await axios(config);

  return res;
}


app.get('/' ,async (req,res) =>{
  let firstP =await pocFun('pikachu');
  let secondP =await pocFun('bulbasaur');
  let thirdP =await pocFun('ditto');
  let fourthP = await pocFun('cosmog');
  let fifthP = await pocFun('swablu');
  let sixthP = await pocFun('jigglypuff');
  let seventhP = await pocFun('charmander');
  let eightthP = await pocFun('sylveon');
  let ninthP = await pocFun('jynx');


  res.render('index',{title:'Pokemons',
       f : firstP.data,
       s : secondP.data,
       t : thirdP.data ,
       four :  fourthP.data,  
       five : fifthP.data,
       six : sixthP.data,
       seven : seventhP.data,
       eight : eightthP.data,
       nine : ninthP.data
  })
   
})

