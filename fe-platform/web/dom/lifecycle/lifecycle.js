var Lifecycle = {
  whenReady: (function () { // This function returns the whenReady() function
    var funcs = []; // The functions to run when we get an event
    var ready = false; // Switches to true when the handler is triggered
    // The event handler invoked when the document becomes ready
    function handler(e) {
      // If we've already run once, just return
      if (ready) {
        return;
      };
      // If this was a readystatechange event where the state changed to
      // something other than 'complete', then we're not ready yet
      if (e.type === 'readystatechange' && document.readyState !== 'complete') {
        return;
      }
      // Run all registered functions.
      // Note that we look up funcs.length each time, in case calling
      // one of these functions causes more functions to be registered.
      for (var i = 0; i < funcs.length; i++) {
        funcs[i].call(document);
      }
      // Now set the ready flag to true and forget the functions
      ready = true;
      funcs = null;
    }
    // Register the handler for any event we might receive
    if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', handler, false);
      document.addEventListener('readystatechange', handler, false);
      window.addEventListener('load', handler, false);
    } else if (document.attachEvent) {
      document.attachEvent('onreadystatechange', handler);
      window.attachEvent('onload', handler);
    }
    // Return the whenReady function
    return function whenReady(f) {
      if (ready) {
        f.call(document); // If already ready, just run it
      } else {
        funcs.push(f); // Otherwise, queue it for later.
      }
    }
  }()),
  // 动态加载 external js file
  loadScript: function (url) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.body.appendChild(script);
  },
  // 动态加载 inline js
  loadScriptStr: function (code) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    try {
      script.appendChild(document.createTextNode(code));
    } catch (err) {
      script.text = code;
    }
    document.body.appendChild(script);
  }

}