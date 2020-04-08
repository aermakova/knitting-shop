import firebase from "firebase";
import createPersistedState from "vuex-persistedstate";
//import Vue from "vue";

export default {
    state: {
        user: {
            isAuthenticated: false,
            uid: null,
        }
    },
    plugins: [createPersistedState()],
    mutations: {
        SET_USER(state, payload){
            state.user.isAuthenticated = true;
            state.user.uid = payload
        },
        UNSET_USER(state){
            state.user = {
                isAuthenticated: false,
                uid: null
            }
        }
    },
    actions: {
      SIGN_UP(state, payload) {
          state.commit('SET_PROCESSING', true);
          firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                state.commit('SET_USER', user.uid);
                console.log(user);
                state.commit('SET_PROCESSING', false);
            })
            .catch(function(error) {
                state.commit('SET_PROCESSING', false);
                state.commit('SET_ERROR', error);
            });
          setTimeout(() => {
              console.log(state.user)
          }, 2000);
            // Vue.prototype.$db.collection("users").doc("test").set({
            //     id: 12,
            //     name: payload.name,
            // })
            //     .then(function() {
            //         console.log("Document successfully written!");
            //     })
            //     .catch(function(error) {
            //         console.error("Error writing document: ", error);
            //     });
        },
        SIGN_IN({commit}, payload) {
            //commit('SET_PROCESSING', true);
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(user =>{
                    commit('SET_USER', user.uid);
                    console.log(user);
                    commit('SET_PROCESSING', false)
                })
                .catch(function(error) {
                    commit('SET_PROCESSING', false);
                    commit('SET_ERROR', error);
                    throw error;
                });
        },
        async LOG_OUT() {
            await firebase.auth().signOut()
        },
        GET_UID() {
            const user = firebase.auth().currentUser;
            return user ? user.uid : null
        },
        STATE_CHANGED({commit}, payload) {
            if(payload) {
                commit('SET_USER', payload.uid);
            }else{
                commit('UNSET_USER')
            }
        },
    },
    getters: {
        GET_USER: (state) => state.user,
        isUserAuthenticated: (state) => state.user.isAuthenticated,
    }
}
