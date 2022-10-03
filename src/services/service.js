import axios from 'axios';

axios.post('/chess/newgame', {
  }).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
