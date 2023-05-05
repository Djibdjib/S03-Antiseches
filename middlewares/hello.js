const hello = (request, response, next) => {
    console.log("Hello les Webbinous");
    next();
};

module.exports = hello;
