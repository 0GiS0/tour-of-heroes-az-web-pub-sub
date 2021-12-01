module.exports = function(context, message) {

    console.log(context.bindingData.request);

    console.log('Request from: ', context.bindingData.request.connectionContext.connectionId);
    console.log('Request message data: ', context.bindingData.request.data);
    console.log('Request message dataType: ', context.bindingData.request.dataType);

    var data = JSON.parse(context.bindingData.request.data);

    context.bindings.actions = {
        "actionName": "sendToAll",
        "data": `${context.bindingData.request.connectionContext.connectionId}: ${data.content}`,
        "dataType": "text"
    }

    context.done();
}