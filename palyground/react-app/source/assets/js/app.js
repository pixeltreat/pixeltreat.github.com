'use strict';

import Forum from './components/Forum.js';

(function (){
    document.addEventListener('DOMContentLoaded', domReady, false);

    function domReady() {
        var pageView = document.querySelector('#page-view');
        var forumEle = React.createElement(Forum, null);

        // render page view
        ReactDOM.render(forumEle, pageView);
    }
})();


