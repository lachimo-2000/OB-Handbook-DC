/* One visual system. Motion follows the learner's accessibility preferences. */
(() => {
 'use strict';
 const svg=p=>`<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
 window.UI_ICONS={
  arrow:svg('<path d="M4 12h15M13 6l6 6-6 6"/>'),check:svg('<path d="m5 12 4 4L19 6"/>'),
  shield:svg('<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6z"/><path d="m8 12 3 3 5-6"/>'),
  book:svg('<path d="M12 5v15M3 4h5a4 4 0 0 1 4 3 4 4 0 0 1 4-3h5v15h-5a4 4 0 0 0-4 2 4 4 0 0 0-4-2H3z"/>'),
  compass:svg('<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5z"/>'),
  star:svg('<path d="m12 3 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/>'),
  lock:svg('<rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>'),
  flag:svg('<path d="M5 21V3m0 1c5-4 9 4 14 0v10c-5 4-9-4-14 0"/>'),
  briefcase:svg('<rect x="3" y="7" width="18" height="14" rx="3"/><path d="M8 7V4h8v3M3 12c5 4 13 4 18 0M10 14h4"/>'),
  spark:svg('<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3z"/>'),
  user:svg('<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>')
 };
 // Code-native illustrations: professional attire, no fabricated brand marks.
 window.playerAvatar=(kind='male')=>{
  const female=kind==='female';
  return `<svg class="player-avatar" viewBox="0 0 200 230" role="img" aria-label="Nhân vật nhân viên chứng khoán ${female?'nữ':'nam'}"><circle cx="100" cy="110" r="91" fill="#7C7C7B" opacity=".1"/><path d="M24 218c3-50 29-74 76-74s73 24 76 74" fill="#686867"/>${female?'<path d="M55 103V69c0-57 94-58 94 0v66c0 19-16 23-25 26H60Z" fill="#212121"/>':'<path d="M60 79V56c0-37 78-44 82 3l-2 25z" fill="#212121"/>'}<path d="M85 124h30v32H85z" fill="#FDCF9D"/><path d="m70 151 30 15 30-15-14 67H84z" fill="#FFFFFF"/><path d="m69 149 23 69H69l-20-40 17-5-12-14zM131 149l-23 69h23l20-40-17-5 12-14z" fill="#929291"/><ellipse cx="100" cy="89" rx="38" ry="48" fill="#FDCF9D"/>${female?'<path d="M62 84c-5-44 19-62 43-60 25 2 41 20 34 59-6-7-13-20-17-32-15 15-32 24-60 27z" fill="#212121"/>':'<path d="M62 72c-11-31 18-50 42-48 32 1 47 18 38 51-10-8-14-18-17-30-14 15-39 23-63 27z" fill="#212121"/>'}<path d="M79 84h10m22 0h10" stroke="#686867" stroke-width="3" stroke-linecap="round"/><circle cx="85" cy="93" r="2.5" fill="#212121"/><circle cx="115" cy="93" r="2.5" fill="#212121"/><path d="M100 94v12h4" stroke="#E67E00" stroke-opacity=".4" fill="none" stroke-linecap="round"/><path d="M89 116q11 9 22 0" fill="none" stroke="#686867" stroke-width="2.5" stroke-linecap="round"/>${female?'<path d="m86 155 14 11 15-11 6 12-17 7 8 23-13-6-5-18-15-8z" fill="#F7941D"/>':'<path d="m93 164 7 5 7-5-3 13 7 32-11 9-11-9 7-32z" fill="#F7941D"/>'}<path d="M132 180h17v22h-17z" fill="#FFFFFF"/><path d="M140 176v8" stroke="#212121" stroke-width="2"/><path d="M136 191h9m-9 5h6" stroke="#7C7C7B" stroke-width="2"/></svg>`;
 };
 const media=typeof matchMedia==='function'?matchMedia('(prefers-reduced-motion: reduce)'):null;
 let preferred=false;
 try{preferred=JSON.parse(localStorage.getItem('vndirect-ui-options')||'{}').reduced===true}catch{}
 const reduced=()=>preferred||Boolean(media?.matches);
 function apply(){document.body.classList.toggle('reduce-motion',reduced());const b=document.getElementById('motionToggle');if(b){b.setAttribute('aria-pressed',String(preferred));b.textContent=preferred?'Chuyển động: giảm':'Giảm chuyển động'}}
 document.getElementById('motionToggle')?.addEventListener('click',()=>{preferred=!preferred;try{localStorage.setItem('vndirect-ui-options',JSON.stringify({reduced:preferred}))}catch{}apply();if(reduced())document.getAnimations?.().forEach(a=>a.cancel())});
 media?.addEventListener?.('change',apply);apply();
 window.HandbookUI={
  animate(root){if(reduced())return;[...root.querySelectorAll('.pagehead,.home-intro,.player-panel,.world-card,.stage-node,.lesson-tile,.rule-stage,.practice,.mission,.player-hud,.badge-card')].slice(0,14).forEach((el,i)=>el.animate?.([{opacity:0,transform:'translateY(16px)'},{opacity:1,transform:'translateY(0)'}],{duration:420,delay:Math.min(i*38,230),easing:'cubic-bezier(.2,.8,.2,1)'}))},
  celebrate(title,detail){document.getElementById('celebration')?.remove();const el=document.createElement('div');el.id='celebration';el.setAttribute('role','status');el.className='celebration';const emblem=document.createElement('div');emblem.className='celebration-emblem';emblem.innerHTML=window.UI_ICONS.star;const copy=document.createElement('div'),h=document.createElement('b'),p=document.createElement('p');h.textContent=title;p.textContent=detail;copy.append(h,p);el.append(emblem,copy);if(!reduced())for(let i=0;i<12;i++){const s=document.createElement('i');s.className='confetti';s.style.setProperty('--i',i);el.append(s)}document.body.append(el);setTimeout(()=>el.remove(),4600)}
 };
 document.addEventListener('pointerdown',e=>{if(reduced())return;const b=e.target.closest('.primary,.avatar-choice,.world-card,.pair-target,.sort-bin,.choice,.stage-link');if(!b)return;const r=b.getBoundingClientRect(),span=document.createElement('span');span.className='tap-wave';span.style.left=(e.clientX-r.left)+'px';span.style.top=(e.clientY-r.top)+'px';b.append(span);setTimeout(()=>span.remove(),650)});
 document.addEventListener('pointermove',e=>{if(reduced()||e.pointerType!=='mouse')return;const card=e.target.closest('[data-tilt]');if(!card)return;const r=card.getBoundingClientRect();card.style.setProperty('--tilt-x',((e.clientY-r.top)/r.height-.5)*-4+'deg');card.style.setProperty('--tilt-y',((e.clientX-r.left)/r.width-.5)*4+'deg')});
 document.addEventListener('pointerout',e=>{const card=e.target.closest?.('[data-tilt]');if(card&&!card.contains(e.relatedTarget)){card.style.setProperty('--tilt-x','0deg');card.style.setProperty('--tilt-y','0deg')}});
})();
