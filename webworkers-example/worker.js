
const SOURCE_URL = "test";
const ports = [];

function initialize() {
    const evSrc = new EventSource(SOURCE_URL);

    // every time message is received from event source, broadcast it to all the ports
    evSrc.addEventListener("getMessageQueue", function(e) {
        const data = JSON.parse(e.data);
        console.log(data);

        // notify all ports
        for (let i=0;i<ports.length;i++) {
            ports[i].postMessage(data);
        }
    });
}
initialize(); // initialize once

// called when script connects to this worker
function onconnect(event) {
    const port = event.ports[0];
    ports.push(port); // push the port and start it
    port.start();

    // when the port gets a message, post it to this worker
    port.addEventListener("message", event => {
        port.postMessage("SharedWorker said: " + event.data)
    })
}

