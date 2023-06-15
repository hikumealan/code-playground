function generateBrowserFingerprint() {
  var fingerprint = {};

  // User agent string
  fingerprint.userAgent = navigator.userAgent;

  // Platform (OS)
  fingerprint.platform = navigator.platform;

  // CPU class
  fingerprint.cpuClass = navigator.cpuClass;

  // Device memory
  fingerprint.deviceMemory = navigator.deviceMemory;

  // Screen resolution
  fingerprint.screenResolution = screen.width + "x" + screen.height;

  // Color depth
  fingerprint.colorDepth = screen.colorDepth;

  // Timezone offset
  fingerprint.timezoneOffset = new Date().getTimezoneOffset();

  // Available fonts
  fingerprint.availableFonts = Array.from(navigator.fonts).map(font => font.fontFamily);

  // Available plugins
  fingerprint.availablePlugins = Array.from(navigator.plugins).map(plugin => plugin.name);

  // Hardware concurrency (number of CPU cores)
  fingerprint.hardwareConcurrency = navigator.hardwareConcurrency;

  // Do Not Track header
  fingerprint.doNotTrack = navigator.doNotTrack;

  // Canvas fingerprinting
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  fingerprint.canvasFingerprint = context.canvas.toDataURL();

  // WebRTC support
  fingerprint.webRtcSupport = typeof window.RTCPeerConnection !== 'undefined';

  // WebGL support
  fingerprint.webGlSupport = typeof window.WebGLRenderingContext !== 'undefined';

  // AudioContext support
  fingerprint.audioContextSupport = typeof window.AudioContext !== 'undefined';

  // Media devices
  navigator.mediaDevices.enumerateDevices()
    .then(devices => {
      fingerprint.mediaDevices = devices.map(device => device.kind);
    });

  // Touch support
  fingerprint.touchSupport = ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);

  // Battery API
  fingerprint.batteryApiSupport = typeof navigator.getBattery !== 'undefined';

  // Network connection type
  fingerprint.networkConnectionType = navigator.connection ? navigator.connection.effectiveType : '';

  // Language preference
  fingerprint.languagePreference = navigator.language || navigator.userLanguage;

  // Web storage support
  fingerprint.localStorageSupport = typeof window.localStorage !== 'undefined';
  fingerprint.sessionStorageSupport = typeof window.sessionStorage !== 'undefined';

  // Web worker support
  fingerprint.webWorkerSupport = typeof window.Worker !== 'undefined';

  // Cookies enabled
  fingerprint.cookiesEnabled = navigator.cookieEnabled;

  // Ad blocking detection
  fingerprint.adBlockEnabled = false;
  var testAd = document.createElement('div');
  testAd.innerHTML = '&nbsp;';
  testAd.className = 'adsbox';
  document.body.appendChild(testAd);
  if (testAd.offsetHeight === 0) {
    fingerprint.adBlockEnabled = true;
  }
  document.body.removeChild(testAd);

  // DNT (Do Not Track) header
  fingerprint.doNotTrackHeader = navigator.doNotTrack || '';

  // Battery charging time
  fingerprint.batteryChargingTime = navigator.getBattery ? navigator.getBattery().then(battery => battery.chargingTime) : null;

  // Screen orientation
  fingerprint.screenOrientation = (screen.orientation || {}).type;

  // Pointer device type
  fingerprint.pointerDeviceType = navigator.pointerEnabled ? 'pointer' :
    navigator.msPointerEnabled ? 'mspointer' : '';

  // Additional features and properties can be added here...
  function generateBrowserFingerprint() {
  var fingerprint = {};

  // ... previous attributes ...

  // Pointer pressure support
  fingerprint.pointerPressureSupport = navigator.pointerEnabled ? !!navigator.maxTouchPoints : false;

  // WebGL depth texture support
  fingerprint.webGlDepthTextureSupport = (function () {
    var canvas = document.createElement('canvas');
    var gl = canvas.getContext('webgl');
    var extension = gl.getExtension('WEBGL_depth_texture');
    return !!extension;
  })();

  // WebRTC IP handling features
  fingerprint.webRtcIpHandlingFeatures = (function () {
    var rtcPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var mediaConstraints = {
      optional: [{ RtpDataChannels: true }]
    };
    var pc = new rtcPeerConnection(mediaConstraints);
    var addrs = {};
    addrs['0.0.0.0'] = false;
    function grepSDP(sdp) {
      var hosts = [];
      var finalIP = '';
      sdp.split('\r\n').forEach(function (line) {
        if (~line.indexOf('a=candidate')) {
          var parts = line.split(' '),
            addr = parts[4],
            type = parts[7];
          if (type === 'host') {
            finalIP = addr;
          }
          var regex = new RegExp('([0-9]{1,3}(\.[0-9]{1,3}){3})');
          var host = regex.exec(addr);
          if (host !== null) {
            hosts.push(host[1]);
          }
        }
      });
      return [finalIP, hosts];
    }
    pc.createDataChannel('');
    pc.createOffer(function (result) {
      var sdp = result.sdp;
      var extractedIPs = grepSDP(sdp);
      addrs[extractedIPs[0]] = true;
    }, function () { });
    return addrs;
  })();

  // WebSocket ping-pong support
  fingerprint.webSocketPingPongSupport = (function () {
    var WebSocket = window.WebSocket || window.MozWebSocket;
    if (!WebSocket) {
      return false;
    }
    var isPingPongSupported = false;
    var ws = new WebSocket('wss://echo.websocket.org');
    ws.onopen = function () {
      ws.send('ping');
    };
    ws.onmessage = function (message) {
      if (message.data === 'pong') {
        isPingPongSupported = true;
      }
      ws.close();
    };
    ws.onerror = function () {
      ws.close();
    };
    return isPingPongSupported;
  })();

  // WebAssembly support
  fingerprint.webAssemblySupport = typeof WebAssembly !== 'undefined';

  // MathML support
  fingerprint.mathMLSupport = (function () {
    var div = document.createElement('div');
    div.innerHTML = '<math><mfrac><mi>Test</mi><mi>Test</mi></mfrac></math>';
    var mathmlSupported = (div.firstChild && div.firstChild.namespaceURI) === 'http://www.w3.org/1998/Math/MathML';
    return mathmlSupported;
  })();

  // WebGL 2.0 support
  fingerprint.webGl2Support = (function () {
    var canvas = document.createElement('canvas');
    var gl = canvas.getContext('webgl2');
    return !!gl;
  })();

  // GPU renderer properties
  fingerprint.gpuRendererProperties = (function () {
  var canvas = document.createElement('canvas');
    var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    var rendererInfo = gl.getExtension('WEBGL_debug_renderer_info');
    var gpuRendererProperties = {};
    if (rendererInfo) {
      gpuRendererProperties.vendor = gl.getParameter(rendererInfo.UNMASKED_VENDOR_WEBGL);
      gpuRendererProperties.renderer = gl.getParameter(rendererInfo.UNMASKED_RENDERER_WEBGL);
    }
    return gpuRendererProperties;
  })();

  // Fullscreen API support
  fingerprint.fullscreenApiSupport = !!(document.documentElement.requestFullscreen ||
    document.documentElement.mozRequestFullScreen ||
    document.documentElement.webkitRequestFullscreen ||
    document.documentElement.msRequestFullscreen);

  // Resource timing support
  fingerprint.resourceTimingSupport = !!window.performance && !!window.performance.getEntriesByType;

  // Intersection Observer API support
  fingerprint.intersectionObserverSupport = typeof window.IntersectionObserver !== 'undefined';

  // Battery level
  fingerprint.batteryLevel = navigator.getBattery ? navigator.getBattery().then(battery => battery.level) : null;

  // Ambient Light Sensor support
  fingerprint.ambientLightSensorSupport = typeof window.AmbientLightSensor !== 'undefined';

  // Gamepad API support
  fingerprint.gamepadApiSupport = !!navigator.getGamepads;

  // Page visibility API support
  fingerprint.pageVisibilityApiSupport = typeof document.hidden !== 'undefined';

  // Credential Management API support
  fingerprint.credentialManagementApiSupport = !!navigator.credentials;

  // Beacon API support
  fingerprint.beaconApiSupport = typeof navigator.sendBeacon !== 'undefined';

  // Payment Request API support
  fingerprint.paymentRequestApiSupport = !!window.PaymentRequest;

  // Media Session API support
  fingerprint.mediaSessionApiSupport = !!navigator.mediaSession;

  // Picture-in-Picture API support
  fingerprint.pictureInPictureApiSupport = typeof document.pictureInPictureElement !== 'undefined';

  // Web Share API support
  fingerprint.webShareApiSupport = !!navigator.share;

  // Presentation API support
  fingerprint.presentationApiSupport = !!navigator.presentation;

  // Bluetooth support
  fingerprint.bluetoothSupport = typeof navigator.bluetooth !== 'undefined';

  // MIDI support
  fingerprint.midiSupport = typeof navigator.requestMIDIAccess !== 'undefined';

  // Storage API support
  fingerprint.storageApiSupport = !!navigator.storage;

  // Geolocation API support
  fingerprint.geolocationApiSupport = typeof navigator.geolocation !== 'undefined';

  // Ambient Light Events support
  fingerprint.ambientLightEventsSupport = typeof window.ondevicelight !== 'undefined';

  // Sensor-based events support
  fingerprint.sensorBasedEventsSupport = (function () {
    return ('ondeviceorientation' in window) || ('ondevicemotion' in window) || ('ondeviceproximity' in window);
  })();

  // VR (Virtual Reality) support
  fingerprint.vrSupport = (function () {
    var displays = navigator.getVRDisplays || navigator.getVRDevices;
    return !!displays;
  })();

  // Additional features and properties can be added here...

  return fingerprint;
}

// Usage
var fingerprint = generateBrowserFingerprint();
console.log(fingerprint);


// This function checks the last 50 attributes for browser fingerprinting, including pointer pressure support, WebGL depth texture support, WebRTC IP handling features, WebSocket ping-pong support, WebAssembly support, MathML support, WebGL 2.0 support, GPU renderer properties, Fullscreen API support, Resource timing support, Intersection Observer API support, Battery level, Ambient Light Sensor support, Gamepad API support, Page visibility API support, Credential Management API support, Beacon API support, Payment Request API support, Media Session API support, Picture-in-Picture API support, Web Share
