<template>
  <div class="opcardsdetails">
    <button @click="goBack()">Back</button>
    <h1>This is OperatingCardDetails page</h1>
    <router-link to="/operatingcards">Go to Cards</router-link>
  </div>
</template>

<script>
export default {
  name: "OperatingCardDetails",
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>
