<template>
  <button>{{ name }}</button>
</template>

<script>
  export default {
    props: ['name'],
  };
</script>

<style scoped>
  button {
    cursor: pointer;
    padding: 1rem 2rem;
    background: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    margin: 1rem;
    border: none;
    border-radius: 5px;
  }

  button:hover {
    box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  button:focus {
    outline: none;
  }
</style>
