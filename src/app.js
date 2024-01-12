console.log('Hello world');

function checkNames(names) {
    names.forEach(name => {
        if(name.indexOf('x') != -1) {
            names.pop(name);
        }
    });
    return names;
}
module.exports = checkNames;