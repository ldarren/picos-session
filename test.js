const
pico=require('pico-common/bin/pico-cli'),
ensure= pico.export('pico/test').ensure,
Session=require('./index'),
session=new Session

ensure('ensure session loaded', cb => {
	cb(null, !!session)
})
ensure('ensure Session addType work', cb => {
	const type=[1,2]
	Session.addType('test',type)
	cb(null, 2===session.getKeys('test')[1])
})
ensure('ensure Session error is properly populated', cb => {
	const err = session.error()
	cb(null, 500 === err[0] && 'Internal Server Error' === err[1])
})
