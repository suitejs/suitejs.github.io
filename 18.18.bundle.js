/*! Last update: Sat Aug 27 2016 14:38:58 GMT+0800 (CST) */
webpackJsonp([18],{401:function(s,a,n){"use strict";function t(s){return s&&s.__esModule?s:{"default":s}}Object.defineProperty(a,"__esModule",{value:!0});var e=n(3),l=t(e),c=(n(161),n(254)),p=n(335),i=l["default"].createClass({displayName:"PageGettingStarted",render:function(){return l["default"].createElement(c.Content,null,l["default"].createElement(c.Row,null,l["default"].createElement(c.Col,{md:12},l["default"].createElement(p.Markdown,null,n(402)))))}});a["default"]=i},402:function(s,a){s.exports='<h3 id=->安装</h3> <p><code>Suite</code> 是基于 <a href=http://facebook.github.io/react/ >React</a> 开发的一套UI组件，需安装 <code>React</code> ，然后安装 Suite。</p> <div class=doc-highlight><pre><code class="">npm <span class=hljs-keyword>install</span> react <span class=hljs-comment>--save</span>\nnpm <span class=hljs-keyword>install</span> rsuite <span class=hljs-comment>--save</span></code></pre></div><h3 id=javascript>Javascript</h3> <div class=doc-highlight><pre><code class=javascript><span class=hljs-comment>// ES2015</span>\n<span class=hljs-keyword>const</span> { Button } = <span class=hljs-built_in>require</span>(<span class=hljs-string>\'rsuite\'</span>);\n\n<span class=hljs-comment>// CommonJS</span>\n<span class=hljs-keyword>var</span> Button = <span class=hljs-built_in>require</span>(<span class=hljs-string>\'rsuite\'</span>).Button;\n\n<span class=hljs-comment>// AMD</span>\ndefine([<span class=hljs-string>\'rsuite\'</span>], <span class=hljs-function><span class=hljs-keyword>function</span>(<span class=hljs-params>Suite</span>) </span>{\n  <span class=hljs-keyword>var</span> Button = Suite.Button;\n  ...\n});\n\n\nReactDOM.render(<span class=xml><span class=hljs-tag>&lt;<span class=hljs-name>Button</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>Button</span>&gt;</span></span>, mountNode);</code></pre></div><h3 id=css>CSS</h3> <div class=doc-highlight><pre><code class=xml><span class=hljs-tag>&lt;<span class=hljs-name>link</span> <span class=hljs-attr>rel</span>=<span class=hljs-string>"stylesheet"</span> <span class=hljs-attr>href</span>=<span class=hljs-string>"//t.hypers.com.cn/libs/rsuite/css/0.1.0/rsuite.min.css"</span>&gt;</span></code></pre></div><p><a href=https://github.com/rsuite/rsuite-theme-pagurian>code</a></p> <h3 id=->浏览器支持</h3> <p>针对IE8及以下的浏览器，需要引入 <code>html5shiv</code>、<code>es5-shim</code>, 来处理对 <code>HTML5 标签</code>、<code>ECMAScript5</code> 兼容性问题</p> <div class=doc-highlight><pre><code class=xml><span class=hljs-comment>&lt;!--[if lt IE 9]&gt;\n&lt;script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"&gt;&lt;/script&gt;\n&lt;script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"&gt;&lt;/script&gt;\n&lt;script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js"&gt;&lt;/script&gt;\n&lt;script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js"&gt;&lt;/script&gt;\n&lt;![endif]--&gt;</span></code></pre></div>'}});