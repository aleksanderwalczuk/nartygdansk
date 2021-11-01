import { reactive } from '@vue/reactivity'

const store = {
  debug: true,

  state: reactive({
    data: null,
    loaded: false,
    modalOpen: false,
  }),

  setData(newValue) {
    if (this.debug) {
      console.log('setMessageAction triggered with', newValue)
    }

    this.state.data = newValue
    setTimeout(function(){
      this.state.loaded = true
    }.bind(this), 1000)
  },

  getData(entry) {
    if (this.debug) {
      console.log('getDataAction triggered')
    }

    if(!this.state.data) {
      return null
    }

    return entry ? this.state.data[entry] : this.state.data
  },

  clearData() {
    if (this.debug) {
      console.log('clearMessageAction triggered')
    }

    this.state.data = null
  },

  setModalOpen() {
    if (this.debug) {
      console.log('setModalOpenAction triggered')
    }
    this.state.modalOpen = true;
    this.toggleScrollLock()
  },

  toggleLoaded() {
    this.loaded =  !this.loaded
  }
}

export default store;
