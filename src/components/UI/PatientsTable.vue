<template>
  <table>
    <thead>
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Phone number</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="patient in patients"
        :key="patient.id"
        @click="getPatient(patient)"
      >
        <td>{{ patient.name }}</td>
        <td>{{ patient.lastName }}</td>
        <td>{{ patient.phoneNumber }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: {
      patients: {
        type: Array,
      },
    },
    methods: {
      getPatient(patient) {
        this.$emit('patient', patient, 1);
      },
    },
  };
</script>

<style scoped>
  table {
    border-collapse: collapse;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  table th {
    background-color: #27a4f2;
    color: white;
    font-size: 1.2rem;
  }

  table th,
  table td {
    padding: 1rem 2rem;
    text-align: start;
  }

  table tr:hover {
    background: #57b7f2 !important;
  }

  table tr:nth-child(even) {
    background: rgba(0, 0, 0, 0.1);
  }
</style>
