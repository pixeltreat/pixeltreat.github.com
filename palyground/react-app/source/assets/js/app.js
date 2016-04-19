/* jshint esnext:true */
'use strict';

import EventEmitter from './EventEmitter';
import Forum from './components/Forum';

(function (){
    document.addEventListener('DOMContentLoaded', domReady, false);

    function domReady() {
        var pageView = document.querySelector('#page-view');
        var forumEle = React.createElement(Forum, null);
        var emit = new EventEmitter();

        // render page view
        ReactDOM.render(forumEle, pageView);

        // emit.on('APP_START', function(){
        //     console.log('app started1');
        // });
        //
        // emit.on('APP_START', function(){
        //     console.log('app started2');
        // });
        //
        // emit.trigger('APP_START');
    }
})();
