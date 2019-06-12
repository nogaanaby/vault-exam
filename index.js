const { eventBus } = require('./eventBus');
const Vault = require('./sm.json');
const actions = require('./actions.js');

 const State = {};
 State.currentState = 'FirstTry_D1';
 //load sm json all the events in this state


 const eventList = new Set();
  Vault.forEach( s => {
    s.transitions.forEach((t)=>eventList.add(t.on))
  })


eventList.forEach(e => {
  eventBus.on(e, () => {
    // check if event is valid in current state
    const stateStuff = Vault.find((s) =>s.name === State.currentState )
    if(stateStuff) {
      const stateTransition = stateStuff.transitions.find((t) =>t.on === e )
      if(stateTransition.on === e ) {
          console.log("state change: ", State.currentState, stateTransition.to)
          State.currentState = stateTransition.to;
          if(stateTransition.action){ //if action exsist
            actions[stateTransition.action]() //invoke the action according to the current state
          }
        }
    }
  });
});

eventBus.emit('1')
eventBus.emit('2')
eventBus.emit('2')
eventBus.emit('3')


