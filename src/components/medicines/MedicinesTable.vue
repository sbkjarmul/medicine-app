<template>
  <table :class="size">
    <thead>
      <tr>
        <th>Name</th>
        <th class="center">Unit</th>
        <th class="center">Strength</th>
        <th>Form</th>
        <th>Expiration Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="medicine in medicinesList" :key="medicine.id">
        <td>{{ medicine.medicationName }}</td>
        <td class="center">{{ medicine.unit }}</td>
        <td class="center">{{ medicine.strength }}</td>
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

      filter: {
        type: String,
      },
    },
    computed: {
      medicinesList() {
        const medicines = this.medicines;
        const patients = this.$store.state.patients;

        if (this.filter === '30') {
          const patientMedicines = medicines.filter((medicine) => {
            let forPatient = 0;

            medicine.patientIds.forEach((patientId) => {
              patients.forEach((patient) => {
                if (patientId === patient.id && patient.age > 30) {
                  forPatient++;
                }
              });
            });

            return forPatient > 0;
          });

          return patientMedicines;
        } else if (this.filter === 'men') {
          const patientMedicines = medicines.filter((medicine) => {
            let forPatient = 0;

            medicine.patientIds.forEach((patientId) => {
              patients.forEach((patient) => {
                if (patientId === patient.id && patient.gender === 'male') {
                  forPatient++;
                }
              });
            });

            return forPatient > 0;
          });

          return patientMedicines;
        } else {
          return medicines;
        }
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
    font-weight: 400;
    font-size: 0.9rem;
  }

  table.big td {
    font-size: 0.8rem;
  }

  table.big th,
  table.big td {
    padding: 0.5rem 1rem;
    text-align: start;
    min-width: 10rem;
  }

  table.big th:first-child,
  table.big td:first-child {
    padding: 0.5rem 2rem;
  }

  table.big th.center,
  table.big td.center {
    text-align: center;
    min-width: 7.5rem;
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
