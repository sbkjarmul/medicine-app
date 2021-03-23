<template>
  <div class="container" @click="closeCard" :close-card="closeCard">
    <div class="card">
      <div class="patient-box">
        <div class="img-box">
          <i class="fas fa-user-injured"></i>
        </div>
        <div class="text-box">
          <h1>{{ patient.name }} {{ patient.lastName }}</h1>
          <p class="gender">{{ patient.gender }}</p>
          <p>
            <span><i class="fas fa-map-marker-alt"></i></span>
            {{ patient.adress }}
          </p>
          <p>
            <span><i class="fas fa-phone"></i></span> {{ patient.phoneNumber }}
          </p>
          <p><span>Age:</span> {{ patient.age }}</p>
        </div>
        <button @click="showMedicines" class="show-medicine-btn">
          Show medicines
        </button>
      </div>
      <div class="med-box" v-if="show">
        <p>Patient medicines:</p>
        <medicines-table :medicines="medicines" size="small"></medicines-table>
      </div>
    </div>
  </div>
</template>

<script>
  import MedicinesTable from './MedicinesTable.vue';
  export default {
    components: {
      MedicinesTable,
    },
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
      closeCard(e) {
        if (e.target.className === 'container') {
          this.$emit('close-card', 0);
        }
      },
    },
    computed: {
      medicines() {
        const medicines = this.$store.state.medicines;
        const patientMedicines = medicines.filter((medicine) => {
          let forPatient = 0;
          medicine.patientIds.forEach((patientId) => {
            if (patientId === this.patient.id /*&& this.patient.age > 30*/) {
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
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .card {
    position: fixed;
    top: 10rem;
    width: auto;
    margin: 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
    box-shadow: 0px 8px 1rem rgba(0, 0, 0, 0.2);
    background-color: white;
    z-index: 9;
  }

  .patient-box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .img-box {
    height: 7.5rem;
    width: 7.5rem;
    border-radius: 100%;
    border: 3px solid #27a4f2;
    background-color: #dfdfdf;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-box i {
    font-size: 5rem;
    margin: 1rem;
    color: white;
  }

  .text-box {
    margin-left: 1rem;
    padding-left: 1rem;
    margin-right: 1rem;
    border-left: 1px solid #c0c0c0;
  }

  .text-box h1 {
    font-size: 1.2rem;
  }

  .text-box p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  .text-box p.gender {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    font-size: 0.75rem;
    color: #979797;
  }

  span {
    font-weight: bold;
    margin-right: 0.5rem;
  }

  .med-box {
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  }

  .med-box p {
    margin-bottom: 0.5rem;
  }

  .show-medicine-btn {
    border: 1px solid #6dccf2;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    margin-left: 2.5rem;
    cursor: pointer;
  }

  .show-medicine-btn:hover {
    background-color: #6dccf2;
  }
</style>
