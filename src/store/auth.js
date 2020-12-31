import firebase from 'firebase/app';

export default {
    actions: {
        async login({dispatch, commit}, {email, password}) {
            try {
              const  res= await firebase.auth().signInWithEmailAndPassword(email, password)
                console.log('res', res)
                console.log('res', res.user.uid)
                const userId=res.user.uid
              const data =  await firebase.database().ref(`/users/${userId}/info`)
                data.on('name', (snapshot)=>{
                    const d=snapshot.val()
                    console.log('d',d)
                })

            } catch (e) {
                commit('setError', e)
                throw e
            }

        },
        async register({dispatch, commit}, {email, password, name}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
               const userId = await dispatch('getUserid' )
                await firebase.database().ref(`/users/${userId}/info`).set({
                    bill:1000,
                    name:name
                })
               // commit('CREATE_USER')
            } catch (e) {
                commit('setError', e)
            }
        },
        getUserid() {
            const user = firebase.auth().currentUser
            console.log('user', user)
            return user ? user.uid : null
        },


        async logout({commit}) {
            try {
                await firebase.auth().signOut()
            } catch (e) {
                commit('setError', e)
                throw e
            }
        }
        async getUserInfo({}){

        }
    }
}
