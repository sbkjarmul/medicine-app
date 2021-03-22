<template>
  <the-header>
    <button @click="setView('patients')">Patients</button>
    <button @click="setView('medicines')">Medicines</button>
  </the-header>
  <div v-if="view === 'patients'">
    <patient-card
      v-for="patient in patients"
      :key="patient.id"
      :patient="patient"
    ></patient-card>
  </div>
  <div v-else-if="view === 'medicines'">
    <medicines-table></medicines-table>
  </div>
</template>

<script>
  import TheHeader from './components/UI/TheHeader.vue';
  import PatientCard from './components/UI/PatientCard.vue';
  import MedicinesTable from './components/UI/MedicinesTable.vue';

  export default {
    data() {
      return {
        view: 'patients',
      };
    },
    components: {
      TheHeader,
      PatientCard,
      MedicinesTable,
    },
    methods: {
      getData() {
        this.$store.commit('getPatients');
        this.$store.commit('getMedicines');
      },
      setView(view) {
        if (view === 'patients') {
          this.view = 'patients';
        } else if (view === 'medicines') {
          this.view = 'medicines';
        }
      },
    },
    created() {
      this.getData();
    },
    computed: {
      patients() {
        return this.$store.state.patients;
      },
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
    background-color: #f0f1f2;
  }
</style>
