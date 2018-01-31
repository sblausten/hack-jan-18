import request from "request";
import {saveMessage} from "./elasticsearch";
import {inspect} from "babel-core/lib/util";

const PAGE_ACCESS_TOKEN = 'EAACZCH66FWwUBAOQmN4bZCgvuqymm1onbP6EaolJJJ6iTGxvZBzCwAWZBtRiNetZClNMSCm6UYc3pZCfAE3mw6PoZAKPZAwvnq7OnOK4KyFnft8SA2snDxZCEG3EzKVmUHz9xBwo6DvsCSOTIQZBAGdSqcZBVbc5OKRc4bBxBf0AKx0YQZDZD';

export function handleMessage(sender_psid, received_message) {
    let response;

    if (received_message.text) {
        console.log("\n-------------\n" +
            "NEW MESSAGE:\n" +
            inspect(received_message));

        saveMessage(sender_psid, received_message);

        // Create the payload for a basic text message, which
        // will be added to the body of our request to the Send API
        response = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "button",
                    "text": "Thanks for your contribution! Want to know if we decide to use your story an any way?",
                    "buttons": [
                        {
                            "type": "postback",
                            "title": "Yes!",
                            "payload": "yes",
                        },
                        {
                            "type": "postback",
                            "title": "No!",
                            "payload": "no",
                        }
                    ]
                }
            }
        }
    }

    callSendAPI(sender_psid, response);
}

export function handlePostback(sender_psid, received_postback) {
    console.log('ok')
    let response;
    let payload = received_postback.payload;

    if (payload === 'yes') {
        response = {"text": "Ok great - we'll respond here as soon as we decide anything. Thanks again!"}
    } else if (payload === 'no') {
        response = {"text": "Ok, no worries. Thanks again for your submission!"}
    }
    callSendAPI(sender_psid, response);
}

export function callSendAPI(sender_psid, response) {
    let request_body = {
        "recipient": {
            "id": sender_psid
        },
        "message": response
    }

    request({
        "uri": "https://graph.facebook.com/v2.6/me/messages",
        "qs": {"access_token": PAGE_ACCESS_TOKEN},
        "method": "POST",
        "json": request_body
    }, (err, res, body) => {
        if (!err) {
            console.log('message sent!')
            console.log(body);
        } else {
            console.error("Unable to send message:" + err);
        }
    });
}