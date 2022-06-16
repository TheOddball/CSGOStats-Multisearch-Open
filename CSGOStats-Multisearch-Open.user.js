// ==UserScript==
// @name           CSGOStats-Multisearch-Open
// @namespace      http://github.com/theoddball
// @author         theoddball
// @version        1.0
// @description    Opens multiple stats pages at once
// @match        http://csgostats.gg/player/multi*
// @match        https://csgostats.gg/player/multi*
// @grant          none
// @homepageURL    https://github.com/theoddball/CSGOStats-Multisearch-Open
// @updateURL      https://raw.githubusercontent.com/theoddball/CSGOStats-Multisearch-Open/master/CSGOStats-Multisearch-Open.user.js
// @downloadURL    https://raw.githubusercontent.com/theoddball/CSGOStats-Multisearch-Open/master/CSGOStats-Multisearch-Open.user.js
// @supportURL     https://github.com/theoddball/CSGOStats-Multisearch-Open/issues
// @require        https://code.jquery.com/jquery-3.6.0.slim.min.js
// ==/UserScript==
var buttonLocation = $("#multi-lookup");
var button = `<button id="button" type="button">Open all stats pages</button>`
buttonLocation.after(button);
$("#button").click(run);
function run() {
    var x = document.querySelectorAll("a");
    for (var i = 0; i < x.length; i++) {
        var cleanlink = x[i].href;
        if (/https:\/\/steamcommunity\.com\/profiles\/.*/g.test(cleanlink)) {
            var openlink = cleanlink.replace("steamcommunity.com/profiles", "csgostats.gg/player");
            window.open(openlink, '_blank');
        }
    }
}
