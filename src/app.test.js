const checkNames = require('./app')

test('la méthode checkNames reçoit un tableau vide et renvoie un tableau vide', () => {
    expect(checkNames([])).toEqual([])
})

test('la méthode checkNames reçoit un tableau contenant Momo, Hadji et Leo et renvoie un tableau contenant Momo, Hadji, Leo', () => {
    expect(checkNames(['Momo', 'Hadji', 'Leo'])).toEqual([
        'Momo',
        'Hadji',
        'Leo',
    ])
})

test('la méthode checkNames reçoit un tableau contenant JC, Leo et xena,  et renvoie un tableau contenant JC et Leo', () => {
    expect(checkNames(['JC', 'Leo', 'xena'])).toEqual(['JC', 'Leo'])
})

test('La méthode checkNames reçoit un tableau contenant DMX, Xzibit et JeanKevin,  et renvoie un tableau contenant JeanKevin', () => {
    expect(checkNames(['DMX', 'Xzibit', 'JeanKevin'])).toEqual(['JeanKevin'])
})
