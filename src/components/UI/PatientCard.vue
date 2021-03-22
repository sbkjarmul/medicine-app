<template>
  <div class="card" @click="showMedicines">
    <div class="img-box">
      <i class="fas fa-user-injured"></i>
    </div>
    <div class="text-box">
      <h1>{{ patient.name }} {{ patient.lastName }}</h1>
      <p><span>Address:</span> {{ patient.adress }}</p>
      <p><span>Phone:</span> {{ patient.phoneNumber }}</p>
      <p><span>Age:</span> {{ patient.age }}</p>
      <p><span>Gender:</span> {{ patient.gender }}</p>
    </div>
    <div class="med-box" v-if="show">
      <h3>Medicines:</h3>
      <p v-for="medicine in medicines" :key="medicine.id">
        {{ medicine.medicationName }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: 0,
      };
    },
    props: {
      patient: {
        type: Object,
      },
    },
    methods: {
      showMedicines() {
        this.show = !this.show;
      },
    },
    computed: {
      medicines() {
        const medicines = this.$store.state.medicines;
        const patientMedicines = medicines.filter((medicine) => {
          let forPatient = 0;
          medicine.patientIds.forEach((patientId) => {
            if (patientId === this.patient.id) {
              forPatient++;
            }
          });

          return forPatient > 0;
        });

        return patientMedicines;
      },
    },
  };
</script>

<style scoped>
  .card {
    width: 20rem;
    margin: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  .img-box {
    height: 100%;
  }

  .img-box i {
    font-size: 5rem;
    margin: 1rem;
  }

  .text-box {
    margin-left: 1rem;
  }

  p > span {
    font-weight: bold;
  }

  .med-box {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    background-color: #6dccf2;
    width: 100%;
    border-radius: 1rem;
    padding: 1rem;
  }
</style>
