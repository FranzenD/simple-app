<template>
  <div class="card">
    <img :src="imageUrl" class="card__image" />
  </div>
</template>

<script>
export default {
  name: 'Card',
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
  padding: 2em;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;

  &__image {
    width: 100%;
    height: auto;
  }
}
</style>
