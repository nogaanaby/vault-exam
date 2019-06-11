const EventEmitter = require('events');
//const eventBusLogger = require('../../utils/Loggers/eventBusLogger');
class EventBus extends EventEmitter {
  emit(type, ...args) {
    //eventBusLogger.info(type + ' emitted');
    super.emit(type, ...args);
  }
  on(type, ...args) {
    //eventBusLogger.info(type + ' on');
    super.on(type, ...args);
  }
}
exports.eventBus = new EventBus();
// eventBus.on('event', () => {
//   console.log('an event occurred!');
// });
// eventBus.emit('event');
