<template>
    <div id="counter">
      <span>{{ coisa }}</span>
      <button @click="adicionar()">+</button>
      <button @click="subtrair()">-</button>
    </div>
  </template>
  
  <script>
  export default {
      data () {
          return {
              coisa: 0
          }
      },
      methods: {
          adicionar() {
              this.coisa++
          },
          subtrair() {
              this.coisa--
          }
      }
  }
  </script>
  
  <style>
  #counter span {
      border-bottom: 1px solid #ccc;
      height: 30px;
      padding: 5px 25px;
  }
  #counter button {
      height: 30px;
      width: 30px;
      border-radius: 15px;
      background-color: coral;
      color: #fff;
      margin-left: 10px;
      outline: none;
  }
  </style>
  