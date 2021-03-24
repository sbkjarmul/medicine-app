<template>
  <table>
    <thead>
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Phone number</th>
        <th class="age">Age</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="patient in patientsList"
        :key="patient.id"
        @click="getPatient(patient)"
      >
        <td>{{ patient.name }}</td>
        <td>{{ patient.lastName }}</td>
        <td>{{ patient.phoneNumber }}</td>
        <td class="age">{{ patient.age }}</td>
        <td>{{ patient.gender }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    computed: {
      patientsList() {
        if (this.filter === '30') {
          return this.patients.filter((patient) => {
            return patient.age > 30;
          });
        } else if (this.filter === 'men') {
          return this.patients.filter((patient) => {
            return patient.gender === 'male';
          });
        } else {
          return this.patients;
        }
      },
    },
    props: {
      patients: {
        type: Array,
      },

      filter: {
        type: String,
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
  }

  table th {
    background-color: #27a4f2;
    color: white;
    font-size: 1rem;
  }

  table td {
    cursor: pointer;
  }

  table th,
  table td {
    padding: 0.5rem 1rem;
    text-align: start;
    min-width: 10rem;
    font-size: 0.9rem;
  }

  table th {
    padding: 1rem 1rem;
  }

  table th.age,
  table td.age {
    text-align: center;
  }

  table th.age,
  table td.age,
  table th:last-child,
  table td:last-child {
    min-width: 7.5rem;
  }

  table th:first-child,
  table td:first-child {
    padding-left: 2rem;
  }

  table tr:hover {
    background: #f2c36b !important;
  }

  table tr:nth-child(even) {
    background: rgba(0, 0, 0, 0.1);
  }
</style>
