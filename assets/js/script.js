jQuery(function(n){var o=n("html"),i=n("body");i.on("click",'[data-action="menu"]',function(){n(this).data("action");a(n('[data-target="'+n(this).data("target")+'"]').not("[data-action]"))});var t=!1;function a(a){t=t?(a.removeClass("active"),o.removeClass("menu-active"),setTimeout(function(){a.removeClass("initial"),o.removeClass("menu-initial")},300),!1):(o.addClass("menu-initial"),a.addClass("initial"),setTimeout(function(){o.addClass("menu-active"),a.addClass("active")},1),!0)}function l(){n(".post-list .post .post-image img").each(function(){var a=n(this);a.on("load",function(){a.parents(".post-image").css({height:"0","padding-bottom":100/a.width()*a.height()+"%"})})});var a=n(".post-list").masonry({itemSelector:".post",isAnimated:!1,gutter:0,columnWidth:1,transitionDuration:0}).imagesLoaded().always(function(){a.masonry("layout")})}function d(){n("pre code").each(function(a,t){hljs.highlightBlock(t);var s=n(this),e=s.html().split(/\n/).length,i=[];for(a=1;a<e;a++)i+='<span class="line">'+a+"</span>";s.parent().addClass("codeblock").append('<div class="lines">'+i+"</div>")})}function r(){document.querySelectorAll(".kg-gallery-image img").forEach(function(a){var t=a.closest(".kg-gallery-image"),s=a.attributes.width.value/a.attributes.height.value;t.style.flex=s+" 1 0%"})}function c(){n("#wrapper").fitVids()}function u(){if("undefined"!=typeof disqus&&document.getElementById("disqus_thread")){if(window.DISQUS)return DISQUS.reset({reload:!0,config:function(){this.page.identifier=location.pathname,this.page.url=location.origin+location.pathname}});n.ajax({type:"GET",url:"//"+disqus+".disqus.com/embed.js",dataType:"script",cache:!0})}else n(".post-comments").css({display:"none"})}function h(){n('a[href^="'+window.location.origin+'"], .post-image a, .post-title a, .post-more a, .post-meta a, .post-tags a, #pagination a').each(function(){var a=n(this);a.hasClass("rss")||(a.addClass("js-ajax-link"),-1<a.attr("href").indexOf("page")&&a.addClass("js-archive-index"),a.attr("href")!==window.location.origin&&a.attr("href")!==window.location.origin+"/"&&"/"!==a.attr("href")||a.addClass("js-home-index"),-1<a.attr("href").indexOf("tag")&&a.addClass("js-tag-index"),-1<a.attr("href").indexOf("author")&&a.addClass("js-author-index"))})}i.on("click",".overlay, #menu a",function(){o.hasClass("menu-active")&&a(n('[data-target="menu"]').not("[data-action]"))}),l(),d(),r(),c(),u(),h();var p=window.History,m=!1,f=n("#ajax-container");if(!p.enabled)return!1;p.Adapter.bind(window,"statechange",function(){o.addClass("loading");var a=p.getState();n.get(a.url,function(a){var t=n(a),s=n("#ajax-container",t).contents(),e=a.match(/<title>(.*?)<\/title>/)[1];f.fadeOut(500,function(){o.hasClass("push-next")&&(o.removeClass("push-next"),o.addClass("pushed-next")),o.hasClass("push-prev")&&(o.removeClass("push-prev"),o.addClass("pushed-prev")),document.title=n("<textarea/>").html(e).text(),f.html(s),i.removeClass(),i.addClass(n("#body-class").attr("class")),NProgress.done(),f.fadeIn(500),n(document).scrollTop(0),setTimeout(function(){o.removeClass("loading").removeClass("post-loading")},50),l(),h(),d(),r(),c(),u(),m=!1})})}),n("body").on("click",".js-ajax-link",function(a){a.preventDefault();var t=n(this);if(t.hasClass("post-nav-item")||t.hasClass("pagination-item")?((t.hasClass("post-nav-next")||t.hasClass("pagination-next"))&&(o.removeClass("pushed-prev"),o.addClass("push-next")),(t.hasClass("post-nav-prev")||t.hasClass("pagination-prev"))&&(o.removeClass("pushed-next"),o.addClass("push-prev"))):(o.removeClass("pushed-next"),o.removeClass("pushed-prev")),!1===m){var s=p.getState(),e=n(this).prop("href"),i=n(this).attr("title")||null;e.replace(/\/$/,"")!==s.url.replace(/\/$/,"")&&(m=!0,o.addClass("loading"),NProgress.start(),p.pushState({},i,e))}}),n("body").on("click","#post-index .post .js-ajax-link",function(){o.addClass("post-loading");var a=n(this).parents(".post");a.addClass("initial"),setTimeout(function(){a.addClass("active")},1)})});