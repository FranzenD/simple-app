<template>
  <div id="app">
    <h1>Are you hungry?</h1>
    <div class="categories">
      <label for="categories">Type of food: </label>
      <select if="categories" v-model="category">
        <option v-for="(category, index) in categories" :key="index">
          {{ category }}
        </option>
      </select>
    </div>
    <div>
      <label for="number">Number of items: </label>
      <select id="number" type="number" v-model.number="numbers">
        <option v-for="number in 20" :key="number">{{ number }}</option>
      </select>
    </div>
    <Food :category="category" :numbers="numbers" />
  </div>
</template>

<script>
import Food from './components/Food.vue';

export default {
  name: 'App',
  components: {
    Food
  },
  data() {
    return {
      numbers: 5,
      category: 'burger',
      categories: ['burger', 'pizza', 'pasta', 'dessert']
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@media screen and (min-width: 1024px) {
  #app {
    width: 80%;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1280px) {
  #app {
    width: 70%;
    margin: 0 auto;
  }
}

select {
  margin-right: 1em;
}

.categories {
  margin-bottom: 10px;
}
</style>
