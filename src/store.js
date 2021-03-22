import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      pUrl: 'https://cerber.pixel.com.pl/api/patients',
      mUrl: 'https://cerber.pixel.com.pl/api/medicine',
      patients: [],
      medicines: [],
    };
  },
  mutations: {
    getPatients(state) {
      axios.get(state.pUrl).then((response) => {
        state.patients = response.data;
      });
    },
    getMedicines(state) {
      axios.get(state.mUrl).then((response) => {
        state.medicines = response.data;
      });
    },
  },
});

export default store;
