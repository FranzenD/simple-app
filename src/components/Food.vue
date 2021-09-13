<template>
  <div class="food">
    <Card v-for="(image, index) in foodImages" :key="index" :imageUrl="image" />
  </div>
</template>

<script>
import foodService from '../services/food';
import Card from './Card.vue';

export default {
  name: 'Food',
  components: {
    Card
  },
  data() {
    return {
      foodImages: []
    };
  },
  props: {
    category: {
      type: String,
      required: true,
      default: 'burger'
    },
    numbers: Number
  },
  created() {
    this.getFood();
  },
  watch: {
    category() {
      this.getFood();
    },
    numbers() {
      this.getFood();
    }
  },
  methods: {
    async getFood() {
      const imgArr = [];
      for (let i = 0; i < this.numbers; i++) {
        const { image } = await foodService.getFood(this.category);
        imgArr.push(image);
      }

      this.foodImages = [...imgArr];
    }
  }
};
</script>

<style lang="scss" scoped>
.food {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
