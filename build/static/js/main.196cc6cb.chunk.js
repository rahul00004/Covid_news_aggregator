(this.webpackJsonpcovid19_news_aggregator=this.webpackJsonpcovid19_news_aggregator||[]).push([[0],{34:function(e,t,a){e.exports=a(45)},39:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),c=a.n(i),o=a(21),l=a(22),s=a(28),m=a(27),u=a(63),d=a(64),g=a(65),p=a(66),h=a(67),E=a(30),f=a(68),v=(a(39),a(61)),b=a(69),y=a(46),x=function(e){var t=e.articles,a=Object(v.a)((function(e){return Object(b.a)({root:{flexGrow:1},paper:{padding:e.spacing(2),maxWidth:7e3},image:{width:128,height:128},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})}))();return console.log(t),r.a.createElement("div",null,r.a.createElement(u.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(g.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"}),r.a.createElement(p.a,{variant:"h6",className:a.title},"Covid Updates in India"))),t.map((function(e){return r.a.createElement("div",{className:a.root},r.a.createElement(y.a,{className:a.paper,elevation:3},r.a.createElement(h.a,{container:!0,spacing:2},r.a.createElement(h.a,{item:!0},r.a.createElement(E.a,{className:a.image,href:e.url},r.a.createElement("img",{className:a.img,alt:"complex",src:e.urlToImage,href:e.url}))),r.a.createElement(h.a,{item:!0,xs:12,sm:!0,container:!0},r.a.createElement(h.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(p.a,{gutterBottom:!0,variant:"subtitle1"},r.a.createElement("p",{style:{textAlign:"left"}},e.title)),r.a.createElement(p.a,{variant:"body2",gutterBottom:!0},e.description),r.a.createElement(p.a,{variant:"body2",color:"textSecondary",fontWeight:"1000"},r.a.createElement("b",{className:"s"},e.author)),r.a.createElement(p.a,{variant:"body2",color:"textSecondary",fontWeight:"1000"},r.a.createElement("b",{className:"s"},new Date(e.publishedAt).toDateString()))),r.a.createElement(h.a,{item:!0},r.a.createElement(p.a,{variant:"body2",style:{cursor:"pointer"}},r.a.createElement(f.a,{variant:"contained",color:"primary",href:e.url},"Read Full Post")))),r.a.createElement(h.a,{item:!0})))))})))},w=(a(44),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={articles:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://newsapi.org/v2/everything?q=india&from=2020-06-02&sortBy=publishedAt&description=covid&content=covid&apiKey=14494b4e09fe456797c88c77ab5af60a").then((function(e){return e.json()})).then((function(t){e.setState({articles:t.articles})}))}},{key:"render",value:function(){return r.a.createElement(x,{articles:this.state.articles})}}]),a}(n.Component));c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.196cc6cb.chunk.js.map