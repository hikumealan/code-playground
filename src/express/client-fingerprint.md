function generateFingerprint() {
  const fingerprintComponents = [];

  // User agent string
  fingerprintComponents.push(navigator.userAgent);

  // Platform (OS)
  fingerprintComponents.push(navigator.platform);

  // CPU class
  if (navigator.cpuClass) {
    fingerprintComponents.push(navigator.cpuClass);
  }

  // Device memory
  if (navigator.deviceMemory) {
    fingerprintComponents.push(navigator.deviceMemory);
  }

  // Screen resolution
  if (screen.width && screen.height) {
    fingerprintComponents.push(screen.width + 'x' + screen.height);
  }

  // Color depth
  if (screen.colorDepth) {
    fingerprintComponents.push(screen.colorDepth);
  }

  // Timezone offset
  const timezoneOffset = new Date().getTimezoneOffset();
  fingerprintComponents.push(timezoneOffset);

  // Available fonts
  if (navigator.fonts) {
    const fontList = Array.from(navigator.fonts).map((font) => font.fontFamily);
    fingerprintComponents.push(fontList.join(','));
  }

  // Available plugins
  if (navigator.plugins) {
    const pluginList = Array.from(navigator.plugins)
      .map((plugin) => plugin.name)
      .filter(Boolean);
    fingerprintComponents.push(pluginList.join(','));
  }

  // Hardware concurrency (number of CPU cores)
  if (navigator.hardwareConcurrency) {
    fingerprintComponents.push(navigator.hardwareConcurrency);
  }

  // Do Not Track header
  if (navigator.doNotTrack) {
    fingerprintComponents.push(navigator.doNotTrack);
  }

  // Battery level
  if (navigator.getBattery) {
    navigator.getBattery()
      .then((battery) => {
        if (battery.level != null) {
          fingerprintComponents.push(battery.level);
        }
      })
      .catch((error) => {
        console.error('Battery API error:', error);
      });
  }

  // WebRTC support
  const webrtcSupport = typeof RTCPeerConnection !== 'undefined';
  fingerprintComponents.push(webrtcSupport);

  // WebGL support
  const webglSupport = !!(
    document.createElement('canvas').getContext('webgl') ||
    document.createElement('canvas').getContext('experimental-webgl')
  );
  fingerprintComponents.push(webglSupport);

  // AudioContext support
  const audioContextSupport = typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined';
  fingerprintComponents.push(audioContextSupport);

  // WebGL vendor and renderer
  if (webglSupport) {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
      const renderer = gl.getParameter(gl.RENDERER);
      const vendor = gl.getParameter(gl.VENDOR);
      fingerprintComponents.push(renderer, vendor);
    }
  }

  // Media devices
  if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
    navigator.mediaDevices.enumerateDevices()
      .then((devices) => {
        const deviceList = devices.map((device) => device.kind);
        fingerprintComponents.push(deviceList.join(','));
      })
      .catch((error) => {
        console.error('Media devices error:', error);
      });
  }

  // Touch support
  const touchSupport = 'ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch);
  fingerprintComponents.push(touchSupport);

  // Accelerometer support
  const accelerometerSupport = typeof DeviceMotionEvent !== 'undefined';
  fingerprintComponents.push(accelerometerSupport);

  // Gyroscope support
   // Gyroscope support
  const gyroscopeSupport = typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function';
  fingerprintComponents.push(gyroscopeSupport);

  // Connection type
  if (navigator.connection && navigator.connection.type) {
    fingerprintComponents.push(navigator.connection.type);
  }

  // Gamepad support
  const gamepadSupport = !!navigator.getGamepads || !!navigator.webkitGetGamepads;
  fingerprintComponents.push(gamepadSupport);

  // Battery charging
  if (navigator.getBattery) {
    navigator.getBattery()
      .then((battery) => {
        if (battery.charging != null) {
          fingerprintComponents.push(battery.charging);
        }
      })
      .catch((error) => {
        console.error('Battery API error:', error);
      });
  }

  // Network information
  if (navigator.connection && navigator.connection.effectiveType) {
    fingerprintComponents.push(navigator.connection.effectiveType);
  }

  // Language preference
  if (navigator.language) {
    fingerprintComponents.push(navigator.language);
  }

  // Web storage support
  const localStorageSupport = typeof Storage !== 'undefined';
  fingerprintComponents.push(localStorageSupport);

  // Web worker support
  const webWorkerSupport = typeof Worker !== 'undefined';
  fingerprintComponents.push(webWorkerSupport);

  // Canvas fingerprinting
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const canvasFingerprint = ctx.canvas.toDataURL();
  fingerprintComponents.push(canvasFingerprint);

  // Other hardware features or browser properties you want to include
  // ...

  // Combine fingerprint components into a single string
  const fingerprint = fingerprintComponents.join('||');

  return fingerprint;
}
