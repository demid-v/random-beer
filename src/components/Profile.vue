<template>
  <div v-if="!loading" class="profile">
    <img
      :src="profilePic"
      alt="Profile picture"
      @error="imageLoadFailed"
      class="profile-pic"
    />
    <div class="info">
      <div>Name: {{ name }}</div>
      <div>Age: {{ age }}</div>
      <div>Position: {{ position }}</div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import defaultPic from "../assets/default-avatar-300x300.png";

export default {
  name: "Profile",

  data() {
    return {
      loading: true,
      profilePic: null,
      name: null,
      age: null,
      position: null,
    };
  },

  methods: {
    async fetchUserProfile() {
      this.loading = true;

      return fetch("https://random-data-api.com/api/users/random_user").then(
        (response) => response.json()
      );
    },
    birthdateToAge(birthdateStr) {
      const today = new Date();
      const birthdate = new Date(birthdateStr);
      let age = today.getFullYear() - birthdate.getFullYear();
      const monthsDiff = today.getMonth() - birthdate.getMonth();
      if (
        monthsDiff < 0 ||
        (monthsDiff === 0 && today.getDate() < birthdate.getDate())
      ) {
        age--;
      }
      return age;
    },
    imageLoadFailed() {
      console.error("Profile pic failed to load.");

      this.profilePic = defaultPic;
    },
  },

  created() {
    this.fetchUserProfile().then((userData) => {
      this.profilePic = userData.avatar;
      this.name = userData.first_name + " " + userData.last_name;
      this.age = this.birthdateToAge(userData.date_of_birth);
      this.position = userData.employment.title;

      this.loading = false;
    });
  },
};
</script>

<style>
.profile-pic {
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 20px;
}
</style>
