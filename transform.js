let exports = {};

/**
 * Handles the request object and constructs the request body
 * @param {Object} event - The event object containing the request and preset parameters
 * @param {Object} event.requestObject - The Zoom request data
 * @param {Object} event.presetParameters - The request parameters configured in the App(Connect - Endpoints),
 *                                          Its structure typically includes:
 *                                          {
 *                                            body: {any} | null,    // Request body, can be any type or null
 *                                            header: Object,       // HTTP headers as key-value pairs
 *                                            path: Object,          // Path parameters as key-value pairs
 *                                            query: Object          // Query parameters as key-value pairs
 *                                          }
 * @returns {Object} - An object containing the constructed requestBody
 */
exports.requestObjectHandler = (event) => {
    const { requestObject, presetParameters } = event;

    // Build your requestBody here using presetParameters and requestObject
    // Please note: Currently, you cannot directly reference variables using {{custom.your-field-id}} within the script.
    // Instead, you need to add the corresponding key-value pair in the Endpoint - Body section,
    // then reference the form field indirectly using presetParameters.body.your-body-key.
    //   const requestBody = {
    //       ...event.requestObject
    //   };

    // const requestBody = {
    //     "token": "xuMZShcBmzQauVQBmzQauesQ5k87T44fTfUg80MCHUg",
    //     // state is effectively conversationId
    //     "state": "eyJjb252ZXJzYXRpb25JRCI6ImF1ZGl0LTAxS0pYREswV1dXQVdSMTdFUzAyOVoyQ1pSIiwiZW5jcnlwdGlvbktleSI6InU1TzdvUklaYzkzclpHT0RiWmg4MHZyWHFCQU5PY2xHY0I0UXRaTHBtYnc9In0",
    //     "disableStreaming": true,
    //     "clientEvent": {
    //         "type": "message",
    //         "message": {
    //             "content": "Hello, agent!"
    //         }
    //     }
    // };

    return { ...event.requestBody };
};

/**
 * Handles the response object and transforms Zoom's response to the required format
 * @param {Object} event - The event object containing the responseBody
 * @returns {Object} - An object containing the transformed response body as 'body'
 */
exports.responseObjectHandler = (event) => {
    const { responseBody } = event;

    // Transform the response data
    const zoomResponseBody = {
        "body": [
            {
                "type": "text",
                "value": "Hello this is a test response body from transform.js"
            }
        ],
        "timestamp": 1753769993967,
        "sessionId": "1OwnPI80S7yA0IIIx4VDag",
        "userId": "GKXVAPIETRiloXbT7wVWVg",
        "id": "3Qtgd8AlTs-X8TWMGRZjBA",
        "customData": {
            "flowId": "LPIjJBJJTIyYBCtLkb2riQ",
            "engagementId": "MhRO2x6TRPuXbT56Z5ja7w",
            "sessionId": "stf7kw0rr2-jcaol4ou_nw",
            "chatSessionId": "1OwnPI80S7yA0IIIx4VDag",
            "trackingid": "ccizp_1NIKolzzS6mmWeB_EcwTGg"
        }
    };

    return { ...zoomResponseBody };
};

return exports;