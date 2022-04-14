<template>
  <div class="beer">
    <div v-if="!loading" class="info">
      <div>Alcohol: {{ alcohol }}</div>
      <div>Brand: {{ brand }}</div>
      <div>Hop: {{ hop }}</div>
      <div>Malts: {{ malts }}</div>
      <div>Name: {{ name }}</div>
      <div>Style: {{ style }}</div>
      <div>Yeast: {{ yeast }}</div>
    </div>
    <div v-else>Loading...</div>
    <button @click="displayData()" class="roll-beer">Roll</button>
  </div>
</template>

<script>
export default {
  name: "Beer",

  data() {
    return {
      loading: true,
      alcohol: null,
      brand: null,
      hop: null,
      malts: null,
      name: null,
      style: null,
      yeast: null,
    };
  },

  methods: {
    async getRandomBeer() {
      this.loading = true;

      return fetch("https://random-data-api.com/api/beer/random_beer").then(
        (response) => response.json()
      );
    },
    displayData() {
      this.getRandomBeer().then((beerData) => {
        this.alcohol = beerData.alcohol;
        this.brand = beerData.brand;
        this.hop = beerData.hop;
        this.malts = beerData.malts;
        this.name = beerData.name;
        this.style = beerData.style;
        this.yeast = beerData.yeast;

        this.loading = false;
      });
    },
  },

  created() {
    this.displayData();
  },
};
</script>

<style>
.beer {
  width: 300px;
}

.roll-beer {
  margin-top: 20px;
  width: 100px;
  height: 30px;
  background-color: white;
  border: 1px solid black;
}
</style>
