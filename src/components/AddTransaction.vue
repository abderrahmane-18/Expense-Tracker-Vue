<template>
    <h3>{{ $t('add_new_transaction') }}</h3>
    <form id="form" @submit.prevent="onSubmit">
      <div class="form-control">
        <label for="text">{{$t('text')}}</label>
        <input type="text"  id="text" v-model="text" :placeholder="$t('en_text')"/>

      </div>
      <div class="form-control">
        <label for="amount">{{$t('amount')}}<br/>
{{$t('val')}}
        </label>
        <input type="text"  id="amount" v-model="amount" :placeholder="$t('en_text')"/>
        <button class="btn">{{ $t('add_btn') }}</button>
        
      </div>
    </form>
  </template>
  <script setup>
  import {ref } from 'vue';
import {useToast} from 'vue-toastification';

  const text =ref('');
  const amount = ref('');
  const toast=useToast();
  const emit =defineEmits(['TransactionSubmitted'])
  const onSubmit=()=>{
    if(!text.value || !amount.value)
    {
toast.error('Both field must be filled');
    }
    const transactionData={
      text:text.value,
      amount:parseFloat(amount.value)
    };
    emit('TransactionSubmitted',transactionData);
    
  //  console.log(text.value,  amount.value);
    text.value='';
  amount.value='';
  };

</script>