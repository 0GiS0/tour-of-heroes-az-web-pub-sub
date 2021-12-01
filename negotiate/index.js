module.exports = async function(context, req, connection) {
    context.res = { body: connection }
    context.done();
}