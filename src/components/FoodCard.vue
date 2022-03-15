<template>
  <div class="card">
    <img :src="imageUrl" class="card__image" />
  </div>
</template>

<script>
export default {
  name: 'FoodCard',
  props: {
    imageUrl: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  border: solid 1px lightgray;
  border-radius: 3px;
  box-shadow: 5px 5px 10px 0 rgb(104, 103, 103);
  width: 200px;
  height: 200px;
  padding: 1em;
  margin: 1em;

  // TODO: Make cards smaller on mobile screen sizes.

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
