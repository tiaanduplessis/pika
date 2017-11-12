import pika from '../src'

test('should export function', () => {
  expect(pika).toBeDefined()
  expect(typeof pika).toBe('function')
})

test('should select DOM elements', () => {
  document.body.innerHTML = `<div class="foo" >
      <span id="baz" />
      <button id="bar" />
    </div>`

  expect(pika('body')).toMatchSnapshot()
  expect(pika('head')).toMatchSnapshot()
  expect(pika('div')).toMatchSnapshot()
  expect(pika('.foo')).toMatchSnapshot()
  expect(pika('#baz')).toMatchSnapshot()
  expect(pika('span')).toMatchSnapshot()
})
