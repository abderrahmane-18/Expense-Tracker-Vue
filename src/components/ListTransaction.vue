<template>
  <h4>History</h4>
<ul id="list" class="list ">
    <li  v-for="transaction in transactions" :key="transaction.id" :class="transaction.amount < 0 ? 'minus':'plus'">
        {{ transaction.text }}
       
        <span> ${{ transaction.amount }}</span>
        <button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
    </li>

    <!--
    <li class="minus">
        Cash <span> -$400</span>
        <button class="delete-btn">x</button>
    </li>
    <li class="plus">
        Cash <span> $800</span>
        <button class="delete-btn">x</button>
    </li>
    -->
</ul>
</template>
<script setup>

/*
export default {
    // option api 
    /*
    data()
    {
        return {
            transactions:[
                {id:1,text:'book1',amount:-19.99},
                {id:2,text:'book2',amount:299.97},
                {id:3,text:'book3',amount:-10},
                {id:4,text:'book4',amount:150},



            ]
        }
    }
    */
   /* method  of composition api 
    export default {

   setup()
   {
const transactions=[
                {id:1,text:'book1',amount:-19.99},
                {id:2,text:'book2',amount:299.97},
                {id:3,text:'book3',amount:-10},
                {id:4,text:'book4',amount:150},

            ];
            return {
                transactions,
            }
   }

};
*/
import { defineProps } from 'vue';
const emit =defineEmits(['TransactionDeleted']);
const props=defineProps({
transactions:{
    type:Array,
    required:true,
},
});
const deleteTransaction=(id)=>{
    emit('TransactionDeleted',id);
}
</script>