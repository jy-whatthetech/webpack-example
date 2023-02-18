
const SOURCE_URL = "test";
const ports = [];

function initialize() {
    const evSrc = new EventSource(SOURCE_URL);
    evSrc.addEventListener("getMessageQueue", function(e) {
        const data = JSON.parse(e.data);
        console.log(data);

        // notify all ports
        for (let i=0;i<ports.length;i++) {
            ports[i].postMessage(data);
        }
    });
}
initialize();

function onconnect(event) {
    const port = event.ports[0];
    ports.push(port);
    port.start();
    port.addEventListener("message", event => {
        port.postMessage("SharedWorker said: " + event.data)
    })
}

