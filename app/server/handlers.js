import request from "request";

const PAGE_ACCESS_TOKEN = 'pEAACZCH66FWwUBAPcWsLi2nIIYrPsBZBwbZCfA1sGsidZBZCxS5NQtj74w0MHLzWoIvq9UjPywtVBL7TyP4K6xqTrMHJhcDx5pCn98ynuRHB9Yd3wpVcqOZAm0gn0MHFUmwx5t8oY7HnhK3tK3fgQs5zXR83wJ9JeL6FybOoinSgwZDZD';

export function handleMessage(sender_psid, received_message) {
    let response;

    if (received_message.text) {
        // Create the payload for a basic text message, which
        // will be added to the body of our request to the Send API
        response = {
            "payload": {
                "template_type":"button",
                "text":"Thanks for your contribution! Want to know if we decide to use your story an any way?",
                "buttons":[
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

    callSendAPI(sender_psid, response);
}

export function handlePostback(sender_psid, received_postback) {
    console.log('ok')
    let response;
    let payload = received_postback.payload;

    if (payload === 'yes') {
        response = { "text": "Ok great - we'll respond here as soon as we decide anything. Thanks again!" }
    } else if (payload === 'no') {
        response = { "text": "Ok, no worries. Thanks again for your submission!" }
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
        "qs": { "access_token": PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": request_body
    }, (err, res, body) => {
        if (!err) {
            console.log('message sent!')
        } else {
            console.error("Unable to send message:" + err);
        }
    });
}