function d(){typeof window.console!="undefined"&&window.console.log("DEBUG:",arguments)}function f(a){this.e=a;this.b=[]}function g(a,b){a.b.push(b)}function h(a){this.a=a}function i(a){function b(){a.a.setTime(new Date)}a.i=setInterval(b,1E3);b()}function j(a){this.c=new f(this);this._data=a||{}}j.prototype.getTime=function(){return this._data.g};j.prototype.setTime=function(a){this._data.g=a;for(var b=this.c,c=0;c<b.b.length;++c)b.b[c](b.e,a)};
function k(a,b,c){this.h=b;this.a=a;this.d=c;var e=this;g(this.a.c,function(){e.d.f.html("The Time Is: "+e.a.getTime().toString())})}$(document).ready(function(){var a=document.getElementsByTagName("html")[0].getAttribute("id");d("document.ready :: "+a);var b,c={};switch(a){default:c.f=$("#output");b=new j;a=new h(b);new k(b,a,c);i(a)}});