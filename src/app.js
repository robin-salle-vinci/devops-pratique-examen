console.log('Hello world');

function checkNames(names) {
    return names.filter(name => name.indexOf('x') == -1); 
}
module.exports = checkNames;