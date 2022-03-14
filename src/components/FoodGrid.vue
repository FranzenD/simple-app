<template>
  <div class="food-grid">
    <FoodCard
      v-for="(image, index) in foodImages[category]"
      :key="index"
      :imageUrl="image"
    />
  </div>
</template>

<script>
import foodService from '@/services/food';
import FoodCard from './FoodCard.vue';

export default {
  name: 'FoodGrid',
  components: {
    FoodCard
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
    numberOfItems: Number
  },
  created() {
    this.getFood();
  },
  watch: {
    category() {
      this.getFood();
    },
    numberOfItems() {
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
          await this.getFoodItems(this.numberOfItems)
        );
      } else if (this.foodImages[this.category].length > this.numberOfItems) {
        this.foodImages[this.category].splice(this.numberOfItems);
      } else if (this.foodImages[this.category].length < this.numberOfItems) {
        const numberOfItemsToAdd =
          this.numberOfItems - this.foodImages[this.category].length;

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
.food-grid {
  // TODO: add styling for better layout
}
</style>
