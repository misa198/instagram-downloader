const insPostRegex=new RegExp(/(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\/p\/([A-Za-z0-9-_]+)/),storyRegex=new RegExp(/(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\/stories\/([A-Za-z0-9-_]+)/);chrome.tabs.onActivated.addListener(function(t){chrome.tabs.get(t.tabId,function(o){void 0===o.url?(chrome.browserAction.setPopup({tabId:t.tabId,popup:"background/template/index.html"}),chrome.browserAction.setIcon({path:"logo64-disabled.png",tabId:t.tabId})):null===o.url.match(insPostRegex)&&null===o.url.match(storyRegex)?(chrome.browserAction.setPopup({tabId:t.tabId,popup:"background/template/index.html"}),chrome.browserAction.setIcon({path:"logo64-disabled.png",tabId:t.tabId})):(chrome.browserAction.setPopup({tabId:t.tabId,popup:"index.html"}),chrome.browserAction.setIcon({path:"logo64.png",tabId:t.tabId}))})}),chrome.tabs.onUpdated.addListener(function(t,o,e){void 0!==e.url&&(null===e.url.match(insPostRegex)&&null===e.url.match(storyRegex)?(chrome.browserAction.setPopup({tabId:t,popup:"background/template/index.html"}),chrome.browserAction.setIcon({path:"logo64-disabled.png",tabId:t})):(chrome.browserAction.setPopup({tabId:t,popup:"index.html"}),chrome.browserAction.setIcon({path:"logo64.png",tabId:t})))});