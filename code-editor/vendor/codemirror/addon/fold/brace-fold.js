!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}((function(e){"use strict";e.registerHelper("fold","brace",(function(n,r){var t,i=r.line,o=n.getLine(i);function l(l){for(var f=r.ch,s=0;;){var u=f<=0?-1:o.lastIndexOf(l,f-1);if(-1!=u){if(1==s&&u<r.ch)break;if(t=n.getTokenTypeAt(e.Pos(i,u+1)),!/^(comment|string)/.test(t))return u+1;f=u-1}else{if(1==s)break;s=1,f=o.length}}}var f,s,u,a=l("{"),d=l("[");if(null!=a&&(null==d||d>a))u=a,f="{",s="}";else{if(null==d)return;u=d,f="[",s="]"}var c,g,v=1,p=n.lastLine();e:for(var m=i;m<=p;++m)for(var P=n.getLine(m),k=m==i?u:0;;){var b=P.indexOf(f,k),h=P.indexOf(s,k);if(b<0&&(b=P.length),h<0&&(h=P.length),(k=Math.min(b,h))==P.length)break;if(n.getTokenTypeAt(e.Pos(m,k+1))==t)if(k==b)++v;else if(!--v){c=m,g=k;break e}++k}if(null!=c&&i!=c)return{from:e.Pos(i,u),to:e.Pos(c,g)}})),e.registerHelper("fold","import",(function(n,r){function t(r){if(r<n.firstLine()||r>n.lastLine())return null;var t=n.getTokenAt(e.Pos(r,1));if(/\S/.test(t.string)||(t=n.getTokenAt(e.Pos(r,t.end+1))),"keyword"!=t.type||"import"!=t.string)return null;for(var i=r,o=Math.min(n.lastLine(),r+10);i<=o;++i){var l=n.getLine(i).indexOf(";");if(-1!=l)return{startCh:t.end,end:e.Pos(i,l)}}}var i,o=r.line,l=t(o);if(!l||t(o-1)||(i=t(o-2))&&i.end.line==o-1)return null;for(var f=l.end;;){var s=t(f.line+1);if(null==s)break;f=s.end}return{from:n.clipPos(e.Pos(o,l.startCh+1)),to:f}})),e.registerHelper("fold","include",(function(n,r){function t(r){if(r<n.firstLine()||r>n.lastLine())return null;var t=n.getTokenAt(e.Pos(r,1));return/\S/.test(t.string)||(t=n.getTokenAt(e.Pos(r,t.end+1))),"meta"==t.type&&"#include"==t.string.slice(0,8)?t.start+8:void 0}var i=r.line,o=t(i);if(null==o||null!=t(i-1))return null;for(var l=i;null!=t(l+1);)++l;return{from:e.Pos(i,o+1),to:n.clipPos(e.Pos(l))}}))}));