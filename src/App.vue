<template>
  <the-header>
    <h3 @click="loadView('/')">MEDICINE APP</h3>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/patients">Patients</router-link>
      <router-link to="/medicines">Medicines</router-link>
    </nav>
  </the-header>
  <router-view></router-view>
</template>

<script>
  import TheHeader from './components/UI/TheHeader.vue';

  export default {
    data() {
      return {};
    },

    components: {
      TheHeader,
    },

    methods: {
      loadView(path) {
        this.$router.push(path);
      },

      getData() {
        this.$store.dispatch('loadMedicines');
        this.$store.dispatch('loadPatients');
      },
    },

    created() {
      this.getData();
    },
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #ffffff;
  }

  .content-box {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-top: 2.5rem;
  }

  nav {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    box-sizing: border-box;
    color: rgb(90, 90, 90);
    border: none;
    background: transparent;
    padding: 0 1rem;
    text-transform: uppercase;
    text-decoration: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 0.9rem;
  }

  a:focus,
  a.router-link-active {
    outline: none;
    border-bottom: 3px solid #f2c36b;
    text-decoration: none;
    color: rgb(0, 0, 0);
    padding-top: 2px;
  }
</style>
