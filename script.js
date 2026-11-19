const WHATSAPP='221782528199'; // ← votre numéro WhatsApp (indicatif sans +)
const MERCHANT={wave:'78 252 81 99',om:'78 252 81 99'}; // numéros marchands Wave / Orange Money
const FAM=['Tous','Floral','Boisé','Oriental','Frais'];
const P=[
// pr = prix [30 ml, 50 ml, 100 ml] en FCFA. Mettez 0 pour un format non vendu. ← MODIFIEZ VOS PRIX ICI
{id:1,n:'Mayar',m:'Lattafa',f:'mayar',pr:[0,0,15000]},
{id:2,n:'Mayar Cherry Intense',m:'Lattafa',f:'mayar-cherry-intense',pr:[0,0,15000]},
{id:3,n:'Musamam',m:'Lattafa',f:'musamam',pr:[0,0,24000]},
{id:4,n:'Musamam White Intense',m:'Lattafa',f:'musamam-white-intense',pr:[0,0,24000]},
{id:5,n:'Intense Wayfarer Homme',m:'Pendora Scents',f:'intense-wayfarer',pr:[0,0,15000]},
{id:6,n:'Milky Way',m:'Maison Asrar',f:'milky-way',pr:[0,0,15000]},
{id:7,n:'Vanilla Voyage',m:'Maison Asrar',f:'vanilla-voyage',pr:[0,0,23000]},
{id:8,n:'Rifaaqal',m:'Paris Corner',f:'rifaaqal',pr:[0,0,25000]},
{id:9,n:'Eshal Vanilla',m:'Paris Corner',f:'eshal-vanilla',pr:[0,0,6000]},
{id:10,n:'Cotton’ C',m:'Osma',f:'osma-cotton-c',pr:[0,0,20000]},
{id:11,n:'Oud pour Klassik',m:'Khadlaj',f:'oud-pour-klassik',pr:[0,0,23000]},
{id:12,n:'Yum Boujee Marshmallow 81',m:'Kayali',f:'kayali-yum-boujee-marshmallow-81',pr:[0,0,25000]},
{id:13,n:'Vanilla 28',m:'Kayali',f:'kayali-vanilla-28',pr:[0,0,25000]},
{id:14,n:'Lovefest Burning Cherry 48',m:'Kayali',f:'kayali-lovefest-burning-cherry-48',pr:[0,0,25000]},
{id:15,n:'Eden Sparkling Lychee 39',m:'Kayali',f:'kayali-eden-sparkling-lychee-39',pr:[0,0,23000]},
{id:16,n:'Elixir 11',m:'Kayali',f:'kayali-elixir-11',pr:[0,0,23000]},
{id:17,n:'Kaaf',m:'',f:'kaaf',pr:[0,0,10000]},
{id:18,n:'Khamrah Waha',m:'',f:'khamrah-waha',pr:[0,0,5000]},
{id:19,n:'Huile parfumée Al Haramain',m:'Al Haramain',f:'al-haramain',pr:[0,0,18000]},
{id:20,n:'9pm',m:'Afnan',f:'9pm',pr:[0,0,25000]},
{id:21,n:'Lamsat Harir',m:'Arabiyat',f:'lamsat-harir',pr:[0,0,8000]},
{id:22,n:'Rosé',m:'Maison',f:'rose',pr:[0,0,25000]},
{id:23,n:'Club de Nuit Intense Man',m:'Armaf',f:'club-de-nuit-intense-man',pr:[0,0,6000],lab:[null,null,'105 ml']},
{id:24,n:'Choco Musk Pistachio',m:'Al Rehab',f:'choco-musk-pistachio',pr:[0,15000,0]},
{id:25,n:'Desert Sultan Sapphire',m:'',f:'desert-sultan-sapphire',pr:[0,0,25000]},
{id:26,n:'Gold Days Princesses',m:'My Gold Musc',f:'gold-days-princesses',pr:[0,0,15000],lab:[null,null,'Standard']},
{id:27,n:'Luxury Edition 224',m:'Aseem',f:'aseem-224',pr:[10000,0,0],lab:['35 ml']},
{id:28,n:'Luxury Edition 288',m:'Aseem',f:'aseem-288',pr:[10000,0,0],lab:['35 ml']},
{id:29,n:'Luxury Edition 771',m:'Aseem',f:'aseem-771',pr:[10000,0,0],lab:['35 ml']},
{id:30,n:'Oud Al Layl',m:'Arabiyat',f:'oud-al-layl',pr:[0,0,25000]},
{id:31,n:'Sugar Wood',m:'Shy',f:'sugar-wood',pr:[0,0,25000]},
{id:32,n:'Brown Liquid',m:'Zahabi',f:'brown-liquid',pr:[0,0,25000]},
{id:33,n:'Blue Musk',m:'Oud Al Malik',f:'blue-musk',pr:[0,15000,0]},
{id:34,n:'Dulcé Delight',m:'',f:'dulce-delight',pr:[0,0,25000]},
{id:35,n:'Lamsat Harir – Collection',m:'Arabiyat',f:'lamsat-harir-collection',pr:[0,0,8000],lab:[null,null,'Coffret']},
{id:36,n:'Ameerat Al Arab Rose',m:'Bakhoor',f:'bakhoor-ameerat-rose',pr:[0,0,8000],lab:[null,null,'Pot']},
{id:37,n:'Khamrah',m:'Bakhoor',f:'bakhoor-khamrah',pr:[0,0,8000],lab:[null,null,'Pot']},
{id:38,n:'Ameerat Al Arab Rouge',m:'Bakhoor',f:'bakhoor-ameerat-rouge',pr:[0,0,8000],lab:[null,null,'Pot']},
{id:39,n:'Bint Al Arab',m:'Bakhoor',f:'bakhoor-bint-al-arab',pr:[0,0,8000],lab:[null,null,'Pot']},
{id:40,n:'Ameerat Al Arab Bleu',m:'Bakhoor',f:'bakhoor-ameerat-bleu',pr:[0,0,8000],lab:[null,null,'Pot']},
{id:41,n:'Diffuseur de parfum',m:'Diffuseur',f:'diffuseur-parfum',pr:[0,0,6000],lab:[null,null,'Standard']},
{id:42,n:'Sauvage Elixir',m:'Dior',f:'sauvage-elixir',pr:[0,0,6000],lab:[null,null,'Standard']},
{id:43,n:'Yum Boujee Marshmallow',m:'King’s Essence',f:'yum-boujee-kings-essence',pr:[0,0,25000]},
{id:44,n:'Eden Juicy Apple',m:'King’s Essence',f:'eden-juicy-apple',pr:[0,0,6000]},
{id:45,n:'Khumar',m:'',f:'khumar',pr:[0,2000,0]},
{id:46,n:'Elite',m:'',f:'elite',pr:[0,0,25000]},
{id:47,n:'Go Fresh Poire & Aloe Vera',m:'Dove',f:'dove-poire-aloe',pr:[0,0,2000],lab:[null,null,'Spray']},
{id:48,n:'Advanced Care Original',m:'Dove',f:'dove-original',pr:[0,0,2000],lab:[null,null,'Spray']},
{id:49,n:'Go Fresh Concombre & Thé vert',m:'Dove',f:'dove-concombre-the-vert',pr:[0,0,2000],lab:[null,null,'Spray']},
{id:50,n:'Go Fresh Grenade & Verveine citronnée',m:'Dove',f:'dove-grenade-verveine',pr:[0,0,2000],lab:[null,null,'Spray']},
{id:51,n:'Go Fresh Fruit de la passion & Citronnelle',m:'Dove',f:'dove-fruit-passion-citronnelle',pr:[0,0,2000],lab:[null,null,'Spray']},
{id:52,n:'Go Fresh Noix de coco & Jasmin',m:'Dove',f:'dove-coco-jasmin',pr:[0,0,2000],lab:[null,null,'Spray']},
{id:53,n:'Gold Yara',m:'My Gold Musc',f:'gold-yara',pr:[0,0,8000],lab:[null,null,'Standard']},
{id:54,n:'Baccarat Vanille',m:'Private Gold',f:'private-gold-baccarat-vanille',pr:[0,5000,0],lab:[null,'60 ml']},
];
const SZ=[30,50,100],SHIP={dakar:['Dakar (24 h)',2000],reg:['Autres régions (72 h)',4000],shop:['Retrait en boutique',0]};
let cart=[],fam='Tous',st={},step=1,pay='',form={};
const $=id=>document.getElementById(id);
const lab=(p,i)=>(p.lab&&p.lab[i])||SZ[i]+' ml';
const F=n=>n.toLocaleString('fr-FR').replace(/\u202f/g,' ')+' FCFA';
function bottle(a,b,w=90){
 const g='g'+Math.random().toString(36).slice(2,7);
 return `<svg width="${w}" viewBox="0 0 90 140" aria-hidden="true"><defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect x="34" y="4" width="22" height="16" rx="3" fill="#d4af6a"/><rect x="40" y="20" width="10" height="10" fill="#8a6d33"/><path d="M12 62Q12 34 45 34Q78 34 78 62V118Q78 134 62 134H28Q12 134 12 118Z" fill="url(#${g})" stroke="#f3dfa8" stroke-width="1.2"/><path d="M22 60Q22 46 36 44" stroke="#fff" stroke-opacity=".5" stroke-width="3" fill="none" stroke-linecap="round"/><rect x="28" y="78" width="34" height="28" rx="3" fill="none" stroke="#f3dfa8" stroke-opacity=".8"/><text x="45" y="96" text-anchor="middle" font-family="serif" font-size="9" fill="#f3dfa8">PENLOVE</text></svg>`}
$('mq').innerHTML=(P.map(p=>p.n).join(' ✦ ')+' ✦ ').repeat(2);
function renderGrid(){
 $('grid').innerHTML=P.filter(p=>fam=='Tous'||p.f==fam).map(p=>{const s=st[p.id]||(st[p.id]={s:p.pr.findIndex(x=>x),q:1});return `<article class="p">
 <div class="bt"><img class="pimg" data-fb="${p.id}" src="${p.img}" alt="${p.n}" loading="lazy"></div><div class="fam">${p.m||'&nbsp;'}</div><h3>${p.n}</h3>
 <div class="box"><div class="sz">${SZ.map((z,i)=>!p.pr[i]?'':`<button class="${s.s==i?'on':''}" onclick="setS(${p.id},${i})">${lab(p,i)}</button>`).join('')}</div>
 <div class="row"><span class="price">${F(p.pr[s.s])}</span><div class="qty"><button onclick="setQ(${p.id},-1)" aria-label="Moins">−</button><span>${s.q}</span><button onclick="setQ(${p.id},1)" aria-label="Plus">+</button></div></div>
 <button class="add" onclick="add(${p.id})">Ajouter au panier</button></div></article>`}).join('')}
function setS(id,i){st[id].s=i;renderGrid()}
function setQ(id,d){st[id].q=Math.max(1,Math.min(10,st[id].q+d));renderGrid()}
function add(id){const p=P.find(x=>x.id==id),s=st[id],k=id+'-'+s.s,e=cart.find(c=>c.k==k);
 if(e)e.q+=s.q;else cart.push({k,id,s:s.s,q:s.q});s.q=1;renderGrid();upd();toast(p.n+' ajouté au panier ✦')}
const sub=()=>cart.reduce((t,c)=>t+P.find(p=>p.id==c.id).pr[c.s]*c.q,0);
const shipP=()=>SHIP[form.ship||'dakar'][1];
function upd(){$('cc').textContent=cart.reduce((t,c)=>t+c.q,0);
 $('items').innerHTML=cart.length?cart.map(c=>{const p=P.find(x=>x.id==c.id);return `<div class="it"><div class="th"><img data-fb="${p.id}" data-w="26" src="${p.img}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:27px 27px 4px 4px"></div><div><b style="font-family:'Cormorant Garamond',serif;font-size:1.2rem">${p.n}</b><br><small>${lab(p,c.s)} · ${F(p.pr[c.s])}</small><br><span class="qty" style="display:inline-flex;margin-top:4px"><button onclick="cq('${c.k}',-1)">−</button><span>${c.q}</span><button onclick="cq('${c.k}',1)">+</button></span></div><div style="text-align:right"><div>${F(p.pr[c.s]*c.q)}</div><button class="rm" onclick="cq('${c.k}',-99)">Retirer</button></div></div>`}).join(''):'<div class="empty">Votre panier est vide<br><small style="font:300 .9rem Jost">Laissez-vous tenter par une fragrance ✦</small></div>';
 $('df').innerHTML=cart.length?`<div class="tot"><span>Sous-total</span><b>${F(sub())}</b></div><button class="btn" style="width:100%;border:0" onclick="openCheckout()">Commander</button>`:''}
function cq(k,d){const c=cart.find(x=>x.k==k);c.q+=d;if(c.q<1)cart=cart.filter(x=>x.k!=k);upd()}
function openCart(){$('veil').classList.add('on');$('drawer').classList.add('on')}
function closeAll(){['veil','drawer'].forEach(i=>$(i).classList.remove('on'));$('modal').classList.remove('on');document.body.style.overflow=''}
function toast(t){const e=$('toast');e.textContent=t;e.classList.add('on');setTimeout(()=>e.classList.remove('on'),2200)}
function openCheckout(){step=1;$('drawer').classList.remove('on');$('veil').classList.add('on');$('modal').classList.add('on');document.body.style.overflow='hidden';draw()}
const stepper=()=>`<div class="steps">${['Livraison','Paiement','Confirmation'].map((s,i)=>`<span class="${step==i+1?'on':''}">${i+1} · ${s}</span>`).join('')}</div>`;
const summary=()=>`<div class="sum">${cart.map(c=>{const p=P.find(x=>x.id==c.id);return `<div><span>${p.n} ${lab(p,c.s)} × ${c.q}</span><span>${F(p.pr[c.s]*c.q)}</span></div>`}).join('')}<div><span>Livraison</span><span>${shipP()?F(shipP()):'Offerte'}</span></div><div class="t"><span>Total à payer</span><b>${F(sub()+shipP())}</b></div></div>`;
function draw(){
 const m=$('mc');
 if(step==1){m.innerHTML=`<h2 style="text-align:center;font-size:2rem">Finaliser ma <span class="gold">commande</span></h2>${stepper()}
 <label>Nom complet</label><input id="nm" value="${form.nm||''}" placeholder="Awa Diop" autocomplete="name">
 <div class="two"><div><label>Téléphone</label><input id="ph" value="${form.ph||''}" placeholder="77 123 45 67" inputmode="tel" autocomplete="tel"></div>
 <div><label>Mode de livraison</label><select id="sh">${Object.entries(SHIP).map(([k,v])=>`<option value="${k}" ${(form.ship||'dakar')==k?'selected':''}>${v[0]} — ${v[1]?F(v[1]):'Gratuit'}</option>`).join('')}</select></div></div>
 <label>Adresse / quartier</label><textarea id="ad" rows="2" placeholder="Quartier, rue, repère…">${form.ad||''}</textarea>
 ${summary()}<div class="err" id="er"></div>
 <div class="nav2"><button class="ghost" onclick="closeAll();openCart()">Retour</button><button class="btn" style="border:0" onclick="next1()">Continuer vers le paiement</button></div>`}
 if(step==2){const w=pay=='wave',n=w?MERCHANT.wave:MERCHANT.om;
 m.innerHTML=`<h2 style="text-align:center;font-size:2rem">Mode de <span class="gold">paiement</span></h2>${stepper()}
 <div class="pay"><button class="w ${pay=='wave'?'on':''}" onclick="pay='wave';draw()"><i>W</i>Wave</button><button class="o ${pay=='om'?'on':''}" onclick="pay='om';draw()"><i>OM</i>Orange Money</button></div>
 ${pay?`<div class="instr">1. Ouvrez <b>${w?'Wave':'Orange Money'}</b> et choisissez « Envoyer de l’argent ».<br>2. Numéro marchand : <b>${n}</b> (Penlove Parfumerie).<br>3. Montant exact : <b>${F(sub()+shipP())}</b>.<br>4. Revenez ici pour confirmer avec votre référence de transaction.</div>`:''}
 ${summary()}<div class="err" id="er"></div>
 <div class="nav2"><button class="ghost" onclick="step=1;draw()">Retour</button><button class="btn" style="border:0" onclick="if(!pay){$('er').textContent='Choisissez Wave ou Orange Money.';return}step=3;draw()">J’ai payé, confirmer</button></div>`}
 if(step==3){m.innerHTML=`<h2 style="text-align:center;font-size:2rem">Confirmation du <span class="gold">paiement</span></h2>${stepper()}
 <p style="text-align:center;color:var(--mute);margin-top:0">Paiement par <b style="color:${pay=='wave'?'var(--wave)':'var(--om)'}">${pay=='wave'?'Wave':'Orange Money'}</b> de <b style="color:var(--gold2)">${F(sub()+shipP())}</b></p>
 <label>Numéro utilisé pour payer</label><input id="pp" value="${form.pp||form.ph||''}" inputmode="tel" placeholder="77 123 45 67">
 <label>Référence de transaction (reçue par SMS)</label><input id="rf" placeholder="Ex : TX7F2K9A41">
 <label style="display:flex;gap:10px;align-items:flex-start;text-transform:none;letter-spacing:0;font-size:.85rem;color:var(--mute)"><input type="checkbox" id="ck" style="width:auto;margin-top:4px">Je confirme avoir envoyé le montant exact au numéro marchand indiqué.</label>
 <div class="err" id="er"></div>
 <div class="nav2"><button class="ghost" onclick="step=2;draw()">Retour</button><button class="btn" style="border:0" onclick="done()">Valider ma commande</button></div>`}
 m.scrollTop=0}
function next1(){const nm=$('nm').value.trim(),ph=$('ph').value.replace(/\s/g,''),ad=$('ad').value.trim(),sh=$('sh').value;
 if(nm.length<3)return $('er').textContent='Veuillez saisir votre nom complet.';
 if(!/^(\+221)?[37]\d{8}$/.test(ph))return $('er').textContent='Numéro invalide (ex : 77 123 45 67).';
 if(sh!='shop'&&ad.length<5)return $('er').textContent='Veuillez indiquer votre adresse de livraison.';
 form={nm,ph,ad,ship:sh};step=2;draw()}
function done(){const pp=$('pp').value.replace(/\s/g,''),rf=$('rf').value.trim();
 if(!/^(\+221)?[37]\d{8}$/.test(pp))return $('er').textContent='Numéro de paiement invalide.';
 if(rf.length<6)return $('er').textContent='Saisissez la référence de transaction (6 caractères minimum).';
 if(!$('ck').checked)return $('er').textContent='Cochez la case de confirmation.';
 const no='PL-'+Date.now().toString().slice(-6),tot=F(sub()+shipP()),via=pay=='wave'?'Wave':'Orange Money';
 $('mc').innerHTML=`<div class="ok"><div class="chk">✓</div><h2><span class="gold">Merci</span>, ${form.nm.split(' ')[0]} !</h2>
 <p style="color:var(--mute)">Votre commande <b style="color:var(--gold2)">${no}</b> est enregistrée. Nous vérifions votre paiement ${via} (réf. ${rf.toUpperCase()}) et vous contactons au ${form.ph} pour la livraison.</p>
 <div class="sum" style="text-align:left"><div><span>Montant réglé</span><span>${tot}</span></div><div><span>Livraison</span><span>${SHIP[form.ship][0]}</span></div></div>
 <button class="btn" style="border:0" onclick="cart=[];form={};pay='';upd();closeAll()">Retour à la boutique</button></div>`}
P.forEach(p=>{p.img='images/'+p.f+'.jpg'});
document.addEventListener('error',e=>{const t=e.target;if(t.dataset&&t.dataset.fb){const p=P.find(x=>x.id==t.dataset.fb);t.outerHTML=bottle(p.a||'#d4af6a',p.b||'#3a2508',+(t.dataset.w||100))}},true);
$('cfp').innerHTML=P.map(p=>`<option>${p.n}</option>`).join('');
$('cf').onsubmit=e=>{e.preventDefault();const t=`Bonjour Penlove Parfumerie, je suis ${$('cfn').value}. Téléphone : ${$('cft').value}. Parfum souhaité : ${$('cfp').value}. ${$('cfm').value}`;window.open('https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(t),'_blank')};
function startOrder(){if(cart.length)openCheckout();else{toast('Ajoutez d’abord un parfum au panier ✦');$('collection').scrollIntoView()}}
renderGrid();upd();