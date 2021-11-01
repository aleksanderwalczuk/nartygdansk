import { reactive } from '@vue/reactivity'

const store = {
  debug: true,

  state: reactive({
    data: null,
    loaded: false,
  }),

  setData(newValue) {
    if (this.debug) {
      console.log('setMessageAction triggered with', newValue)
    }

    this.state.data = newValue
    this.state.loaded = true
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

  toggleLoaded() {
    this.loaded =  !this.loaded
  }
}

export default store;
