!function(){_.isFalsy(gon.previewMode)&&window.addEventListener("message",function(e){var t;if(e.data){try{t=JSON.parse(e.data)}catch(n){return}if(t.name&&"pixlee:tag:by:email"===t.name){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4===this.readyState&&200!==this.status){var e={name:"pixlee:log:to:sentry",type:"action",source:"widget",destination:"parent",data:{messageText:this.responseText,messageExtraFields:{tags:{source:"Analytic Events"}}}};window.parent.postMessage(JSON.stringify(e),"*")}},a.open("POST","https://inbound-analytics.pixlee.com/events/tagByEmail",!0),a.setRequestHeader("Content-type","application/json"),a.send(JSON.stringify({parentURL:e.data.windowLocationHref,uid:e.data.currentPixleeUserId,API_KEY:e.data.apiKey}))}}}.bind(this))}();