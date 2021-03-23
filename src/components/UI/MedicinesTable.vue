<template>
  <table :class="size">
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
    props: {
      medicines: {
        type: Array,
      },
      size: {
        type: String,
      },
    },
  };
</script>

<style scoped>
  table.small,
  table.big {
    border-collapse: collapse;
  }
  table.big {
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
  }

  table.big th {
    background-color: #27a4f2;
    color: white;
    font-size: 1.2rem;
  }

  table.big th,
  table.big td {
    padding: 1rem 2rem;
    text-align: start;
  }

  table.small th {
    font-weight: 400;
    border-bottom: 1px solid rgb(36, 36, 36);
    color: black;
    font-size: 0.9rem;
  }

  table.small th,
  table.small td {
    padding: 0.5rem 1rem;
    text-align: start;
    font-size: 0.8rem;
  }

  table.big tr:nth-child(even) {
    background: rgba(0, 0, 0, 0.1);
  }

  table.small tr {
    border-bottom: 1px solid rgb(196, 196, 196);
  }
</style>
