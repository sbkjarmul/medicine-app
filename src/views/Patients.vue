<template>
  <div class="content-box">
    <div class="filter-box">
      <filter-button name="Over 30" @click="filterTable('30')"></filter-button>
      <filter-button name="Male" @click="filterTable('men')"></filter-button>
      <filter-button name="All" @click="filterTable('all')"></filter-button>
    </div>

    <patient-card
      :patient="patient"
      v-if="showCard"
      @close-card="closeCard"
    ></patient-card>

    <patients-table
      :patients="patients"
      @patient="getPatient"
      :filter="filter"
    ></patients-table>
  </div>
</template>

<script>
  import PatientCard from '../components/patients/PatientCard.vue';
  import PatientsTable from '../components/patients/PatientsTable.vue';
  import FilterButton from '../components/UI/FilterButton.vue';

  export default {
    data() {
      return {
        patient: {},
        showCard: 0,
        filter: '',
      };
    },

    components: {
      PatientCard,
      PatientsTable,
      FilterButton,
    },

    computed: {
      patients() {
        return this.$store.state.patients;
      },
    },

    methods: {
      getPatient(patient, status) {
        this.patient = patient;
        this.showCard = status;
      },

      closeCard(status) {
        this.showCard = status;
      },

      filterTable(value) {
        this.filter = value;
      },
    },
  };
</script>

<style scoped>
  .content-box {
    align-items: flex-start;
    padding-left: 10rem;

    background-image: url('../assets/patient.jpg');
    background-size: 100%;
    background-position: top center;
    background-attachment: fixed;
    background-blend-mode: overlay;
    background-color: rgb(148, 148, 148);
  }

  .filter-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5rem;
    padding-left: 1rem;
  }
</style>
