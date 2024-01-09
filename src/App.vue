<template>
<Header/>




<div class="container">
<Balance :total="total"/>
<IncomeExpenses :income="+ income" :expense="+ expense"/>
<ListTransaction  :transactions="transactions" @TransactionDeleted="handleDeletedTransaction"/>
<AddTransaction @transactionSubmitted="handleSubmittedTransaction"/>
</div>
</template>
<script setup>

import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import IncomeExpenses from './components/ExpensesIncome.vue';
import  ListTransaction from './components/ListTransaction.vue';
import  AddTransaction from './components/AddTransaction.vue';
import {useToast} from 'vue-toastification';

import {ref,computed,onMounted} from 'vue';
const toast =useToast();
onMounted(()=>{
const savedTransactions=JSON.parse(localStorage.getItem('transactions'));
if(savedTransactions)
{
    transactions.value=savedTransactions;
}
});
const transactions=ref([
                {id:1,text:'book1',amount:-19.99},
                {id:2,text:'book2',amount:299.97},
                {id:3,text:'book3',amount:-10},
                {id:4,text:'book4',amount:150},

            ]);
           // console.log(transactions.value);
           // get total
            const total=computed(() => {
                return transactions.value
                .reduce((acc,transaction)=>{
return acc+transaction.amount;
                },0)
            });
 // get income
                const income=computed(() => {
                return transactions.value
                .filter((transaction)=>transaction.amount > 0)
                .reduce((acc,transaction)=>{
return acc+transaction.amount;
                },0) .toFixed(2);
                
            });
             // get expense
             const expense=computed(() => {
                return transactions.value
                .filter((transaction)=>transaction.amount < 0)
                .reduce((acc,transaction)=>{
return acc+transaction.amount;
                },0) .toFixed(2);
                
            });
            // add transaction 
const handleSubmittedTransaction=(transactionData)=>{
   // console.log(transactionData);
   transactions.value.push({
    id:generateUniqueId(),
    text: transactionData.text,
    amount : transactionData.amount

   });
   toast.success('Transaction Added');
   saveTransactionsToLocalStorage();
  // console.log(generateUniqueId());
};
// generate unique id  in adding a new transcation
const generateUniqueId=()=>{
return Math.floor(Math.random()*1000000);
}
            
   // deleted transcation
const handleDeletedTransaction=(id)=>{
    transactions.value = transactions.value.filter((transaction)=>transaction.id!=id);

toast.success('Transaction deleted');
saveTransactionsToLocalStorage();
//console.log(id);
}


// save to localstorage

const saveTransactionsToLocalStorage=()=>{
    localStorage.setItem('transactions',JSON.stringify(transactions.value));
}



</script>