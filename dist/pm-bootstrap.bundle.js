(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{7:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.r(t);var s=function(){function e(t,n){c(this,e),this._render=n,this._element=t}return u(e,[{key:"initialRender",value:function(e){return new l(o({},e),this._element,this._render)}}]),e}(),l=function(){function e(t,n,r){c(this,e),this._state=Object.freeze(t),this._element=n,this._render=r,window.state=this._state;var o=r(this._state);n.innerHTML=o}return u(e,[{key:"update",value:function(t){var n=o({},this._state);return t(n),new e(n,this._element,this._render)}}]),e}();n.d(t,"engine",(function(){return p}));var p=new s(document.getElementById("app"),(function(e){var t=e.array,n=e.name,r=e.count;return"<h1>Hello ".concat(n,'</h1>\n <input value="').concat(n,'" onInput="state.commands.setName(event.target.value)"></input>\n <p>').concat(n.length,"</p>\n <p>").concat(r,'</p><button onClick="state.commands.add()">My button</button>\n <ul>').concat(t.map((function(e){return"<li>".concat(e,"</li>")})).join(""),"</ul>")}))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWV3b3Jrcy9wbS9pbmZyYS9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1ld29ya3MvcG0vYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXdvcmtzL3BtL3JlbmRlci5qcyJdLCJuYW1lcyI6WyJVaUVuZ2luZSIsImVsZW1lbnQiLCJyZW5kZXIiLCJ0aGlzIiwiX3JlbmRlciIsIl9lbGVtZW50Iiwic3RhdGUiLCJWaWV3IiwiX3N0YXRlIiwiT2JqZWN0IiwiZnJlZXplIiwid2luZG93IiwiaHRtbCIsImlubmVySFRNTCIsInVwZGF0ZXIiLCJuZXdTdGF0ZSIsImVuZ2luZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcnJheSIsIm5hbWUiLCJjb3VudCIsImxlbmd0aCIsIm1hcCIsInZhbHVlIiwiam9pbiJdLCJtYXBwaW5ncyI6InVsQ0FBTUEsRSxXQUNKLFdBQVlDLEVBQVNDLEdBQVEsVUFDM0JDLEtBQUtDLFFBQVVGLEVBQ2ZDLEtBQUtFLFNBQVdKLEUsZ0RBR0pLLEdBQ1osT0FBTyxJQUFJQyxFQUFKLEtBQWNELEdBQVNILEtBQUtFLFNBQVVGLEtBQUtDLGEsS0FJaERHLEUsV0FDSixXQUFZRCxFQUFPTCxFQUFTQyxHQUFRLFVBQ2xDQyxLQUFLSyxPQUFTQyxPQUFPQyxPQUFPSixHQUM1QkgsS0FBS0UsU0FBV0osRUFDaEJFLEtBQUtDLFFBQVVGLEVBQ2ZTLE9BQU9MLE1BQVFILEtBQUtLLE9BQ3BCLElBQU1JLEVBQU9WLEVBQU9DLEtBQUtLLFFBQ3pCUCxFQUFRWSxVQUFZRCxFLHlDQUdmRSxHQUNMLElBQU1DLEVBQVcsRUFBSCxHQUFRWixLQUFLSyxRQUUzQixPQURBTSxFQUFRQyxHQUNELElBQUlSLEVBQUtRLEVBQVVaLEtBQUtFLFNBQVVGLEtBQUtDLGEsS0N4QmxELHVDQUdBLElBQ01ZLEVBQVMsSUFBSWhCLEVBREhpQixTQUFTQyxlQUFlLFFDSHhDLFlBQXdDLElBQXRCQyxFQUFzQixFQUF0QkEsTUFBT0MsRUFBZSxFQUFmQSxLQUFNQyxFQUFTLEVBQVRBLE1BQzdCLDBCQUFvQkQsRUFBcEIsaUNBQ2VBLEVBRGYsZ0ZBRUlBLEVBQUtFLE9BRlQscUJBR0lELEVBSEosK0VBSUtGLEVBQU1JLEtBQUksU0FBQUMsR0FBSyxvQkFBV0EsRUFBWCxZQUF5QkMsS0FBSyxJQUpsRCIsImZpbGUiOiJwbS1ib290c3RyYXAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVWlFbmdpbmUge1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHJlbmRlcikge1xyXG4gICAgdGhpcy5fcmVuZGVyID0gcmVuZGVyO1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsUmVuZGVyKHN0YXRlKSB7XHJcbiAgICByZXR1cm4gbmV3IFZpZXcoeyAuLi5zdGF0ZSB9LCB0aGlzLl9lbGVtZW50LCB0aGlzLl9yZW5kZXIpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVmlldyB7XHJcbiAgY29uc3RydWN0b3Ioc3RhdGUsIGVsZW1lbnQsIHJlbmRlcikge1xyXG4gICAgdGhpcy5fc3RhdGUgPSBPYmplY3QuZnJlZXplKHN0YXRlKTtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5fcmVuZGVyID0gcmVuZGVyO1xyXG4gICAgd2luZG93LnN0YXRlID0gdGhpcy5fc3RhdGU7XHJcbiAgICBjb25zdCBodG1sID0gcmVuZGVyKHRoaXMuX3N0YXRlKTtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh1cGRhdGVyKSB7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4udGhpcy5fc3RhdGUgfTtcclxuICAgIHVwZGF0ZXIobmV3U3RhdGUpO1xyXG4gICAgcmV0dXJuIG5ldyBWaWV3KG5ld1N0YXRlLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9yZW5kZXIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVWlFbmdpbmUgfTtcclxuIiwiaW1wb3J0IHsgVWlFbmdpbmUgfSBmcm9tIFwiLi9pbmZyYS9lbmdpbmVcIjtcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vcmVuZGVyXCI7XHJcblxyXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbmNvbnN0IGVuZ2luZSA9IG5ldyBVaUVuZ2luZShlbGVtZW50LCByZW5kZXIpO1xyXG5cclxuZXhwb3J0IHsgZW5naW5lIH07XHJcbiIsImZ1bmN0aW9uIHJlbmRlcih7IGFycmF5LCBuYW1lLCBjb3VudCB9KSB7XHJcbiAgcmV0dXJuIGA8aDE+SGVsbG8gJHtuYW1lfTwvaDE+XHJcbiA8aW5wdXQgdmFsdWU9XCIke25hbWV9XCIgb25JbnB1dD1cInN0YXRlLmNvbW1hbmRzLnNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKVwiPjwvaW5wdXQ+XHJcbiA8cD4ke25hbWUubGVuZ3RofTwvcD5cclxuIDxwPiR7Y291bnR9PC9wPjxidXR0b24gb25DbGljaz1cInN0YXRlLmNvbW1hbmRzLmFkZCgpXCI+TXkgYnV0dG9uPC9idXR0b24+XHJcbiA8dWw+JHthcnJheS5tYXAodmFsdWUgPT4gYDxsaT4ke3ZhbHVlfTwvbGk+YCkuam9pbihcIlwiKX08L3VsPmA7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlciB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9