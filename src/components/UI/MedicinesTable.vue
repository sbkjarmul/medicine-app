<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Unit</th>
        <th>Strength</th>
        <th>Form</th>
        <th>Expiration Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="medicine in medicines" :key="medicine.id">
        <td>{{ medicine.medicationName }}</td>
        <td>{{ medicine.unit }}</td>
        <td>{{ medicine.strength }}</td>
        <td>{{ medicine.form }}</td>
        <td>{{ medicine.expDate }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    computed: {
      medicines() {
        return this.$store.state.medicines;
      },
    },
  };
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }

  th,
  td {
    padding: 1rem;
    text-align: start;
  }

  tr:nth-child(even) {
    background: rgba(0, 0, 0, 0.1);
  }
</style>
