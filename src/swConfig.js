export default {
    onUpdate: registration => {
      registration.unregister().then(() => {
        if(window.confirm("Nueva Actualización Disponible!")){
          window.location.reload()
        }
      })
    },
    onSuccess: registration => {
      console.info('service worker on success state')
      console.log(registration)
    },
  }