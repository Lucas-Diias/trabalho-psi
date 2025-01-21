const axios = require('axios');


axios.get('https://pokeapi.co/api/v2/pokemon/dragonite')
.then(function (response){ 
    console.log(response.data.types[0].type.name);
    console.log(response.data.types[1].type.name);
})
.catch(function(error) {
    console.log(error);
});
