!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var r,i,f,u,a,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function O(e){return c=e,a=setTimeout(h,t),d?b(e):u}function T(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=f}function h(){var e=g();if(T(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-l);return s?p(n,f-(e-c)):n}(e))}function w(e){return a=void 0,v&&r?b(e):(r=i=void 0,u)}function E(){var e=g(),n=T(e);if(r=arguments,i=this,l=e,n){if(void 0===a)return O(l);if(s)return a=setTimeout(h,t),b(l)}return void 0===a&&(a=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,f=(s="maxWait"in n)?m(j(n.maxWait)||0,t):f,v="trailing"in n?!!n.trailing:v),E.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=i=a=void 0},E.flush=function(){return void 0===a?u:w(g())},E}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||a.test(t)?l(t.slice(2),o?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var O={formEl:document.querySelector(".feedback-form")},T={},h="feedback-form-state";O.formEl.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(T))}),500)),O.formEl.addEventListener("submit",(function(e){e.preventDefault(),console.log(T),e.currentTarget.reset(),localStorage.removeItem(h)})),function(){if(T=JSON.parse(localStorage.getItem(h))||{})for(var e in T)O.formEl[e].value=T[e]}()}();
//# sourceMappingURL=03-feedback.df38d772.js.map
