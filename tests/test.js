const fb = require('../fizzbuzz')

test('Fizz buzz constants', () => {
  expect(fb.FIZZ).toBe('fizz')
  expect(fb.BUZZ).toBe('buzz')
  expect(fb.FIZZBUZZ).toBe('fizzbuzz')
})

test('isFizzy returns true if number is divisible by 3', () => {
  expect(fb.isFizzy(3)).toBe(true)
  expect(fb.isFizzy(6)).toBe(true)
  expect(fb.isFizzy(9)).toBe(true)
})

test('isFizzy returns false if number is not divisible by 3', () => {
  expect(fb.isFizzy(2)).toBe(false)
  expect(fb.isFizzy(13)).toBe(false)
  expect(fb.isFizzy(10)).toBe(false)
})

test('isBuzzy returns true if number is divisible by 5', () => {
  expect(fb.isBuzzy(10)).toBe(true)
  expect(fb.isBuzzy(5)).toBe(true)
  expect(fb.isBuzzy(15)).toBe(true)
})

test('isBuzzy returns false if number is not divisible by 5', () => {
  expect(fb.isBuzzy(2)).toBe(false)
  expect(fb.isBuzzy(13)).toBe(false)
  expect(fb.isBuzzy(14)).toBe(false)
})

test('fizzyBuzzy returns true if number is divisible by 15', () => {
  expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz')
  expect(fb.fizzyBuzzy(5)).toBe('buzz')
  expect(fb.fizzyBuzzy(3)).toBe('fizz')
  expect(fb.fizzyBuzzy(13)).toBe('')
})

test('fizzbuzz returns object with fizzybuzziness', () => {
  expect(fb.fizzBuzz(5)).toEqual({
    count: 5, 
    fizz: 1, 
    buzz: 1, 
    fizzBuzz: 0,
  })

  expect(fb.fizzBuzz(15)).toEqual({
    count: 15, 
    fizz: 4, 
    buzz: 2, 
    fizzBuzz: 1,
  })

  expect(fb.fizzBuzz(8)).toEqual({
    count: 8, 
    fizz: 2, 
    buzz: 1, 
    fizzBuzz: 0,
  })

})