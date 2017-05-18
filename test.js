const
pico=require('pico-common/pico-cli'),
ensure= pico.export('pico/test').ensure,
Session=require('./index'),
session=new Session

ensure('ensure session loaded', function(cb){
	cb(null, !!session)
})
ensure('ensure Session addType work', function(cb){
	const type=[1,2]
	Session.addType('test',type)
	cb(null, 2===session.getKeys('test')[1])
})
