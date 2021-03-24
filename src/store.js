import { createStore } from 'vuex';
// import axios from 'axios';

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
    setPatients(state, payload) {
      state.patients = payload;
    },
    // getPatients(state) {
    //   axios.get(state.pUrl).then((response) => {
    //     state.patients = response.data;
    //   });
    // },
    setMedicines(state, payload) {
      state.medicines = payload;
    },
    // getMedicines(state) {
    //   axios.get(state.mUrl).then((response) => {
    //     state.medicines = response.data;
    //   });
    // },
  },
  actions: {
    async loadPatients(context) {
      const response = await fetch('https://cerber.pixel.com.pl/api/patients');
      const responseData = await response.json();

      context.commit('setPatients', responseData);
    },
    async loadMedicines(context) {
      const response = await fetch('https://cerber.pixel.com.pl/api/medicine');
      const responseData = await response.json();

      context.commit('setMedicines', responseData);
    },
  },
});

export default store;
