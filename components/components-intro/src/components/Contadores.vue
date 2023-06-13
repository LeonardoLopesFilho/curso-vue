<template>
  <div>
    <Counter v-for="c in 5" :key="c"/>
  </div>
</template>

<script>
import Counter from '../components/Counter.vue'
export default {
    components:{
        Counter
    }
}
</script>

<style>

</style>