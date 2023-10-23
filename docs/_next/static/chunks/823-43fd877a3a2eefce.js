"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[823],{622:function(e,t,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),s=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var r,o={},c=null,h=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)i.call(t,r)&&!a.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:h,props:o,_owner:l.current}}t.jsx=o,t.jsxs=o},7437:function(e,t,n){e.exports=n(622)},8608:function(e,t,n){function r(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}n.d(t,{TU:function(){return E}});let s=r(),i=/[&<>"']/,l=RegExp(i.source,"g"),a=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,o=RegExp(a.source,"g"),c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},h=e=>c[e];function p(e,t){if(t){if(i.test(e))return e.replace(l,h)}else if(a.test(e))return e.replace(o,h);return e}let u=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,g=/(^|[^\[])\^/g;function k(e,t){e="string"==typeof e?e:e.source,t=t||"";let n={replace:(t,r)=>(r=(r="object"==typeof r&&"source"in r?r.source:r).replace(g,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n}function f(e){try{e=encodeURI(e).replace(/%25/g,"%")}catch(e){return null}return e}let d={exec:()=>null};function x(e,t){let n=e.replace(/\|/g,(e,t,n)=>{let r=!1,s=t;for(;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"}),r=n.split(/ \|/),s=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),t){if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("")}for(;s<r.length;s++)r[s]=r[s].trim().replace(/\\\|/g,"|");return r}function m(e,t,n){let r=e.length;if(0===r)return"";let s=0;for(;s<r;){let i=e.charAt(r-s-1);if(i!==t||n){if(i!==t&&n)s++;else break}else s++}return e.slice(0,r-s)}function b(e,t,n,r){let s=t.href,i=t.title?p(t.title):null,l=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){r.state.inLink=!0;let e={type:"link",raw:n,href:s,title:i,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,e}return{type:"image",raw:n,href:s,title:i,text:p(l)}}class w{options;rules;lexer;constructor(e){this.options=e||s}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:m(e,"\n")}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=function(e,t){let n=e.match(/^(\s+)(?:```)/);if(null===n)return t;let r=n[1];return t.split("\n").map(e=>{let t=e.match(/^\s+/);if(null===t)return e;let[n]=t;return n.length>=r.length?e.slice(r.length):e}).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){let t=m(e,"#");this.options.pedantic?e=t.trim():(!t||/ $/.test(t))&&(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=t[0].replace(/^ *>[ \t]?/gm,""),n=this.lexer.state.top;this.lexer.state.top=!0;let r=this.lexer.blockTokens(e);return this.lexer.state.top=n,{type:"blockquote",raw:t[0],tokens:r,text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,s={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");let i=RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),l="",a="",o=!1;for(;e;){let n,r=!1;if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;l=t[0],e=e.substring(l.length);let c=t[2].split("\n",1)[0].replace(/^\t+/,e=>" ".repeat(3*e.length)),h=e.split("\n",1)[0],p=0;this.options.pedantic?(p=2,a=c.trimStart()):(p=(p=t[2].search(/[^ ]/))>4?1:p,a=c.slice(p),p+=t[1].length);let u=!1;if(!c&&/^ *$/.test(h)&&(l+=h+"\n",e=e.substring(h.length+1),r=!0),!r){let t=RegExp(`^ {0,${Math.min(3,p-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),n=RegExp(`^ {0,${Math.min(3,p-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),r=RegExp(`^ {0,${Math.min(3,p-1)}}(?:\`\`\`|~~~)`),s=RegExp(`^ {0,${Math.min(3,p-1)}}#`);for(;e;){let i=e.split("\n",1)[0];if(h=i,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),r.test(h)||s.test(h)||t.test(h)||n.test(e))break;if(h.search(/[^ ]/)>=p||!h.trim())a+="\n"+h.slice(p);else{if(u||c.search(/[^ ]/)>=4||r.test(c)||s.test(c)||n.test(c))break;a+="\n"+h}u||h.trim()||(u=!0),l+=i+"\n",e=e.substring(i.length+1),c=h.slice(p)}}!s.loose&&(o?s.loose=!0:/\n *\n *$/.test(l)&&(o=!0));let g=null;this.options.gfm&&(g=/^\[[ xX]\] /.exec(a))&&(n="[ ] "!==g[0],a=a.replace(/^\[[ xX]\] +/,"")),s.items.push({type:"list_item",raw:l,task:!!g,checked:n,loose:!1,text:a,tokens:[]}),s.raw+=l}s.items[s.items.length-1].raw=l.trimEnd(),s.items[s.items.length-1].text=a.trimEnd(),s.raw=s.raw.trimEnd();for(let e=0;e<s.items.length;e++)if(this.lexer.state.top=!1,s.items[e].tokens=this.lexer.blockTokens(s.items[e].text,[]),!s.loose){let t=s.items[e].tokens.filter(e=>"space"===e.type),n=t.length>0&&t.some(e=>/\n.*\n/.test(e.raw));s.loose=n}if(s.loose)for(let e=0;e<s.items.length;e++)s.items[e].loose=!0;return s}}html(e){let t=this.rules.block.html.exec(e);if(t){let e={type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]};return e}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(/\s+/g," "),n=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(t){if(!/[:|]/.test(t[2]))return;let e={type:"table",raw:t[0],header:x(t[1]).map(e=>({text:e,tokens:[]})),align:t[2].replace(/^\||\| *$/g,"").split("|"),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){let t,n,r,s,i=e.align.length;for(t=0;t<i;t++){let n=e.align[t];n&&(/^ *-+: *$/.test(n)?e.align[t]="right":/^ *:-+: *$/.test(n)?e.align[t]="center":/^ *:-+ *$/.test(n)?e.align[t]="left":e.align[t]=null)}for(t=0,i=e.rows.length;t<i;t++)e.rows[t]=x(e.rows[t],e.header.length).map(e=>({text:e,tokens:[]}));for(n=0,i=e.header.length;n<i;n++)e.header[n].tokens=this.lexer.inline(e.header[n].text);for(n=0,i=e.rows.length;n<i;n++)for(r=0,s=e.rows[n];r<s.length;r++)s[r].tokens=this.lexer.inline(s[r].text);return e}}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:p(t[1])}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;let t=m(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=function(e,t){if(-1===e.indexOf(t[1]))return -1;let n=0;for(let r=0;r<e.length;r++)if("\\"===e[r])r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&--n<0)return r;return -1}(t[2],"()");if(e>-1){let n=0===t[0].indexOf("!")?5:4,r=n+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let n=t[2],r="";if(this.options.pedantic){let e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),b(t,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:r?r.replace(this.rules.inline._escapes,"$1"):r},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(!(e=t[e.toLowerCase()])){let e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return b(n,e,n[0],this.lexer)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r||r[3]&&n.match(/[\p{L}\p{N}]/u))return;let s=r[1]||r[2]||"";if(!s||!n||this.rules.inline.punctuation.exec(n)){let n=[...r[0]].length-1,s,i,l=n,a=0,o="*"===r[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(o.lastIndex=0,t=t.slice(-1*e.length+r[0].length-1);null!=(r=o.exec(t));){if(!(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6]))continue;if(i=[...s].length,r[3]||r[4]){l+=i;continue}if((r[5]||r[6])&&n%3&&!((n+i)%3)){a+=i;continue}if((l-=i)>0)continue;i=Math.min(i,i+l+a);let t=[...e].slice(0,n+r.index+i+1).join("");if(Math.min(n,i)%2){let e=t.slice(1,-1);return{type:"em",raw:t,text:e,tokens:this.lexer.inlineTokens(e)}}let o=t.slice(2,-2);return{type:"strong",raw:t,text:o,tokens:this.lexer.inlineTokens(o)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," "),n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=p(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return n="@"===t[2]?"mailto:"+(e=p(t[1])):e=p(t[1]),{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if("@"===t[2])n="mailto:"+(e=p(t[0]));else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(r!==t[0]);e=p(t[0]),n="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e;return e=this.lexer.state.inRawBlock?t[0]:p(t[0]),{type:"text",raw:t[0],text:e}}}}let _={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:d,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};_._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/,_._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,_.def=k(_.def).replace("label",_._label).replace("title",_._title).getRegex(),_.bullet=/(?:[*+-]|\d{1,9}[.)])/,_.listItemStart=k(/^( *)(bull) */).replace("bull",_.bullet).getRegex(),_.list=k(_.list).replace(/bull/g,_.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+_.def.source+")").getRegex(),_._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",_._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,_.html=k(_.html,"i").replace("comment",_._comment).replace("tag",_._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),_.lheading=k(_.lheading).replace(/bull/g,_.bullet).getRegex(),_.paragraph=k(_._paragraph).replace("hr",_.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_._tag).getRegex(),_.blockquote=k(_.blockquote).replace("paragraph",_.paragraph).getRegex(),_.normal={..._},_.gfm={..._.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},_.gfm.table=k(_.gfm.table).replace("hr",_.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_._tag).getRegex(),_.gfm.paragraph=k(_._paragraph).replace("hr",_.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",_.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_._tag).getRegex(),_.pedantic={..._.normal,html:k("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",_._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:d,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(_.normal._paragraph).replace("hr",_.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",_.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};let y={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:d,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:d,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};y._punctuation="\\p{P}$+<=>`^|~",y.punctuation=k(y.punctuation,"u").replace(/punctuation/g,y._punctuation).getRegex(),y.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,y.anyPunctuation=/\\[punct]/g,y._escapes=/\\([punct])/g,y._comment=k(_._comment).replace("(?:-->|$)","-->").getRegex(),y.emStrong.lDelim=k(y.emStrong.lDelim,"u").replace(/punct/g,y._punctuation).getRegex(),y.emStrong.rDelimAst=k(y.emStrong.rDelimAst,"gu").replace(/punct/g,y._punctuation).getRegex(),y.emStrong.rDelimUnd=k(y.emStrong.rDelimUnd,"gu").replace(/punct/g,y._punctuation).getRegex(),y.anyPunctuation=k(y.anyPunctuation,"gu").replace(/punct/g,y._punctuation).getRegex(),y._escapes=k(y._escapes,"gu").replace(/punct/g,y._punctuation).getRegex(),y._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,y._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,y.autolink=k(y.autolink).replace("scheme",y._scheme).replace("email",y._email).getRegex(),y._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,y.tag=k(y.tag).replace("comment",y._comment).replace("attribute",y._attribute).getRegex(),y._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,y._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,y._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,y.link=k(y.link).replace("label",y._label).replace("href",y._href).replace("title",y._title).getRegex(),y.reflink=k(y.reflink).replace("label",y._label).replace("ref",_._label).getRegex(),y.nolink=k(y.nolink).replace("ref",_._label).getRegex(),y.reflinkSearch=k(y.reflinkSearch,"g").replace("reflink",y.reflink).replace("nolink",y.nolink).getRegex(),y.normal={...y},y.pedantic={...y.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",y._label).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",y._label).getRegex()},y.gfm={...y.normal,escape:k(y.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},y.gfm.url=k(y.gfm.url,"i").replace("email",y.gfm._extended_email).getRegex(),y.breaks={...y.gfm,br:k(y.br).replace("{2,}","*").getRegex(),text:k(y.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class ${tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||s,this.options.tokenizer=this.options.tokenizer||new w,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={block:_.normal,inline:y.normal};this.options.pedantic?(t.block=_.pedantic,t.inline=y.pedantic):this.options.gfm&&(t.block=_.gfm,this.options.breaks?t.inline=y.breaks:t.inline=y.gfm),this.tokenizer.rules=t}static get rules(){return{block:_,inline:y}}static lex(e,t){let n=new $(t);return n.lex(e)}static lexInline(e,t){let n=new $(t);return n.inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let n,r,s,i;for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,(e,t,n)=>t+"    ".repeat(n.length));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),1===n.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),(r=t[t.length-1])&&("paragraph"===r.type||"text"===r.type)?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);continue}if((n=this.tokenizer.fences(e))||(n=this.tokenizer.heading(e))||(n=this.tokenizer.hr(e))||(n=this.tokenizer.blockquote(e))||(n=this.tokenizer.list(e))||(n=this.tokenizer.html(e))){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),(r=t[t.length-1])&&("paragraph"===r.type||"text"===r.type)?(r.raw+="\n"+n.raw,r.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if((n=this.tokenizer.table(e))||(n=this.tokenizer.lheading(e))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let t,n=1/0,r=e.slice(1);this.options.extensions.startBlock.forEach(e=>{"number"==typeof(t=e.call({lexer:this},r))&&t>=0&&(n=Math.min(n,t))}),n<1/0&&n>=0&&(s=e.substring(0,n+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){r=t[t.length-1],i&&"paragraph"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n),i=s.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),(r=t[t.length-1])&&"text"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,r,s,i,l,a;let o=e;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(i=this.tokenizer.rules.inline.reflinkSearch.exec(o));)e.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(i=this.tokenizer.rules.inline.blockSkip.exec(o));)o=o.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(i=this.tokenizer.rules.inline.anyPunctuation.exec(o));)o=o.slice(0,i.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(a=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),(r=t[t.length-1])&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),(r=t[t.length-1])&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if((n=this.tokenizer.emStrong(e,o,a))||(n=this.tokenizer.codespan(e))||(n=this.tokenizer.br(e))||(n=this.tokenizer.del(e))||(n=this.tokenizer.autolink(e))||!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let t,n=1/0,r=e.slice(1);this.options.extensions.startInline.forEach(e=>{"number"==typeof(t=e.call({lexer:this},r))&&t>=0&&(n=Math.min(n,t))}),n<1/0&&n>=0&&(s=e.substring(0,n+1))}if(n=this.tokenizer.inlineText(s)){e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(a=n.raw.slice(-1)),l=!0,(r=t[t.length-1])&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}}return t}}class z{options;constructor(e){this.options=e||s}code(e,t,n){let r=(t||"").match(/^\S*/)?.[0];return(e=e.replace(/\n$/,"")+"\n",r)?'<pre><code class="language-'+p(r)+'">'+(n?e:p(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:p(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n){return`<h${t}>${e}</h${t}>
`}hr(){return"<hr>\n"}list(e,t,n){let r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}listitem(e,t,n){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){let n=t.header?"th":"td",r=t.align?`<${n} align="${t.align}">`:`<${n}>`;return r+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){let r=f(e);if(null===r)return n;let s='<a href="'+(e=r)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>"}image(e,t,n){let r=f(e);if(null===r)return n;let s=`<img src="${e=r}" alt="${n}"`;return t&&(s+=` title="${t}"`),s+=">"}text(e){return e}}class S{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class R{options;renderer;textRenderer;constructor(e){this.options=e||s,this.options.renderer=this.options.renderer||new z,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new S}static parse(e,t){let n=new R(t);return n.parse(e)}static parseInline(e,t){let n=new R(t);return n.parseInline(e)}parse(e,t=!0){let n="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){let e=this.options.extensions.renderers[s.type].call({parser:this},s);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){n+=e||"";continue}}switch(s.type){case"space":continue;case"hr":n+=this.renderer.hr();continue;case"heading":n+=this.renderer.heading(this.parseInline(s.tokens),s.depth,this.parseInline(s.tokens,this.textRenderer).replace(u,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""));continue;case"code":n+=this.renderer.code(s.text,s.lang,!!s.escaped);continue;case"table":{let e="",t="";for(let e=0;e<s.header.length;e++)t+=this.renderer.tablecell(this.parseInline(s.header[e].tokens),{header:!0,align:s.align[e]});e+=this.renderer.tablerow(t);let r="";for(let e=0;e<s.rows.length;e++){let n=s.rows[e];t="";for(let e=0;e<n.length;e++)t+=this.renderer.tablecell(this.parseInline(n[e].tokens),{header:!1,align:s.align[e]});r+=this.renderer.tablerow(t)}n+=this.renderer.table(e,r);continue}case"blockquote":{let e=this.parse(s.tokens);n+=this.renderer.blockquote(e);continue}case"list":{let e=s.ordered,t=s.start,r=s.loose,i="";for(let e=0;e<s.items.length;e++){let t=s.items[e],n=t.checked,l=t.task,a="";if(t.task){let e=this.renderer.checkbox(!!n);r?t.tokens.length>0&&"paragraph"===t.tokens[0].type?(t.tokens[0].text=e+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&"text"===t.tokens[0].tokens[0].type&&(t.tokens[0].tokens[0].text=e+" "+t.tokens[0].tokens[0].text)):t.tokens.unshift({type:"text",text:e+" "}):a+=e+" "}a+=this.parse(t.tokens,r),i+=this.renderer.listitem(a,l,!!n)}n+=this.renderer.list(i,e,t);continue}case"html":n+=this.renderer.html(s.text,s.block);continue;case"paragraph":n+=this.renderer.paragraph(this.parseInline(s.tokens));continue;case"text":{let i=s,l=i.tokens?this.parseInline(i.tokens):i.text;for(;r+1<e.length&&"text"===e[r+1].type;)l+="\n"+((i=e[++r]).tokens?this.parseInline(i.tokens):i.text);n+=t?this.renderer.paragraph(l):l;continue}default:{let e='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw Error(e)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){let e=this.options.extensions.renderers[s.type].call({parser:this},s);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){n+=e||"";continue}}switch(s.type){case"escape":case"text":n+=t.text(s.text);break;case"html":n+=t.html(s.text);break;case"link":n+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break;case"image":n+=t.image(s.href,s.title,s.text);break;case"strong":n+=t.strong(this.parseInline(s.tokens,t));break;case"em":n+=t.em(this.parseInline(s.tokens,t));break;case"codespan":n+=t.codespan(s.text);break;case"br":n+=t.br();break;case"del":n+=t.del(this.parseInline(s.tokens,t));break;default:{let e='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw Error(e)}}}return n}}class T{options;constructor(e){this.options=e||s}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(e){return e}postprocess(e){return e}}class A{defaults=r();options=this.setOptions;parse=this.#e($.lex,R.parse);parseInline=this.#e($.lexInline,R.parseInline);Parser=R;parser=R.parse;Renderer=z;TextRenderer=S;Lexer=$;lexer=$.lex;Tokenizer=w;Hooks=T;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":for(let e of r.header)n=n.concat(this.walkTokens(e.tokens,t));for(let e of r.rows)for(let r of e)n=n.concat(this.walkTokens(r.tokens,t));break;case"list":n=n.concat(this.walkTokens(r.items,t));break;default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{n=n.concat(this.walkTokens(e[r],t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error("extension name required");if("renderer"in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return!1===r&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw Error("extension level must be 'block' or 'inline'");let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new z(this.defaults);for(let n in e.renderer){let r=e.renderer[n],s=t[n];t[n]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=s.apply(t,e)),n||""}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new w(this.defaults);for(let n in e.tokenizer){let r=e.tokenizer[n],s=t[n];t[n]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=s.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new T;for(let n in e.hooks){let r=e.hooks[n],s=t[n];T.passThroughHooks.has(n)?t[n]=e=>{if(this.defaults.async)return Promise.resolve(r.call(t,e)).then(e=>s.call(t,e));let n=r.call(t,e);return s.call(t,n)}:t[n]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=s.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}#e(e,t){return(n,r)=>{let s={...r},i={...this.defaults,...s};!0===this.defaults.async&&!1===s.async&&(i.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),i.async=!0);let l=this.#t(!!i.silent,!!i.async);if(null==n)return l(Error("marked(): input parameter is undefined or null"));if("string"!=typeof n)return l(Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(i.hooks&&(i.hooks.options=i),i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(t=>e(t,i)).then(e=>i.walkTokens?Promise.all(this.walkTokens(e,i.walkTokens)).then(()=>e):e).then(e=>t(e,i)).then(e=>i.hooks?i.hooks.postprocess(e):e).catch(l);try{i.hooks&&(n=i.hooks.preprocess(n));let r=e(n,i);i.walkTokens&&this.walkTokens(r,i.walkTokens);let s=t(r,i);return i.hooks&&(s=i.hooks.postprocess(s)),s}catch(e){return l(e)}}}#t(e,t){return n=>{if(n.message+="\nPlease report this to https://github.com/markedjs/marked.",e){let e="<p>An error occurred:</p><pre>"+p(n.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}}let I=new A;function E(e,t){return I.parse(e,t)}E.options=E.setOptions=function(e){return I.setOptions(e),E.defaults=I.defaults,s=E.defaults,E},E.getDefaults=r,E.defaults=s,E.use=function(...e){return I.use(...e),E.defaults=I.defaults,s=E.defaults,E},E.walkTokens=function(e,t){return I.walkTokens(e,t)},E.parseInline=I.parseInline,E.Parser=R,E.parser=R.parse,E.Renderer=z,E.TextRenderer=S,E.Lexer=$,E.lexer=$.lex,E.Tokenizer=w,E.Hooks=T,E.parse=E,E.options,E.setOptions,E.use,E.walkTokens,E.parseInline,R.parse,$.lex}}]);