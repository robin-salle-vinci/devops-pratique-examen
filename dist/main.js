;(() => {
    var r = {
            672: (r) => {
                console.log('Hello world'),
                    (r.exports = function (r) {
                        return r.filter(
                            (r) => -1 === r.toLowerCase().indexOf('x')
                        )
                    })
            },
        },
        o = {}
    !(function e(t) {
        var n = o[t]
        if (void 0 !== n) return n.exports
        var s = (o[t] = { exports: {} })
        return r[t](s, s.exports, e), s.exports
    })(672)
})()
