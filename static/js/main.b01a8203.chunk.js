(this.webpackJsonpflag=this.webpackJsonpflag||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=(n(13),n(2)),i=n(3),l=n(1),u=n(5),h=n(4),f=(n(14),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("header",{className:"navbar"},r.a.createElement("h1",{className:"navbar__name"},"Guess The Flag?"),r.a.createElement("nav",{className:"navbar__nav"},r.a.createElement("li",{onClick:this.props.handleReset},"Reset")))}}]),n}(a.Component)),m=(n(15),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"loader"})}}]),n}(a.Component)),d=(n(16),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={correct:{},correctStyle:"green",incorrectStyle:"#EB2848",defaultStyle:"#2B76CC"},a.handleClick=a.handleClick.bind(Object(l.a)(a)),a.onCorrect=a.onCorrect.bind(Object(l.a)(a)),a.onIncorrect=a.onIncorrect.bind(Object(l.a)(a)),a}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n={};e.options&&e!==this.props&&(n=this.props.options[Math.floor(4*Math.random())],this.setState({correct:n}))}},{key:"onCorrect",value:function(e){var t=this;setTimeout((function(){e.target.style.backgroundColor=t.state.defaultStyle,t.props.handleReset()}),1e3)}},{key:"onIncorrect",value:function(e){var t=this;setTimeout((function(){e.target.style.backgroundColor=t.state.defaultStyle}),500)}},{key:"handleClick",value:function(e){e.persist(),e.target.value===this.state.correct.name?(e.target.style.backgroundColor=this.state.correctStyle,this.onCorrect(e)):(e.target.style.backgroundColor=this.state.incorrectStyle,this.onIncorrect(e))}},{key:"render",value:function(){var e=this,t={backgroundColor:"#2B76CC"},n=this.props.options.map((function(n,a){return r.a.createElement("button",{key:a,className:"option",type:"button",value:n.name,style:t,onClick:function(t){return e.handleClick(t)}},n.name)})),a=this.state.correct?r.a.createElement("img",{src:this.state.correct.flag,alt:this.state.correct.name}):r.a.createElement(m,null);return r.a.createElement("div",{className:"container-quiz-flag"},r.a.createElement("div",{className:"container-quiz"},r.a.createElement("h3",null,"Which Country Does This Flag Represent?"),n),r.a.createElement("div",{className:"container-flag"},a))}}]),n}(a.Component)),p=(n(17),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleReset=a.handleReset.bind(Object(l.a)(a)),a.generateOptions=a.generateOptions.bind(Object(l.a)(a)),a.state={flags:[],options:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(t){var n=t.map((function(e,t){return{name:e.name,flag:e.flag}}));e.setState({flags:n}),e.generateOptions()})).catch((function(e){return console.error(e)}))}},{key:"generateOptions",value:function(){var e=[this.state.flags[Math.floor(250*Math.random())],this.state.flags[Math.floor(250*Math.random())],this.state.flags[Math.floor(250*Math.random())],this.state.flags[Math.floor(250*Math.random())]];this.setState({options:e})}},{key:"handleReset",value:function(){var e=this;setTimeout((function(){e.generateOptions()}),300)}},{key:"handleClick",value:function(){}},{key:"render",value:function(){var e;return e=r.a.createElement(d,{options:this.state.options,handleReset:this.handleReset}),r.a.createElement("div",{className:"container"},r.a.createElement(f,{handleReset:this.handleReset}),e)}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.b01a8203.chunk.js.map