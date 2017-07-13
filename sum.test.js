const sum = require('./sum')

test('adds 1 + 2 to equal 3',() => {
    expect(sum(1, 2)).toBe(3)
})

test('adds 1 + 100 to equal 101',() => {
    expect(sum(1, 100)).toBe(101)
})

test('adds 1 + 101 to equal 101',() => {
    expect(sum(1, 101)).toBe(101)
})