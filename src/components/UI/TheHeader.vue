<template>
  <header>
    <slot></slot>
  </header>
</template>

<style scoped>
  header {
    width: 100%;
    height: 4rem;
    padding-right: 10rem;
    padding-left: 10rem;

    color: #57b7f2;
    background-color: white;
    border-top: 1px solid #27a4f2;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
</style>
