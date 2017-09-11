
const plugin = {
  install (Vue, options = {}) {
    const vm = new Vue({ 
      data: { 
        online: window.navigator.onLine 
      }
    });

    window.addEventListener('online', function handleOnline(e) { 
      vm.$data.online = true;
    });
    
    window.addEventListener('offline', function handleOffline(e) {
      vm.$data.online = false;
    });

    Vue.mixin({
      computed: {
        isOnline() {
          return vm.$data.online;
        }
      }
    });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin