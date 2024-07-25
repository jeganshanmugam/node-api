const EventEmitter = require('events')

const emitter = new EventEmitter();

emitter.on('messageLogged', () => {
    console.log('Event logged here');

})

emitter.emit('messageLogged');


emitter.on('messageLogged2', (arg : object) => {
    console.log('Event messageLogged2 is logged here with',arg);

})

emitter.emit('messageLogged2',{
    id : 1,
    url : "http://blahblahblah"
});