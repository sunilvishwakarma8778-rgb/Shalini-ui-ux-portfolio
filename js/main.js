const $=(s,c=document)=>[...c.querySelectorAll(s)];
$('[data-split]').forEach(el=>{let i=0;el.innerHTML=el.innerHTML.split('<br>').map(l=>l.trim().split(' ').map(w=>'<span class="w">'+[...w].map(ch=>`<span class="c" style="--i:${i++}">${ch}</span>`).join('')+'</span>').join(' ')).join('<br>')});
const nav=$('nav')[0],links=$('.links')[0];
addEventListener('scroll',()=>nav.classList.toggle('s',scrollY>40),{passive:true});
$('.burger')[0].onclick=()=>links.classList.toggle('o');
$('a',links).forEach(a=>a.onclick=()=>links.classList.remove('o'));
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.2});
$('.r,.steps,.ln').forEach(el=>io.observe(el));
$('.ln').forEach((l,i)=>l.style.transitionDelay=i*.25+'s');
const cv=$('#stars')[0],cx=cv.getContext('2d');let S=[],W,H;
function size(){W=cv.width=innerWidth;H=cv.height=innerHeight;S=Array.from({length:innerWidth<700?50:120},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.3+.2,s:Math.random()*.15+.03,a:Math.random()*6}))}
size();addEventListener('resize',size);
(function draw(){cx.clearRect(0,0,W,H);S.forEach(s=>{s.y-=s.s;s.a+=.02;if(s.y<0)s.y=H;cx.globalAlpha=.45+.4*Math.sin(s.a);cx.fillStyle='#bcd0ff';cx.beginPath();cx.arc(s.x,s.y,s.r,0,7);cx.fill()});requestAnimationFrame(draw)})();
const cur=$('.cur')[0];
if(matchMedia('(hover:hover)').matches){
addEventListener('mousemove',e=>{cur.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;const o=$('.orb')[0];if(o)o.style.transform=`translate(${(e.clientX-innerWidth/2)/60}px,${(e.clientY-innerHeight/2)/60}px)`});
$('a,button').forEach(el=>{el.onmouseenter=()=>{cur.classList.add('h');if(el.dataset.view!==undefined){cur.classList.add('v');cur.textContent='VIEW ↗'}};el.onmouseleave=()=>{cur.className='cur';cur.textContent='';el.style.transform=''};
if(el.classList.contains('btn'))el.onmousemove=e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)/5}px,${(e.clientY-r.top-r.height/2)/5}px)`}})}
