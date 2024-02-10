<template>
    <formio :src="formUrl" @submit="onSubmitMethod" />
  </template>
  <script>
  import { Form } from 'vue-formio';
  
  export default {
    data: function() {
      // Load these from vuex or some other state store system.
      return {
        formUrl: "https://examples.form.io/example"
      }
    },
    components: {
      formio: Form
    },
    methods: {
      onSubmitMethod: function(submission) {
        console.log(submission);
      }
    }
  };
  </script>
