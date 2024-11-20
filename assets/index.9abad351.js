import{m as c,l as d,j as h,a as u,e as f,s as r,b as p,c as m,d as v}from"./vendor.36c92e7d.js";const g=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}};g();c.initialize({startOnLoad:!1});d.registerLanguage("javascript",h);d.registerLanguage("json",u);class l extends f.exports.EventEmitter{constructor(t){super();this.slides=l.htmlToSlides(t),console.log(this.slides),this.initControls();const e=parseInt(window.location.hash.replace("#",""),10);this.showSlide(Number.isNaN(e)?0:e),r("nav").on("mouseenter",()=>l.fadeInNav()).on("mouseleave",()=>{l.fadeOutNav()})}updateNav(){r("nav").selectAll("div").data(this.slides,t=>t.index).join(t=>t.append("div").classed("title-slide",e=>e.isTitleSlide).text(e=>e.page+1).on("click",(e,i)=>this.showSlide(i.page))).classed("selected",t=>this.currentSlide===t),l.fadeInNav(),l.fadeOutNav()}static fadeInNav(){r("nav").selectAll("div").interrupt("fadeout").transition().style("transform",void 0).style("opacity",1)}static fadeOutNav(){r("nav").selectAll("div").interrupt("fadeout").transition("fadeout").delay(3e3).style("transform","scale(0.1)rotate(-90deg)").style("opacity",0)}showSlide(t){const e=Math.max(0,Math.min(t,this.slides.length-1));window.location.hash=`${e}`,this.currentSlide!==this.slides[e]&&(this.slideSelection=r("main").selectAll("main > div"),this.currentSlide=this.slides[e],this.updateNav(),r("main").classed("title-slide",this.currentSlide.isTitleSlide),this.slideSelection.data([this.currentSlide],i=>`${i.page}`).join(i=>i.append("div").classed("title-slide",s=>s.isTitleSlide).html(s=>s.html),i=>i,i=>i.call(l.fadeOutSlide)).call(l.fadeInSlide),this.emit("slideChanged",e),r("title").text(this.currentSlide.title))}static fadeInSlide(t){return t.selectAll("code").nodes().forEach(e=>d.highlightBlock(e)),t.selectAll("div.hljs").on("click",function(e,i){navigator.clipboard.writeText(this.innerText)}),t.selectAll("div > *").style("opacity",0).style("transform","rotate(-5deg)").interrupt().transition().duration(600).ease(p).delay((e,i)=>300+i*100).style("transform",void 0).style("opacity",void 0).call(()=>{c.run()})}static fadeOutSlide(t){return t.selectAll("div > *").interrupt().transition().duration(600).ease(m).delay((e,i)=>i*100).style("transform","translate(40px,-10px)").style("opacity",0).end().then(()=>t.remove()).catch(()=>{})}initControls(){window.addEventListener("keydown",t=>{const e=this.slides.indexOf(this.currentSlide);switch(t.code){case"ArrowLeft":this.showSlide(e-1);break;case"ArrowRight":this.showSlide(e+1);break}})}static htmlToSlides(t){return t.split("<hr>").map((e,i)=>({page:i,isTitleSlide:e.includes("<h1"),html:e.replace(/<pre>/g,'<div class="hljs">').replace(/<\/pre>/g,"</div>"),title:e.match(/<h\d\s(.*?)>(.*?)<\/h\d>/)?e.match(/<h\d\s(.*?)>(.*?)<\/h\d>/)[2]:"Presentomatic"}))}}(async()=>{const o=await(await fetch("PRESENTATION.md")).text(),t=v.parse(o);new l(t)})();