exports.InjectionApp = function InjectionApp(app) {
  app.eventEmitter.on('pluginsLoaded', function(plugins){
    console.log('theme! pluginsLoaded', plugins);
  })
  // ...
}
