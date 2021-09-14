<template>
  <div class="food">
    <Card
      v-for="(image, index) in foodImages[category]"
      :key="index"
      :imageUrl="image"
    />
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
      foodImages: {}
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
      // TODO: Handle api errors
      if (!this.foodImages[this.category]) {
        this.$set(
          this.foodImages,
          this.category,
          await this.getFoodItems(this.numbers)
        );
      } else if (this.foodImages[this.category].length > this.numbers) {
        this.foodImages[this.category].splice(this.numbers);
      } else if (this.foodImages[this.category].length < this.numbers) {
        const numberOfItemsToAdd =
          this.numbers - this.foodImages[this.category].length;

        this.foodImages[this.category].push(
          ...(await this.getFoodItems(numberOfItemsToAdd))
        );
      }
    },
    async getFoodItems(numberOfItems) {
      const imgArr = [];
      for (let i = 0; i < numberOfItems; i++) {
        const { image } = await foodService.getFood(this.category);
        imgArr.push(image);
      }
      return imgArr;
    }
  }
};
</script>

<style lang="scss" scoped>
.food {
  // TODO: add styling for better layout
}
</style>
