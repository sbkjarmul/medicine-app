<template>
  <div class="content-box">
    <h2>Welcome To Our</h2>
    <h1>Online Medicine Application</h1>
    <p>
      Choose beetwen two views and find a patient or a medicine that you are
      looking for! You can check the medications for the patient by clicking on
      the desired item on the table.
    </p>
    <div>
      <button @click="loadView('/patients')">Find a patient</button>
      <button @click="loadView('/medicines')">Find a medicine</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      loadView(path) {
        this.$router.push(path);
      },
    },
  };
</script>

<style scoped>
  .content-box {
    height: calc(100vh - 4rem);
    background-image: url('../assets/hero.jpg');
    background-size: cover;
    background-position: center;

    padding: 12.5rem 10rem;
    justify-content: flex-start;
    align-items: flex-start;
  }

  h2 {
    font-weight: 500;
    font-size: 2rem;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    font-weight: 700;
    color: #27a4f2;
  }

  p {
    margin-bottom: 2rem;
    width: 50%;
    font-weight: 300;
    font-size: 0.9rem;
    line-height: 1.2rem;
  }

  button {
    padding: 1rem 2rem;
    border: none;
    background: black;
    color: white;
    margin-right: 1rem;
    cursor: pointer;
    border: 1px solid black;
    transition: all 0.5s ease;
  }

  button:nth-child(2) {
    background: none;
    color: black;
  }

  button:hover {
    background: none;
    border: 1px solid #27a4f2;
    color: black;
  }

  button:focus {
    outline: none;
  }

  * {
    box-shadow: none;
  }
</style>
