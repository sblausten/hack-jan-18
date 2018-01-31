
import elasticsearch from "elasticsearch";
import moment from "moment";
import {inspect} from "babel-core/lib/util";

const client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

client.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: 1000
}, function (error) {
    if (error) {
        console.trace('elasticsearch cluster is down!');
    } else {
        console.log('All is well');
    }
});

export const saveMessage = (sender_psid, messageBody) => {
    client.create({
        index: 'people-wire',
        type: 'message',
        id: messageBody.mid,
        body: {
            text: messageBody.text,
            npl: messageBody.npl,
            time: moment(),
        }
    }, (error, response) => {
        if(error) {
            console.log("\n ----> Message not saved. Error was " + error.message + "\n\n");
            return;
        }
        if(response) {
            console.log("\n ----> Message saved!" + inspect(response) + "\n\n");
        }
    });
};
