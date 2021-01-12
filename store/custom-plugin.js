import store from 'vuex'
const customPlugin = (store) => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
    console.log(window)
    // window.addEventListener('storage', (e) => {

    //   if (e.key === 'access_token' && e.oldValue && !e.newValue) {
    //     this.$auth.logout(/* .... */)
    //     // store.dispatch(userSignOut());
    //   }
    // })
  })
}

export default customPlugin
