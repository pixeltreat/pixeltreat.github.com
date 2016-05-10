/* jshint esnext:true */

/**
 * Event Emitter with JS objects, it won't touch the DOM
 * 
 * @class EventEmitter
 */
class EventEmitter {
    /**
     * Creates an instance of EventEmitter.
     * events property to share between methods
     */
    constructor() {
        this._events = {};
    }

    /**
     * adds event listner
     * @param  {string}   eventType - Event type/name
     * @param  {Function} callback  - Function triggered when event emmitted
     */
    on(eventType, callback) {
        this._events[eventType] = this._events[eventType] || [];
        this._events[eventType].push(callback);
    }

    /**
     * removes event listner
     * @param  {string}   eventType - Event type/name
     * @param  {Function} callback  - Function triggered when event emmitted
     */
    off(eventType, callback) {
        if(this._events[eventType]){
            this._events[eventType].splice(this._events[eventType].indexOf(callback), 1);
        }
    }

    /**
     * triggers event
     * @param  {string}   eventType - Event type/name
     */
    trigger(eventType) {
        if(this._events[eventType]){
            this._events[eventType].forEach( callback => callback() );
        }
    }

}

export default EventEmitter;
