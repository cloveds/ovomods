(function () {
  let old = globalThis.sdk_runtime;
  c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
  let runtime = globalThis.sdk_runtime;
  globalThis.sdk_runtime = old;

  let notify = (text, title = "yoooooo", image = "./speedrunner.png") => {
    cr.plugins_.sirg_notifications.prototype.acts.AddSimpleNotification.call(
      runtime.types_by_index.find(
        (type) => type.plugin instanceof cr.plugins_.sirg_notifications
      ).instances[0],
      title,
      text,
      image
    );
  };

  notify("timescale shortcut mod loaded");
  document.addEventListener("keydown", (event) => {
    if (event.code === "KeyT") {
      ovoTasTools.timescale = 1
        notify("timescale set to 1");
    }
    if (event.code === "KeyG") {
      ovoTasTools.timescale = 0.5
        notify("timescale set to 0.5");
    }
    if (event.code === "KeyY") {
      ovoTasTools.timescale = 0.02
        notify("timescale set to 0.02");
    }
    if (event.code === "KeyH") {
      ovoTasTools.timescale = 0.2
      notify("timescale set to 0.2");
    }
    if (event.code === "KeyU") {
      if (event.shiftKey) {
        ovoTasTools.timescale = 0.07
        notify("timescale set to 0.07");
      } else {        
        ovoTasTools.timescale = 0.05
        notify("timescale set to 0.05");
      }
    }
    if (event.code === "KeyJ") {
      ovoTasTools.timescale = 0.1
        notify("timescale set to 0.1");
    }
    if(event.code === "KeyN") {
      if (event.shiftKey) {
          ovoTasTools.loadInputs([["Down"],])
          ovoTasTools.playInputs()
          notify("auto mj inputed");
      } else {
          ovoTasTools.loadInputs([["Jump"],["Jump"],["Jump"],["Jump"],["Jump"],])
          ovoTasTools.playInputs()
          notify("auto jump inputed");
      }
    }
  });
})();
