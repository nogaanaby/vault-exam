const { eventBus } = require('./eventBus');
const Vault = require('./sm.json');

 const State = {};
 State.currentState = 'EMPTY';
 //load sm json all the events in this state


 const eventList = new Set();
  Vault.forEach( s => {
    eventList.add(s.transitions)
  })
 
  console.log(eventList)

eventList.forEach(e => {
  eventBus.on(e, () => {
    // check if event is valid in current state
    // if true =>
    //    change state according to the current state
    //    invoke the action according to the current state
  });
});

eventBus.emit('3')
eventBus.emit('4')
eventBus.emit('9')
//eventBus.emit('3')
//eventBus.emit('3')
