console.log('Hello world')

function checkNames(names) {
    return names.filter((name) => name.toLowerCase().indexOf('x') === -1);
};
module.exports = checkNames
