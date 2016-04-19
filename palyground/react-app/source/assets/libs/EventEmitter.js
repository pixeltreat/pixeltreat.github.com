/* jshint esnext:true */

class EventEmitter {
    constructor() {
        this._events = {};
    }

    on(eventType, callback) {
        //let currentEvent = this._events[eventType];

        this._events[eventType] = this._events[eventType] || [];
        this._events[eventType].push(callback);
    }

    off(eventType, callback) {
        let currentEvent = this._events[eventType];

        if (currentEvent) {
            currentEvent.splice(currentEvent.indexOf(callback), 1);
        }
    }

    trigger(eventType) {
        let currentEvent = this._events[eventType];

        if (currentEvent) {
            currentEvent.forEach(_callListener);
        }
    }
}

function _callListener(callback) {
    //element, index, array
    callback();
}

export default EventEmitter;