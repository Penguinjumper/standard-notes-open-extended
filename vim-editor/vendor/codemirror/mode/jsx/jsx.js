!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../xml/xml"),require("../javascript/javascript")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../javascript/javascript"],t):t(CodeMirror)}((function(t){"use strict";function e(t,e,n,r){this.state=t,this.mode=e,this.depth=n,this.prev=r}function n(r){return new e(t.copyState(r.mode,r.state),r.mode,r.depth,r.prev&&n(r.prev))}t.defineMode("jsx",(function(r,i){var a=t.getMode(r,{name:"xml",allowMissing:!0,multilineTagIndentPastTag:!1,allowMissingTagName:!0}),o=t.getMode(r,i&&i.base||"javascript");function s(t){var e=t.tagName;t.tagName=null;var n=a.indent(t,"","");return t.tagName=e,n}return{startState:function(){return{context:new e(t.startState(o),o)}},copyState:function(t){return{context:n(t.context)}},token:function n(i,c){return c.context.mode==a?function(i,c,p){if(2==p.depth)return i.match(/^.*?\*\//)?p.depth=1:i.skipToEnd(),"comment";if("{"==i.peek()){a.skipAttribute(p.state);var d=s(p.state),u=p.state.context;if(u&&i.match(/^[^>]*>\s*$/,!1)){for(;u.prev&&!u.startOfLine;)u=u.prev;u.startOfLine?d-=r.indentUnit:p.prev.state.lexical&&(d=p.prev.state.lexical.indented)}else 1==p.depth&&(d+=r.indentUnit);return c.context=new e(t.startState(o,d),o,0,c.context),null}if(1==p.depth){if("<"==i.peek())return a.skipAttribute(p.state),c.context=new e(t.startState(a,s(p.state)),a,0,c.context),null;if(i.match("//"))return i.skipToEnd(),"comment";if(i.match("/*"))return p.depth=2,n(i,c)}var x,f=a.token(i,p.state),l=i.current();return/\btag\b/.test(f)?/>$/.test(l)?p.state.context?p.depth=0:c.context=c.context.prev:/^</.test(l)&&(p.depth=1):!f&&(x=l.indexOf("{"))>-1&&i.backUp(l.length-x),f}(i,c,c.context):function(n,r,i){if("<"==n.peek()&&o.expressionAllowed(n,i.state))return o.skipExpression(i.state),r.context=new e(t.startState(a,o.indent(i.state,"","")),a,0,r.context),null;var s=o.token(n,i.state);if(!s&&null!=i.depth){var c=n.current();"{"==c?i.depth++:"}"==c&&0==--i.depth&&(r.context=r.context.prev)}return s}(i,c,c.context)},indent:function(t,e,n){return t.context.mode.indent(t.context.state,e,n)},innerMode:function(t){return t.context}}}),"xml","javascript"),t.defineMIME("text/jsx","jsx"),t.defineMIME("text/typescript-jsx",{name:"jsx",base:{name:"javascript",typescript:!0}})}));