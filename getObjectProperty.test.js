const getObjectProperty = require('./getObjectProperty')

describe("getObjectProperty function", () => {
    const obj = {
        'pupa': {
            'lupa': {
                'beep': 'boop',
            },
                'foo': 'bar'
        }
    }

    test("input 1", () => {
        expect(getObjectProperty(obj, "pupa.lupa")).toStrictEqual({beep: 'boop'})
    })

    test("input 2", () => {
        expect(getObjectProperty(obj, "pupa.lupa.beep")).toStrictEqual('boop')
    })

    test("input 3", () => {
        expect(getObjectProperty(obj, "pupa.foo")).toStrictEqual('bar')
    })

    test("input 4", () => {
        expect(getObjectProperty(obj, "pupa.ne.tuda")).toStrictEqual(undefined)
    })

    test("input 5", () => {
        expect(getObjectProperty(obj, "pupa.ne.tuda", true)).toStrictEqual(true)
    })

    test("input 6", () => {
        expect(getObjectProperty(obj, "pupa.ne.tuda", "Default value")).toStrictEqual('Default value')
    })
  });