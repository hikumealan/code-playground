Here's an example of a vanilla JavaScript function that retrieves the user's IP address client-side:

```javascript
function getUserIPAddress() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.ipify.org?format=json', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const ipAddress = response.ip;
        resolve(ipAddress);
      } else if (xhr.readyState === 4) {
        reject(new Error('Failed to retrieve IP address.'));
      }
    };
    xhr.send();
  });
}

// Usage
getUserIPAddress()
  .then(ipAddress => {
    console.log(ipAddress);
  })
  .catch(error => {
    console.error(error);
  });
```

This function sends an AJAX request to the ipify API (https://www.ipify.org/) to retrieve the user's IP address in JSON format. It returns a promise that resolves with the IP address if the request is successful. Note that this method relies on an external API, so there may be limitations or rate limits associated with its usage.

---

Using WebRTC, you can gather the user's local IP addresses by establishing a peer-to-peer connection and retrieving the IP address information from the ICE candidates. Here's an example of a vanilla JavaScript function that utilizes WebRTC to access the user's IP address:

```javascript
function getUserIPAddress() {
  return new Promise((resolve, reject) => {
    const pc = new RTCPeerConnection({ iceServers: [] });
    pc.createDataChannel('');
    pc.createOffer()
      .then(offer => pc.setLocalDescription(offer))
      .catch(error => reject(error));

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        const ipRegex = /\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b/;
        const ipAddress = ipRegex.exec(event.candidate.candidate)[0];
        resolve(ipAddress);
        pc.onicecandidate = null;
        pc.close();
      }
    };
  });
}

// Usage
getUserIPAddress()
  .then(ipAddress => {
    console.log(ipAddress);
  })
  .catch(error => {
    console.error(error);
  });
```

This function creates an RTCPeerConnection object, creates a data channel, and creates an offer. The ICE candidates generated during this process contain the IP address information. The function extracts the IP address from the first candidate and resolves the promise with the IP address. Note that this method may not always provide the public IP address due to network configurations or the use of VPNs or proxies.

---

Certainly! Here's an alternative client-side technique to retrieve the user's IP address without relying on a third-party service:

```javascript
function getUserIPAddress() {
  return new Promise((resolve, reject) => {
    const rtcPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    const useWebKit = !!window.webkitRTCPeerConnection;

    if (!rtcPeerConnection) {
      reject(new Error('WebRTC not supported'));
      return;
    }

    const pc = new rtcPeerConnection({ iceServers: [] });
    const noop = () => {};

    pc.createDataChannel('');
    pc.createOffer(pc.setLocalDescription.bind(pc), noop);

    pc.onicecandidate = (event) => {
      if (event && event.candidate && event.candidate.candidate) {
        const ipRegex = /\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b/;
        const ipAddress = ipRegex.exec(event.candidate.candidate)[0];
        resolve(ipAddress);
        pc.onicecandidate = noop;
        pc.close();
      }
    };

    setTimeout(() => {
      reject(new Error('Timed out'));
    }, 5000); // Adjust the timeout as needed
  });
}

// Usage
getUserIPAddress()
  .then(ipAddress => {
    console.log(ipAddress);
  })
  .catch(error => {
    console.error(error);
  });
```

This technique utilizes WebRTC to gather the user's IP address. It creates an RTCPeerConnection object, generates an offer, and listens for ICE candidates. The IP address is extracted from the candidate and resolved in the promise. Note that this method may not always provide the public IP address due to network configurations or the use of VPNs or proxies. Additionally, it's important to handle any errors and adjust the timeout value as needed.

---

If you're looking for an alternative client-side technique to retrieve the user's IP address without relying on third-party services or WebRTC, you can use a combination of client-side JavaScript and server-side code. Here's an example of how you can achieve this:

1. On the client-side, you can make an AJAX request to your own server to fetch the user's IP address. Here's an example using vanilla JavaScript:

```javascript
function getUserIPAddress() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/ip', true); // Modify the endpoint based on your server configuration
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const ipAddress = xhr.responseText;
        resolve(ipAddress);
      } else if (xhr.readyState === 4) {
        reject(new Error('Failed to retrieve IP address.'));
      }
    };
    xhr.send();
  });
}

// Usage
getUserIPAddress()
  .then(ipAddress => {
    console.log(ipAddress);
  })
  .catch(error => {
    console.error(error);
  });
```

2. On the server-side, you need to handle the `/ip` endpoint and retrieve the client's IP address from the request object. Here's an example using Node.js and Express:

```javascript
const express = require('express');
const app = express();

// Endpoint to retrieve the client's IP address
app.get('/ip', (req, res) => {
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.send(ipAddress);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

In this example, the client-side code makes an AJAX request to the `/ip` endpoint on your server. The server-side code retrieves the IP address from the request headers (`x-forwarded-for`) or the remote address (`req.connection.remoteAddress`), and sends it back to the client as the response.

Please note that the server-side code is written in Node.js and uses Express as the server framework. You may need to adjust it based on your server environment and framework of choice.
