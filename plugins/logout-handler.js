const blah = ({ store }, inject) => {
  window.onresize = () => {
    //console.log(store)
    //store.dispatch('WINDOW_SIZE_CHANGED')
  }

  window.onstorage = () => {
    // When local storage changes, dump the list to
    // the console.
    console.log(JSON.parse(window.localStorage.getItem('sampleList')))
  }

  window.addEventListener('storage', (e) => {
    console.log(e)
    console.log(store)
    // if(e.key === 'access_token' && e.oldValue && !e.newValue) {
    //    //store.dispatch(userSignOut());
    //    this.$auth.logout(/* .... */)
    //  }
  })
}

export default blah
