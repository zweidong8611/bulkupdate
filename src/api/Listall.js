import axios from 'axios';

export default axios.create({
   baseURL: 'http://222.44.10.139:5000',
   headers: {
     'Content-Type':'application/graphql',
     'Access-Control-Allow-Origin':'*'
   }

});