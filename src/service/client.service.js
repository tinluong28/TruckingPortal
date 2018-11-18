import { Http2ServerRequest } from "http2";

const data = {
    id: 12,
    clientName: 'test'
}

const testData = [];

function get() {
    return data;
}

function post(client) {
    testData.push(client);
}

export default get;