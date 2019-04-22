const pico = require('pico-common/bin/pico-cli')
const {test} = pico.export('pico/test')
const Session = require('./index')
const session = new Session

test('ensure session loaded', cb => {
	cb(null, !!session)
})
test('ensure Session addType work', cb => {
	const type = [1,2]
	Session.addType('test',type)
	cb(null, 2 === session.getKeys('test')[1])
})
test('ensure Session log is properly populated', cb => {
	session.log('hello', 'world')
	cb(null, true)
})
test('ensure Session error is properly populated', cb => {
	const err = session.error()
	cb(null, 500 === err[0] && 'Internal Server Error' === err[1])
})
