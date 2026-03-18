(function () {
    'use strict';

    // Prevent conflict if both lampac and alcopac on.js are loaded
    if (window.alcopac_onjs) return;
    window.alcopac_onjs = true;
    window.alcopac = true;

    var timer = setInterval(function(){
        if(typeof Lampa !== 'undefined'){
            clearInterval(timer);

            var unic_id = Lampa.Storage.get('lampac_unic_id', '');
            if (!unic_id) {
              unic_id = Lampa.Utils.uid(8).toLowerCase();
              Lampa.Storage.set('lampac_unic_id', unic_id);
            }

            Lampa.Utils.putScriptAsync([{plugins}], function() {});
        }
    },200);
})();