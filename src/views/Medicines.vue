<template>
  <div class="content-box">
    <medicines-table
      :medicines="medicines"
      size="big"
      :filter="filter"
    ></medicines-table>
  </div>
</template>

<script>
  import MedicinesTable from '../components/medicines/MedicinesTable.vue';

  export default {
    data() {
      return {
        filter: '',
      };
    },

    components: {
      MedicinesTable,
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
