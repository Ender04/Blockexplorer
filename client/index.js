import axios from "axios";
import "./index.scss";

const server = "http://localhost:3042";


const getBtn = document.getElementById("get-btn");
const getBalance = document.getElementById("get-btn");

var app5 = new Vue({
  el: '#getBlockNr',
  data: {
    message: 'Hello there!'
  },
  methods: {
    showBlockNr: async function () {
      this.message = await getBlocknr();
    }
  }
})





async function getBlocknr(){
  let currentBlockNr;
    
    return await axios.get("http://localhost:3042/getBlocknr").then(response =>{
       currentBlockNr =  response.data;
       console.log(response.data);
       return currentBlockNr;
      
    })

   
  
}

async function getBalanceOfAccount(){
  let BalanceOfAccount;
    
    return await axios.get("http://localhost:3042/getBalanceOfAccount").then(response =>{
      BalanceOfAccount =  response.data;
       
       return BalanceOfAccount;
      
    })

   
  
}

