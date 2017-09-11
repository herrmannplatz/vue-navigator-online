
const plugin = {
  install (Vue, options = {}) {
    const vm = new Vue({ 
      data: { 
        online: window.navigator.onLine 
      }
    });

    function handleOnline(e) { 
      vm.$data.online = true;
    }

    function handleOffline(e) {
      vm.$data.online = false;
    }

    function addListeners() {
      window.addEventListener('offline', handleOffline);
      window.addEventListener('online', handleOnline);
    }

    function removeListeners() {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    }

    Vue.mixin({
      computed: {
        isOnline() {
          return vm.$data.online;
        }
      },
      beforeCreate: addListeners,
      beforeDestroy: removeListeners
    });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin