<template>
  <div class="content-box">
    <div class="filter-box">
      <filter-button name="Over 30" @click="filterTable('30')"></filter-button>
      <filter-button name="Male" @click="filterTable('men')"></filter-button>
      <filter-button name="All" @click="filterTable('all')"></filter-button>
    </div>
    <medicines-table
      :medicines="medicines"
      size="big"
      :filter="filter"
    ></medicines-table>
  </div>
</template>

<script>
  import MedicinesTable from '../components/medicines/MedicinesTable.vue';
  import FilterButton from '../components/UI/FilterButton.vue';

  export default {
    data() {
      return {
        filter: '',
      };
    },

    components: {
      MedicinesTable,
      FilterButton,
    },

    computed: {
      medicines() {
        return this.$store.state.medicines;
      },
    },

    methods: {
      filterTable(value) {
        this.filter = value;
      },
    },
  };
</script>

<style scoped>
  .filter-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5rem;
    padding-left: 1rem;
  }
</style>
