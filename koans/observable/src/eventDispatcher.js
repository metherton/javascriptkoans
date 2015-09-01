'use strict';

var SAMURAIPRINCIPLE = SAMURAIPRINCIPLE || {};
SAMURAIPRINCIPLE.eventDispatcher = function(base) {

    var myListeners = [];

    base.addEventListener = function(listener) {
        myListeners.push(listener);
    };

    base.listener = function() {
        return myListeners[0];
    };

    base.dispatchEvent = function(event) {
        myListeners.forEach(function(myListener) {
            myListener(event);
        });
    };

    return base;
};

