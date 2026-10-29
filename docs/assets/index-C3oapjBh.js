(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=e=>`/FarmClicker/${e.replace(/^\/+/,``)}`,t=[{id:1,name:`Фермерский трактор`,image:e(`/assets/vehicles/tractor.png`),power:15,price:0,levelRequired:1},{id:2,name:`Усиленный трактор`,image:e(`/assets/vehicles/tractor2.png`),power:30,price:5e3,levelRequired:2},{id:3,name:`Профессиональный трактор`,image:e(`/assets/vehicles/tractor3.png`),power:60,price:15e3,levelRequired:4},{id:4,name:`Мега-комбайн`,image:e(`/assets/vehicles/combine.png`),power:120,price:5e4,levelRequired:7},{id:5,name:`Тяжёлый трактор`,image:e(`/assets/vehicles/heavy.png`),power:200,price:25e4,levelRequired:10,rarity:`rare`,rarityLabel:`РЕДКАЯ`},{id:6,name:`Турботрактор`,image:e(`/assets/vehicles/turbo.png`),power:350,price:75e4,levelRequired:15,rarity:`rare`,rarityLabel:`РЕДКАЯ`},{id:7,name:`Трактор «Титан»`,image:e(`/assets/vehicles/titan.png`),power:600,price:2e6,levelRequired:22,rarity:`epic`,rarityLabel:`ЭПИЧЕСКАЯ`},{id:8,name:`Комбайн «Молния»`,image:e(`/assets/vehicles/lightning.png`),power:1e3,price:6e6,levelRequired:30,rarity:`legendary`,rarityLabel:`ЛЕГЕНДАРНАЯ`},{id:9,name:`Трактор «Голиаф»`,image:e(`/assets/vehicles/goliath.png`),power:1600,price:18e6,levelRequired:40,rarity:`mythic`,rarityLabel:`МИФИЧЕСКАЯ`},{id:10,name:`Комбайн «Феникс»`,image:e(`/assets/vehicles/phoenix.png`),power:2500,price:5e7,levelRequired:50,rarity:`unique`,rarityLabel:`УНИКАЛЬНАЯ`}],n=[{id:`clicks`,icon:`👆`,title:`Рабочий день`,description:`Сделай 100 нажатий на трактор`,target:100,reward:500},{id:`earned`,icon:`💰`,title:`Хороший урожай`,description:`Заработай 5 000 монет на ферме`,target:5e3,reward:1e3},{id:`upgrades`,icon:`⚡`,title:`Развитие фермы`,description:`Купи 3 улучшения`,target:3,reward:1500},{id:`tractors`,icon:`🚜`,title:`Новая техника`,description:`Купи ещё одну единицу техники`,target:1,reward:2500}],r=[{id:`friend1`,friends:1,reward:1e3},{id:`friend3`,friends:3,reward:3e3},{id:`friend5`,friends:5,reward:7500},{id:`friend10`,friends:10,reward:2e4},{id:`friend25`,friends:25,reward:6e4},{id:`friend50`,friends:50,reward:15e4},{id:`friend100`,friends:100,reward:4e5}],i=100,a=1e3,o=[{id:`wheat`,name:`Пшеница`,icon:`🌾`,levelRequired:1,harvestBonus:0,detail:`Классический урожай`,fieldImage:e(`/assets/field-wheat.png`),harvestedImage:e(`/assets/field-harvested-wheat.png`)},{id:`corn`,name:`Кукуруза`,icon:`🌽`,levelRequired:6,harvestBonus:200,detail:`Бонус +200 монет`,fieldImage:e(`/assets/field-corn.png`),harvestedImage:e(`/assets/field-harvested-corn.png`)},{id:`potato`,name:`Картофель`,icon:`🥔`,levelRequired:10,harvestBonus:450,detail:`Бонус +450 монет`,fieldImage:e(`/assets/field-potato.png`),harvestedImage:e(`/assets/field-harvested-potato.png`)},{id:`sunflower`,name:`Подсолнечник`,icon:`🌻`,levelRequired:16,harvestBonus:850,detail:`Бонус +850 монет`,fieldImage:e(`/assets/field-sunflower.png`),harvestedImage:e(`/assets/field-harvested-sunflower.png`)}];function s(){let e=o.find(e=>e.id===d.selectedCrop);return e&&d.level>=e.levelRequired?e:o[0]}function c(){return a+P()+s().harvestBonus}var l=[{id:`orchard`,name:`Яблоневый сад`,image:e(`/assets/apple-tree.png`),price:18e3,levelRequired:5,harvestBonus:150,detail:`Яблони украсят ферму и принесут дополнительный доход.`},{id:`barn`,name:`Красный амбар`,image:e(`/assets/barn.png`),price:4e4,levelRequired:6,harvestBonus:300,detail:`Уютный амбар для хранения собранного урожая.`},{id:`silo`,name:`Зерновой силос`,image:e(`/assets/silo.png`),price:95e3,levelRequired:8,harvestBonus:500,detail:`Хранилище зерна для развитого хозяйства.`},{id:`secondField`,name:`Второе поле`,image:e(`/assets/second-field.png`),price:21e4,levelRequired:12,harvestBonus:600,detail:`Расширяет территорию. Бонус за полный сбор урожая.`},{id:`greenhouse`,name:`Тепличный комплекс`,image:e(`/assets/buildings-v8/greenhouse.svg`),price:35e4,levelRequired:14,harvestBonus:1200,detail:`Стеклянные теплицы с овощами и зеленью.`},{id:`workshop`,name:`Мастерская техники`,image:e(`/assets/buildings-v8/workshop.svg`),price:8e5,levelRequired:18,harvestBonus:2400,detail:`Ремонтный бокс для тракторов и комбайнов.`},{id:`warehouse`,name:`Большой зерновой склад`,image:e(`/assets/buildings-v8/warehouse.svg`),price:25e5,levelRequired:24,harvestBonus:4200,detail:`Большой склад для сбора и хранения зерна.`},{id:`farField`,name:`Большое дальнее поле`,image:e(`/assets/buildings-v8/far-field.svg`),price:7e6,levelRequired:32,harvestBonus:8e3,detail:`Новые земли с большим золотым полем.`}],u={level:1,xp:0,coins:3055,energy:1e3,maxEnergy:1e3,selectedTractor:1,ownedTractors:[1],selectedCrop:`wheat`,currentScreen:`farm`,upgrades:{power:0,energy:0,recovery:0,offline:0,luck:0},developmentRewards:[],stats:{clicks:0,earned:0,energySpent:0,upgradesBought:0,tractorsBought:0},claimedTasks:[],dailyTasks:{date:``,claimed:[],bonusClaimed:!1,startStats:{clicks:0,earned:0,energySpent:0,upgradesBought:0}},friends:{invited:0,earned:0,claimedRewards:[]},offline:{lastSeen:Date.now(),pendingCoins:0,awaySeconds:0},dailyReward:{day:1,lastClaimDate:``,totalClaims:0},farmBuildings:{orchard:!1,barn:!1,silo:!1,secondField:!1,greenhouse:!1,workshop:!1,warehouse:!1,farField:!1},harvest:{clicks:0,completed:0,earned:0}};function ee(){try{let e=localStorage.getItem(`farmClickerSave`);if(!e)return structuredClone(u);let t=JSON.parse(e);return{...structuredClone(u),...t,upgrades:{...u.upgrades,...t.upgrades||{}},stats:{...u.stats,...t.stats||{}},claimedTasks:Array.isArray(t.claimedTasks)?t.claimedTasks:[],friends:{...u.friends,...t.friends||{},claimedRewards:Array.isArray(t.friends?.claimedRewards)?t.friends.claimedRewards:[]},offline:{...u.offline,...t.offline||{}},dailyReward:{...u.dailyReward,...t.dailyReward||{}},farmBuildings:{...u.farmBuildings,...t.farmBuildings&&typeof t.farmBuildings==`object`&&!Array.isArray(t.farmBuildings)?t.farmBuildings:{}},harvest:{...u.harvest,...t.harvest&&typeof t.harvest==`object`?t.harvest:{}},currentScreen:`farm`}}catch(e){return console.error(`Ошибка загрузки сохранения:`,e),structuredClone(u)}}var d=ee(),te=8;function ne(){let e=p();return Math.max(10,Math.floor(e.power*2+h()))}function re(){let e=Date.now();if(!d.offline){d.offline={lastSeen:e,pendingCoins:0,awaySeconds:0};return}let t=Number(d.offline.lastSeen)||e,n=Math.floor((e-t)/1e3),r=Math.min(n,28800);if(r<60){d.offline.lastSeen=e;return}let i=ne(),a=1+d.upgrades.offline*.1,o=Math.floor(r/60*i*a);d.offline.pendingCoins=o,d.offline.awaySeconds=r,d.offline.lastSeen=e}re();function f(){try{localStorage.setItem(`farmClickerSave`,JSON.stringify(d))}catch(e){console.error(`Ошибка сохранения:`,e)}}function p(){return t.find(e=>e.id===d.selectedTractor)||t[0]}function m(e){return Math.floor(e).toLocaleString(`ru-RU`)}function h(){return d.upgrades.power*5}function g(){let e=d.upgrades.power+d.upgrades.energy+d.upgrades.recovery+d.upgrades.offline+d.upgrades.luck;return{current:e,max:55,percent:Math.min(100,Math.floor(e/55*100))}}var _=[{level:5,coins:5e3,xp:0},{level:10,coins:1e4,xp:100},{level:20,coins:25e3,xp:0},{level:35,coins:5e4,xp:300},{level:55,coins:1e5,xp:1e3}];function ie(){let e=g(),t=d.developmentRewards||[];return _.find(n=>e.current>=n.level&&!t.includes(n.level))}function ae(e){let t=_.find(t=>t.level===e);t&&(d.developmentRewards||=[],!d.developmentRewards.includes(e)&&(g().current<t.level||(d.coins+=t.coins,d.developmentRewards.push(e),t.xp>0&&E(t.xp),f(),k())))}function v(){return 1e3*2**d.upgrades.power}function y(){return 1500*2**d.upgrades.energy}function b(){return 2e3*2**d.upgrades.recovery}function x(){return 3e3*2**d.upgrades.offline}function S(){return 5e3*2**d.upgrades.luck}function C(){return 1e3+d.upgrades.energy*250}function w(){let e=[3e3,2500,2e3,1500,1e3,750];return e[Math.min(d.upgrades.recovery,e.length-1)]}function oe(){return(w()/1e3).toString().replace(`.`,`,`)}function T(){return d.level*100}function E(e){for(d.xp+=e;d.xp>=T();){let e=T();d.xp-=e,d.level+=1;let t=d.level*500;d.coins+=t,se(d.level,t)}}function se(e,n){let r=document.querySelector(`.level-up-overlay`);r&&r.remove();let i=t.find(t=>t.levelRequired===e),a=document.createElement(`div`);a.className=`level-up-overlay`,a.innerHTML=`
    <div class="level-up-card">

      <div class="level-up-glow"></div>

      <div class="level-up-icon">
        🎉
      </div>

      <div class="level-up-small">
        НОВЫЙ УРОВЕНЬ
      </div>

      <div class="level-up-number">
        ${e}
      </div>

      <div class="level-up-title">
        Отличная работа!
      </div>

      <div class="level-up-reward">
        <span>🪙</span>

        <div>
          <small>
            НАГРАДА
          </small>

          <strong>
            +${m(n)}
          </strong>
        </div>
      </div>

      ${i?`
            <div class="level-up-unlock">

              <span class="unlock-icon">
                🚜
              </span>

              <div>
                <small>
                  ОТКРЫТА НОВАЯ ТЕХНИКА
                </small>

                <strong>
                  ${i.name}
                </strong>
              </div>

            </div>
          `:``}

      <button
        class="level-up-button"
      >
        ПРОДОЛЖИТЬ
      </button>

    </div>
  `,document.body.appendChild(a),a.querySelector(`.level-up-button`).addEventListener(`click`,()=>{a.remove(),k()})}function D(){return p().power+h()}function O(e){return e.id===`clicks`?d.stats.clicks:e.id===`earned`?d.stats.earned:e.id===`upgrades`?d.stats.upgradesBought:e.id===`tractors`?d.stats.tractorsBought:0}function k(){d.maxEnergy=C(),d.energy>d.maxEnergy&&(d.energy=d.maxEnergy),document.querySelector(`#app`).innerHTML=`
      <div class="game">

        ${le()}

        <div id="screen">
          ${ce()}
        </div>

        ${Me()}

      </div>
    `,Ne()}function ce(){switch(d.currentScreen){case`garage`:return ge();case`upgrades`:return ve();case`tasks`:return ye();case`friends`:return Ce();default:return he()}}function le(){let e=T(),t=Math.min(100,d.xp/e*100);return`
    <div class="top-section">

      <header class="topbar">

        <div class="level-block">

          <span class="small-label">
            УРОВЕНЬ
          </span>

          <span class="level-number">
            ${d.level}
          </span>

        </div>

        <div class="coins-block">

          <div class="coin-icon">
            ₽
          </div>

          <span>
            ${m(d.coins)}
          </span>

        </div>

      </header>

      <div class="xp-section">

        <div class="xp-info">

          <span>
            ОПЫТ
          </span>

          <strong>
            ${d.xp} / ${e} XP
          </strong>

        </div>

        <div class="xp-bar">

          <div
            class="xp-fill"
            style="width: ${t}%"
          ></div>

        </div>

      </div>

    </div>
  `}var A=!1,j=`field`,M=!1;function N(e){return d.farmBuildings?.[e]===!0}function P(){return l.reduce((e,t)=>e+(N(t.id)?t.harvestBonus:0),0)}function F(){return l.filter(e=>N(e.id)).length}function ue(){return`
    <div class="farm-landscape" aria-hidden="true">
      <img class="scenery scenery-tree-left" src="${e(`/assets/decor-v3/broadleaf-tree.png`)}" alt="" draggable="false" />
      <img class="scenery scenery-tree-right" src="${e(`/assets/decor-v3/pine-clean.png`)}" alt="" draggable="false" />
      <img class="scenery scenery-flowers" src="${e(`/assets/decor-v3/flower-bush-clean.png`)}" alt="" draggable="false" />
    </div>
  `}function de(){return`
    <section class="farm-map-expansion" aria-label="Постройки на фермерской карте">
      <svg class="farm-village-land" viewBox="0 0 540 470" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="villageGround" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#4b9c55" />
            <stop offset=".53" stop-color="#42944b" />
            <stop offset="1" stop-color="#287c42" />
          </linearGradient>
          <linearGradient id="villagePath" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#ad925a" />
            <stop offset=".4" stop-color="#e2c38b" />
            <stop offset="1" stop-color="#b89565" />
          </linearGradient>
        </defs>
        <rect width="540" height="470" fill="url(#villageGround)" />
        <path d="M0 43Q120 -18 253 39Q376 0 540 47L540 0H0Z" fill="#6cb365" opacity=".45"/>
        <path d="M-30 230Q110 156 250 218T590 183L590 470H-30Z" fill="#2f8747" opacity=".4"/>
        <path d="M0 373Q125 330 246 395T540 350V470H0Z" fill="#246e3d" opacity=".36"/>
        <path d="M270 -25 C245 55 310 84 257 143 S210 220 266 255 S338 332 278 400 S224 438 258 495" fill="none" stroke="#2b6839" stroke-width="60" opacity=".17" />
        <path d="M270 -25 C245 55 310 84 257 143 S210 220 266 255 S338 332 278 400 S224 438 258 495" fill="none" stroke="url(#villagePath)" stroke-width="37" stroke-linecap="round" />
        <path d="M270 -25 C245 55 310 84 257 143 S210 220 266 255 S338 332 278 400 S224 438 258 495" fill="none" stroke="#f6dfad" stroke-width="3" stroke-dasharray="5 20" opacity=".5" />
        <path d="M260 111Q173 105 120 130 M282 131Q370 104 426 125 M259 318Q170 322 105 352 M295 341Q364 336 436 354" fill="none" stroke="#c5a679" stroke-width="16" stroke-linecap="round" opacity=".85"/>
        <g fill="#bde58d" opacity=".27">
          <ellipse cx="55" cy="70" rx="40" ry="13"/><ellipse cx="493" cy="64" rx="46" ry="12"/>
          <ellipse cx="72" cy="244" rx="43" ry="13"/><ellipse cx="465" cy="256" rx="46" ry="12"/>
          <ellipse cx="39" cy="410" rx="28" ry="9"/><ellipse cx="483" cy="414" rx="34" ry="10"/>
        </g>
      </svg>
      <div class="farm-village-title">
        <div><small>🌿 МОЯ ТЕРРИТОРИЯ</small><strong>Фермерский двор</strong></div>
        <span>${l.slice(0,4).filter(e=>N(e.id)).length} / 4 построено</span>
      </div>
      <div class="farm-village-scene">
        ${l.slice(0,4).map(e=>{let t=N(e.id),n=d.level>=e.levelRequired;return`
            <div class="farm-homestead farm-homestead-${e.id} ${t?`is-built`:`is-empty`}" data-plot="${e.id}" aria-label="${e.name}: ${t?`построено`:n?`можно построить`:`откроется на уровне `+e.levelRequired}">
              <div class="farm-homestead-object">
                ${t?`<img src="${e.image}" alt="" draggable="false" loading="lazy" />`:`<span class="farm-foundation" aria-hidden="true"><span>${n?`+`:`🔒`}</span></span>`}
              </div>
              <div class="farm-homestead-label"><strong>${e.name}</strong><small>${t?`✓ Построено`:n?`Место под постройку`:`Уровень ${e.levelRequired}`}</small></div>
            </div>
          `}).join(``)}
      </div>
      <img class="farm-village-detail farm-village-detail-a" src="${e(`/assets/decor-v3/flower-bush-clean.png`)}" alt="" aria-hidden="true" draggable="false" />
      <img class="farm-village-detail farm-village-detail-b" src="${e(`/assets/rock.png`)}" alt="" aria-hidden="true" draggable="false" />
      <img class="farm-village-detail farm-village-detail-c" src="${e(`/assets/well.png`)}" alt="" aria-hidden="true" draggable="false" />
    </section>
  `}function fe(){return`
    <section class="farm-new-lands" aria-label="Новые земли фермы">
      <svg class="farm-new-lands-ground" viewBox="0 0 540 480" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="newLandGrass" x1="0" y1="0" x2=".8" y2="1">
            <stop offset="0" stop-color="#3a8950" />
            <stop offset=".5" stop-color="#368448" />
            <stop offset="1" stop-color="#26713d" />
          </linearGradient>
        </defs>
        <rect width="540" height="480" fill="url(#newLandGrass)" />
        <path d="M0 77Q100 18 226 60T540 31V0H0Z" fill="#6cba72" opacity=".22"/>
        <path d="M0 295Q168 210 283 289T540 278V480H0Z" fill="#1d6f3e" opacity=".3"/>
        <path d="M0 452Q130 380 282 430T540 393V480H0Z" fill="#6eaa5c" opacity=".17"/>
        <path d="M277 -25C250 73 308 106 264 170S211 251 272 302S318 391 278 510" fill="none" stroke="#276c37" stroke-width="62" opacity=".24"/>
        <path d="M277 -25C250 73 308 106 264 170S211 251 272 302S318 391 278 510" fill="none" stroke="#d6bb82" stroke-width="39" stroke-linecap="round"/>
        <path d="M277 -25C250 73 308 106 264 170S211 251 272 302S318 391 278 510" fill="none" stroke="#f5dca3" stroke-width="3" stroke-dasharray="4 18" opacity=".8"/>
        <path d="M260 116Q153 88 75 125 M292 128Q374 104 475 122 M259 340Q151 314 72 364 M294 348Q406 316 486 361" fill="none" stroke="#b89b64" stroke-width="17" stroke-linecap="round" opacity=".8"/>
        <g fill="#9bd077" opacity=".3"><ellipse cx="44" cy="82" rx="33" ry="12"/><ellipse cx="488" cy="78" rx="33" ry="13"/><ellipse cx="55" cy="269" rx="39" ry="12"/><ellipse cx="485" cy="267" rx="39" ry="12"/><ellipse cx="65" cy="440" rx="25" ry="9"/><ellipse cx="490" cy="426" rx="40" ry="12"/></g>
      </svg>
      <div class="farm-new-lands-heading">
        <div><small>🌾 ПРОДОЛЖЕНИЕ ФЕРМЫ</small><strong>Новые земли</strong></div>
        <span>${l.slice(4).filter(e=>N(e.id)).length} / 4 построено</span>
      </div>
      <div class="farm-new-lands-scene">
        ${l.slice(4).map(e=>{let t=N(e.id),n=d.level>=e.levelRequired;return`
            <div class="farm-new-land farm-new-land-${e.id} ${t?`is-built`:`is-empty`}" aria-label="${e.name}: ${t?`построено`:n?`доступно для покупки`:`откроется на уровне `+e.levelRequired}">
              <div class="farm-new-land-object">
                ${t?`<img src="${e.image}" alt="" draggable="false" loading="lazy" />`:`<span class="farm-new-land-foundation" aria-hidden="true">${n?`+`:`🔒`}</span>`}
              </div>
              <div class="farm-new-land-label"><strong>${e.name}</strong><small>${t?`✓ Построено`:n?`Можно построить`:`Уровень ${e.levelRequired}`}</small></div>
            </div>
          `}).join(``)}
      </div>
      <div class="farm-new-lands-tail" aria-hidden="true">✦ 🌱 ✦</div>
    </section>
  `}function pe(){let e=P();return`
    <div class="territory-overlay" id="territoryOverlay" ${A?``:`hidden`}>
      <div class="territory-backdrop" data-close-territory="true"></div>
      <section class="territory-sheet" role="dialog" aria-modal="true" aria-label="Постройки фермы">
        <div class="territory-sheet-header">
          <div>
            <span class="territory-eyebrow">🏡 РАЗВИТИЕ ХОЗЯЙСТВА</span>
            <h2>Моя территория</h2>
            <span class="territory-sheet-subtitle">Постройки: ${F()} / ${l.length} · Бонус за урожай: +${m(e)} 🪙</span>
          </div>
          <button type="button" class="territory-close" id="closeTerritory" aria-label="Закрыть">✕</button>
        </div>
        <div class="territory-building-list">
          ${l.map(e=>{let t=N(e.id),n=d.level<e.levelRequired,r=d.coins<e.price;return`
              <article class="territory-building-card ${t?`is-built`:``}">
                <div class="territory-building-art"><img src="${e.image}" alt="" loading="lazy" draggable="false" /></div>
                <div class="territory-building-info">
                  <h3>${e.name}</h3>
                  <p>${e.detail}</p>
                  <span class="territory-building-bonus">🌾 +${m(e.harvestBonus)} монет за урожай</span>
                  ${t?`<span class="territory-built-label">✓ Построено</span>`:`<button type="button" class="territory-buy" data-build="${e.id}" ${n||r?`disabled`:``}>
                         ${n?`🔒 Уровень ${e.levelRequired}`:r?`🪙 Нужно ${m(e.price)}`:`Построить · ${m(e.price)} 🪙`}
                       </button>`}
                </div>
              </article>
            `}).join(``)}
        </div>
        <p class="territory-help">Постройки покупаются один раз и сохраняются. Основной доход трактора не меняется.</p>
      </section>
    </div>
  `}function me(e){let t=l.find(t=>t.id===e);!t||N(e)||d.level<t.levelRequired||d.coins<t.price||(d.coins-=t.price,(!d.farmBuildings||typeof d.farmBuildings!=`object`)&&(d.farmBuildings={...u.farmBuildings}),d.farmBuildings[e]=!0,f(),A=!0,k())}function he(){let e=p(),t=D(),n=X(),r=n/i*100,a=s();return`
    <div class="farm-screen">

      <main class="farm-area">
        <div class="farm-scene-heading">
          <div>
            <span class="farm-scene-eyebrow">🌿 МОЁ ХОЗЯЙСТВО</span>
            <h2>Фермерская долина</h2>
          </div>
          <span class="farm-scene-tag" id="farmSceneTag">${j===`field`?`УЧАСТОК 01`:j===`yard`?`РАЙОН 01`:`РАЙОН 02`}</span>
        </div>

        <div class="farm-territory-tabs" role="tablist" aria-label="Разделы фермы">
          <button type="button" class="farm-territory-tab ${j===`field`?`is-active`:``}" id="farmTerritoryTabField" data-farm-territory="field" role="tab" aria-label="Поле" aria-controls="farmTerritoryPanelField" aria-selected="${j===`field`}" tabindex="${j===`field`?0:-1}">
            <span class="farm-territory-tab-title">🚜 Поле</span>
            <span class="farm-territory-tab-count">Играть</span>
          </button>
          <button type="button" class="farm-territory-tab ${j===`yard`?`is-active`:``}" id="farmTerritoryTabYard" data-farm-territory="yard" role="tab" aria-label="Фермерский двор" aria-controls="farmTerritoryPanelYard" aria-selected="${j===`yard`}" tabindex="${j===`yard`?0:-1}">
            <span class="farm-territory-tab-title">🏡 Фермерский двор</span>
            <span class="farm-territory-tab-count">${l.slice(0,4).filter(e=>N(e.id)).length}/4</span>
          </button>
          <button type="button" class="farm-territory-tab ${j===`lands`?`is-active`:``}" id="farmTerritoryTabLands" data-farm-territory="lands" role="tab" aria-label="Новые земли" aria-controls="farmTerritoryPanelLands" aria-selected="${j===`lands`}" tabindex="${j===`lands`?0:-1}">
            <span class="farm-territory-tab-title">🌾 Новые земли</span>
            <span class="farm-territory-tab-count">${l.slice(4).filter(e=>N(e.id)).length}/4</span>
          </button>
        </div>
        <div class="farm-map-world" aria-label="Выбранная часть фермы">
          <div class="farm-territory-panel farm-field-panel" id="farmTerritoryPanelField" role="tabpanel" aria-labelledby="farmTerritoryTabField" ${j===`field`?``:`hidden`}>
          <section class="farm-crop-picker" aria-label="Выбор культуры">
            <div class="farm-crop-current">
              <span class="farm-crop-current-icon" aria-hidden="true">${a.icon}</span>
              <div class="farm-crop-current-info">
                <small>СЕЙЧАС ВЫРАЩИВАЕМ</small>
                <strong>${a.name}</strong>
              </div>
              <button id="toggleCropPicker" class="farm-crop-toggle" type="button" aria-controls="farmCropOptions" aria-expanded="${M}">${M?`Свернуть`:`Сменить`}</button>
            </div>
            <div id="farmCropOptions" class="farm-crop-options" ${M?``:`hidden`}>
              ${o.map(e=>{let t=d.level<e.levelRequired,n=a.id===e.id;return`<button type="button" class="farm-crop-option ${n?`is-selected`:``}" data-select-crop="${e.id}" ${t||n?`disabled`:``} aria-label="${e.name}${t?`, откроется на уровне `+e.levelRequired:``}">
                  <span class="farm-crop-option-icon" aria-hidden="true">${e.icon}</span>
                  <span class="farm-crop-option-info"><strong>${e.name}</strong><small>${t?`🔒 Уровень ${e.levelRequired}`:n?`✓ Выбрано`:`+${m(e.harvestBonus)} за урожай`}</small></span>
                </button>`}).join(``)}
            </div>
            <p class="farm-crop-note" ${M?``:`hidden`}>У всех культур 100 нажатий на сбор. Выбор не сбрасывает прогресс.</p>
          </section>
          <div class="farm-map-core" data-crop="${a.id}" aria-label="Игровое поле с трактором">
            <div class="farm-map-light" aria-hidden="true"></div>
            <div class="farm-crop-field-tag" aria-hidden="true">${a.icon} ${a.name}</div>
            <div class="farm-animated-clouds" aria-hidden="true"><span></span><span></span></div>

          <img
            class="farm-field"
            src="${a.fieldImage}"
            draggable="false"
            alt=""
          />

          <img
            class="farm-field farm-field-harvested"
            src="${a.harvestedImage}"
            style="--harvest-progress: ${r}%"
            draggable="false"
            alt=""
            aria-hidden="true"
          />

          <div class="farm-wheat-breeze" aria-hidden="true"></div>
          ${ue()}

          <div id="harvestToast" class="harvest-toast" role="status" aria-live="polite"></div>

          <button
            id="tractorButton"
            class="tractor-button"
            aria-label="Нажать на трактор и собрать урожай"
          >
            <img
              class="tractor"
              src="${e.image}"
              draggable="false"
              alt="Трактор"
            />
          </button>

          <div id="coinEffectContainer" class="coin-effects"></div>
          </div>
          </div>
          <div class="farm-territory-panel" id="farmTerritoryPanelYard" role="tabpanel" aria-labelledby="farmTerritoryTabYard" ${j===`yard`?``:`hidden`}>
            ${de()}
          </div>
          <div class="farm-territory-panel" id="farmTerritoryPanelLands" role="tabpanel" aria-labelledby="farmTerritoryTabLands" ${j===`lands`?``:`hidden`}>
            ${fe()}
          </div>
        </div>

        <div class="harvest-progress-panel" aria-label="Сбор урожая">
          <div class="harvest-progress-top">
            <span>${a.icon} УРОЖАЙ С ПОЛЯ</span>
            <strong id="harvestCount">${n} / ${i}</strong>
          </div>
          <div class="harvest-progress-track">
            <div id="harvestFill" class="harvest-progress-fill" style="width: ${r}%"></div>
          </div>
          <div class="harvest-reward-hint">Награда за полный сбор: +<span id="harvestReward">${m(c())}</span> 🪙</div>
        </div>
      </main>

      <section class="energy-section">

        <div class="energy-info">

          <div class="energy-title">
            <span class="lightning">
              ⚡
            </span>

            <span>
              ЭНЕРГИЯ
            </span>
          </div>

          <div class="energy-value">

            <span id="energy">
              ${d.energy}
            </span>

            /

            <span id="maxEnergy">
              ${d.maxEnergy}
            </span>

          </div>

        </div>

        <div class="energy-bar">

          <div
            id="energyFill"
            class="energy-fill"
            style="
              width:
              ${d.energy/d.maxEnergy*100}%
            "
          ></div>

        </div>

        <div class="click-info">

          +${t}

          <span class="mini-coin">
            ●
          </span>

          за нажатие на трактор

          ${h()>0?`
                <div class="click-bonus">
                  ⚡ Бонус улучшений:
                  +${h()}
                </div>
              `:``}

        </div>

        <button type="button" id="openTerritory" class="territory-entry">
          <span class="territory-entry-icon">🏡</span>
          <span class="territory-entry-label"><strong>ТЕРРИТОРИЯ ФЕРМЫ</strong><small>Постройки и развитие хозяйства</small></span>
          <span class="territory-entry-count">${F()} / ${l.length} <span>›</span></span>
        </button>

      </section>

      ${pe()}

    </div>
  `}function ge(){return`
    <section class="garage-screen">

      <div class="garage-header">

        <div>

          <div class="garage-small">
            МОЯ ТЕХНИКА
          </div>

          <h1>
            Гараж
          </h1>

        </div>

        <div class="garage-count">
          ${d.ownedTractors.length}
          /
          ${t.length}
        </div>

      </div>

      <div class="tractor-list">
        ${t.map(_e).join(``)}
      </div>

    </section>
  `}function _e(e){let t=d.ownedTractors.includes(e.id),n=d.selectedTractor===e.id,r=d.level<e.levelRequired,i=``;return i=n?`
      <button
        class="
          garage-button
          selected-button
        "
        disabled
      >
        ✓ ВЫБРАН
      </button>
    `:t?`
      <button
        class="
          garage-button
          choose-tractor
        "
        data-id="${e.id}"
      >
        ВЫБРАТЬ
      </button>
    `:r?`
      <button
        class="
          garage-button
          locked-button
        "
        disabled
      >
        🔒 УРОВЕНЬ
        ${e.levelRequired}
      </button>
    `:`
      <button
        class="
          garage-button
          buy-tractor
        "
        data-id="${e.id}"
      >
        КУПИТЬ ·
        ${m(e.price)}
      </button>
    `,`
    <div
      class="
        tractor-card
        ${n?`selected-card`:``}
        ${t?``:`locked-card`}
        ${e.rarity?`tractor-tier-${e.rarity}`:``}
      "
    >

      <div class="tractor-image-box">

        ${t?``:`
              <div class="tractor-lock">
                🔒
              </div>
            `}

        <img
          src="${e.image}"
          class="garage-tractor-image"
          draggable="false"
        />

      </div>

      <div class="tractor-card-info">

        <div class="tractor-number">
          <span>ТЕХНИКА ${e.id}</span>
          ${e.rarity?`<span class="tractor-rarity rarity-${e.rarity}">${e.rarityLabel}</span>`:``}
        </div>

        <div class="tractor-name">
          ${e.name}
        </div>

        <div class="tractor-power">
          <span>⚡</span>
          +${e.power}
          за нажатие
        </div>

        ${t?`
              <div class="tractor-owned">
                ✓ В собственности
              </div>
            `:`
              <div class="tractor-price">
                🪙
                ${m(e.price)}
              </div>
            `}

        ${i}

      </div>

    </div>
  `}function ve(){let e=d.upgrades.power,t=d.upgrades.energy,n=d.upgrades.recovery,r=d.upgrades.offline,i=d.upgrades.luck,a=g(),o=ie(),s=d.developmentRewards||[],c=_.find(e=>!s.includes(e.level)),l=``;return l=o?`
      <div class="development-next-reward">

        <div>
          <span>
            🎁 Награда за ${o.level}/55
          </span>

          <strong>
            🪙 ${m(o.coins)}
            ${o.xp>0?` + ⭐ ${o.xp} XP`:``}
          </strong>
        </div>

        <button
          class="development-reward-button"
          data-development-level="${o.level}"
        >
          ЗАБРАТЬ
        </button>

      </div>
    `:c?`
      <div class="development-next-reward">

        <span>
          Следующая награда ·
          ${c.level}/55
        </span>

        <strong>
          🪙 ${m(c.coins)}
          ${c.xp>0?` + ⭐ ${c.xp} XP`:``}
        </strong>

      </div>
    `:`
      <div class="development-next-reward completed">
        🏆 Все награды развития получены
      </div>
    `,`
    <section class="upgrades-screen">

      <div class="upgrades-header">

        <div class="garage-small">
          РАЗВИТИЕ ФЕРМЫ
        </div>

        <h1>
          Улучшения
        </h1>

        <p>
          Прокачивай ферму
          и зарабатывай быстрее
        </p>

      </div>

      <div class="farm-development">

        <div class="farm-development-top">

          <div>

            <span class="farm-development-small">
              🏆 ОБЩЕЕ РАЗВИТИЕ
            </span>

            <strong>
              Уровень фермы
            </strong>

          </div>

          <div class="farm-development-level">
            ${a.current}/${a.max}
          </div>

        </div>

        <div class="farm-development-bar">

          <div
            class="farm-development-fill"
            style="width:${a.percent}%"
          ></div>

        </div>

        <div class="farm-development-bottom">

          <span>
            Прогресс развития
          </span>

          <strong>
            ${a.percent}%
          </strong>

        </div>

        ${l}

      </div>

      <div class="upgrade-list">

        ${I({type:`power`,icon:`⚡`,title:`Мощность`,level:e,description:`Увеличивает доход за каждое нажатие.`,current:`+${h()} к доходу`,next:`+${h()+5} к доходу`,price:v()})}

        ${I({type:`energy`,icon:`🔋`,title:`Запас энергии`,level:t,description:`Позволяет дольше работать без остановки.`,current:`${d.maxEnergy} энергии`,next:`${d.maxEnergy+250} энергии`,price:y()})}

        ${I({type:`recovery`,icon:`♻️`,title:`Восстановление`,level:n,description:`Ускоряет автоматическое восстановление энергии.`,current:`+1 каждые ${oe()} сек.`,next:n>=5?`МАКСИМУМ`:`+1 каждые ${([2500,2e3,1500,1e3,750][n]/1e3).toString().replace(`.`,`,`)} сек.`,price:b(),maxed:n>=5})}

        ${I({type:`offline`,icon:`💰`,title:`Офлайн-доход`,level:r,description:`Увеличивает заработок, пока тебя нет в игре.`,current:`+${r*10}% к офлайн-доходу`,next:r>=10?`МАКСИМУМ`:`+${(r+1)*10}% к офлайн-доходу`,price:x(),maxed:r>=10})}

        ${I({type:`luck`,icon:`🍀`,title:`Удача`,level:i,description:`Даёт шанс получить двойной доход за нажатие.`,current:`${i*2}% шанс x2`,next:i>=10?`МАКСИМУМ`:`${(i+1)*2}% шанс x2`,price:S(),maxed:i>=10})}

      </div>

    </section>
  `}function I({type:e,icon:t,title:n,level:r,description:i,current:a,next:o,price:s,maxed:c=!1}){return`
    <div class="upgrade-card">

      <div class="upgrade-card-top">

        <div class="upgrade-icon">
          ${t}
        </div>

        <div class="upgrade-title-box">

          <div class="upgrade-level">
            УРОВЕНЬ ${r}
          </div>

          <div class="upgrade-title">
            ${n}
          </div>

        </div>

      </div>

      <div class="upgrade-description">
        ${i}
      </div>

      <div class="upgrade-stats">

        <div class="upgrade-stat">

          <span class="upgrade-stat-label">
            СЕЙЧАС
          </span>

          <strong>
            ${a}
          </strong>

        </div>

        <div class="upgrade-arrow">
          →
        </div>

        <div class="upgrade-stat">

          <span class="upgrade-stat-label">
            ПОСЛЕ
          </span>

          <strong class="upgrade-next">
            ${o}
          </strong>

        </div>

      </div>

      ${c?`
            <button
              class="
                upgrade-button
                max-upgrade
              "
              disabled
            >
              ✓ МАКСИМАЛЬНЫЙ УРОВЕНЬ
            </button>
          `:`
            <button
              class="
                upgrade-button
                buy-upgrade
              "
              data-upgrade="${e}"
            >
              УЛУЧШИТЬ · 🪙
              ${m(s)}
            </button>
          `}

    </div>
  `}function ye(){H();let e=n.filter(e=>d.claimedTasks.includes(e.id)).length,t=U(),r=t.filter(e=>d.dailyTasks.claimed.includes(e.id)).length;return`
    <section class="tasks-screen">

      <div class="tasks-header">

        <div>

          <div class="garage-small">
            ЗАДАНИЯ ФЕРМЕРА
          </div>

          <h1>
            Задания
          </h1>

          <p>
            Выполняй задания
            и развивай свою ферму
          </p>

        </div>

        <div class="tasks-count">
          ${r}/${t.length}
        </div>

      </div>


      <div class="tasks-section-title">

        <div>
          <span>☀️</span>
          Ежедневные задания
        </div>

        <small>
          Обновляются каждый день
        </small>

      </div>


      <div class="task-list daily-task-list">

        ${t.map(be).join(``)}

      </div>


      <div class="daily-bonus">

        <div class="daily-bonus-icon">
          🎁
        </div>

        <div class="daily-bonus-info">

          <strong>
            Бонус за все задания
          </strong>

          <span>
            ${d.dailyTasks.bonusClaimed?`Все ежедневные задания выполнены`:`Выполни 4 ежедневных задания`}
          </span>

          <div class="daily-bonus-reward">
            🪙 5000
            <span>+</span>
            ⭐ 50 XP
          </div>

        </div>

        <div class="
          daily-bonus-progress
          ${d.dailyTasks.bonusClaimed?`claimed`:``}
        ">
          ${d.dailyTasks.bonusClaimed?`ПОЛУЧЕНО ✓`:`${r}/4`}
        </div>

      </div>


      <div class="tasks-section-title starter-title">

        <div>
          <span>🌱</span>
          Стартовые задания
        </div>

        <small>
          ${e}/${n.length}
        </small>

      </div>


      <div class="task-list">

        ${n.map(xe).join(``)}

      </div>

    </section>
  `}function be(e){let t=W(e),n=Math.min(100,Math.floor(t/e.target*100)),r=t>=e.target,i=d.dailyTasks.claimed.includes(e.id),a=``;return a=i?`
      <button
        class="task-button claimed"
        disabled
      >
        Получено ✓
      </button>
    `:r?`
      <button
        class="task-button claim-daily-task"
        data-task-id="${e.id}"
      >
        Забрать
      </button>
    `:`
      <button
        class="task-button"
        disabled
      >
        ${t}/${e.target}
      </button>
    `,`
    <div class="
      task-card
      ${r?`completed`:``}
    ">

      <div class="task-icon">
        ${e.icon}
      </div>

      <div class="task-info">

        <strong>
          ${e.title}
        </strong>

        <span>
          ${e.description}
        </span>

        <div class="task-progress">

          <div
            class="task-progress-fill"
            style="width:${n}%"
          ></div>

        </div>

        <small>
          ${t}/${e.target}
        </small>

      </div>

      <div class="task-reward">

        <span>
          🪙 ${e.reward}
        </span>

        ${a}

      </div>

    </div>
  `}function xe(e){let t=O(e),n=Math.min(t,e.target),r=Math.min(100,n/e.target*100),i=t>=e.target,a=d.claimedTasks.includes(e.id);return`
    <div
      class="
        task-card
        ${a?`task-completed`:``}
      "
    >

      <div class="task-top">

        <div class="task-icon">
          ${e.icon}
        </div>

        <div class="task-info">

          <div class="task-title">
            ${e.title}
          </div>

          <div class="task-description">
            ${e.description}
          </div>

        </div>

      </div>

      <div class="task-progress-row">

        <span>
          ПРОГРЕСС
        </span>

        <strong>
          ${m(n)}
          /
          ${m(e.target)}
        </strong>

      </div>

      <div class="task-progress-bar">

        <div
          class="task-progress-fill"
          style="
            width:
            ${r}%
          "
        ></div>

      </div>

      <div class="task-bottom">

        <div class="task-reward">
          🪙
          ${m(e.reward)}
        </div>

        ${a?`
              <button
                class="
                  task-button
                  task-done
                "
                disabled
              >
                ✓ ВЫПОЛНЕНО
              </button>
            `:i?`
                <button
                  class="
                    task-button
                    claim-task
                  "
                  data-task="${e.id}"
                >
                  ЗАБРАТЬ
                </button>
              `:`
                <button
                  class="
                    task-button
                    task-wait
                  "
                  disabled
                >
                  В ПРОЦЕССЕ
                </button>
              `}

      </div>

    </div>
  `}function Se(){return`FARM-`+String(1e5+d.level*731)}function Ce(){let e=d.friends.claimedRewards.length;return`
    <section class="friends-screen">

      <div class="friends-header">
        <div class="friends-header-copy">
          <div class="garage-small">ФЕРМЕРСКАЯ КОМАНДА</div>
          <h1>Друзья</h1>
          <p>Приглашай друзей и развивайте ферму вместе</p>
        </div>
        <div class="friends-header-count" title="Полученные награды за приглашения">
          <strong>${e}/${r.length}</strong>
          <span>наград</span>
        </div>
      </div>

      <div class="friends-hero">
        <div class="friends-hero-intro">
          <div class="friends-main-icon" aria-hidden="true">👥</div>
          <div class="friends-hero-copy">
            <div class="friends-hero-kicker">ФЕРМЕРСКОЕ СООБЩЕСТВО</div>
            <div class="friends-hero-title">Расти вместе с друзьями</div>
            <div class="friends-hero-text">
              Приглашай игроков, собирай команду и открывай награды.
            </div>
          </div>
        </div>

        <div class="friends-stats">
          <div class="friend-stat">
            <span>ПРИГЛАШЕНО</span>
            <strong>${m(d.friends.invited)}</strong>
            <small>друзей</small>
          </div>
          <div class="friend-stat">
            <span>ЗАРАБОТАНО</span>
            <strong>${m(d.friends.earned)}</strong>
            <small>🪙 монет</small>
          </div>
        </div>
      </div>

      <div class="invite-card">
        <div class="invite-card-heading">
          <div>
            <div class="invite-label">ТВОЙ КОД ПРИГЛАШЕНИЯ</div>
            <p>Скопируй и отправь знакомому</p>
          </div>
          <span class="invite-card-symbol" aria-hidden="true">🔗</span>
        </div>

        <div class="invite-code-row">
          <div id="inviteCode" class="invite-code" aria-label="Код приглашения">${Se()}</div>
          <button id="copyInviteCode" class="copy-invite-button" type="button" aria-label="Копировать код приглашения" title="Копировать код">📋</button>
        </div>
        <button id="inviteFriendButton" class="invite-friend-button" type="button">
          📋 КОПИРОВАТЬ КОД ДЛЯ ДРУГА
        </button>
        <div id="inviteStatus" class="invite-status" role="status" aria-live="polite"></div>
        <div class="invite-note">
          ℹ️ Пока доступен только код: Telegram-ссылки и автоматический учёт друзей будут подключены при публикации Mini App.
        </div>
      </div>

      <div class="friends-howto">
        <div class="friends-howto-heading">🌱 Как это работает</div>
        <div class="friends-howto-steps">
          <div class="friends-step"><span>1</span><p>Скопируй код приглашения</p></div>
          <div class="friends-step"><span>2</span><p>Отправь код другу</p></div>
          <div class="friends-step"><span>3</span><p>После подключения Telegram Mini App приглашения будут учитываться автоматически</p></div>
        </div>
      </div>

      <div class="friend-rewards-title">
        <div class="friend-rewards-heading">
          <strong>🎁 Награды за друзей</strong>
          <small>Открывай награды, приглашая игроков</small>
        </div>
        <span>${e}/${r.length} наград</span>
      </div>

      <div class="friend-rewards">
        ${r.slice(0,3).map(L).join(``)}
        <details class="friend-more-rewards">
          <summary class="friend-more-toggle">
            <span class="friend-more-icon" aria-hidden="true">🏆</span>
            <span class="friend-more-label">
              <strong>Большие награды</strong>
              <small>За 10, 25, 50 и 100 друзей</small>
            </span>
            <span class="friend-more-chevron" aria-hidden="true">⌄</span>
          </summary>
          <div class="friend-more-list">
            ${r.slice(3).map(L).join(``)}
          </div>
        </details>
      </div>

      <div class="friends-roster">
        <div class="friends-roster-title">👥 Приглашённые друзья</div>
        <div class="friends-roster-empty">
          <div aria-hidden="true">🌱</div>
          <strong>${d.friends.invited>0?`Учтено друзей: ${m(d.friends.invited)}`:`Пока никого нет`}</strong>
          <p>Имена и список участников появятся после подключения настоящей реферальной системы Telegram.</p>
        </div>
      </div>

    </section>
  `}function L(e){let t=d.friends.claimedRewards.includes(e.id),n=d.friends.invited>=e.friends,r=Math.min(d.friends.invited,e.friends),i=Math.min(100,r/e.friends*100);return`
    <div
      class="
        friend-reward-card
        ${t?`friend-reward-completed`:``}
      "
    >

      <div class="friend-reward-top">

        <div class="friend-reward-icon">
          🎁
        </div>

        <div class="friend-reward-info">

          <div class="friend-reward-name">

            ${e.friends}

            ${e.friends%10==1&&e.friends%100!=11?`друг`:e.friends%10>=2&&e.friends%10<=4&&!(e.friends%100>=12&&e.friends%100<=14)?`друга`:`друзей`}

          </div>

          <div class="friend-reward-coins">
            🪙
            ${m(e.reward)}
          </div>

        </div>

      </div>

      <div class="friend-reward-progress">

        <div
          class="
            friend-reward-progress-row
          "
        >

          <span>
            ПРОГРЕСС
          </span>

          <strong>
            ${r}/${e.friends}
          </strong>

        </div>

        <div class="friend-progress-bar">

          <div
            class="friend-progress-fill"
            style="
              width:
              ${i}%
            "
          ></div>

        </div>

      </div>

      ${t?`
            <button
              class="
                friend-reward-button
                friend-reward-done
              "
              disabled
            >
              ✓ ПОЛУЧЕНО
            </button>
          `:n?`
              <button
                class="
                  friend-reward-button
                  claim-friend-reward
                "
                data-reward="${e.id}"
              >
                ЗАБРАТЬ
                ${m(e.reward)}
                🪙
              </button>
            `:`
              <button
                class="
                  friend-reward-button
                  friend-reward-locked
                "
                disabled
              >
                🔒 НУЖНО ДРУЗЕЙ:
                ${e.friends}
              </button>
            `}

    </div>
  `}function we(e){let t=r.find(t=>t.id===e);t&&(d.friends.claimedRewards.includes(e)||d.friends.invited<t.friends||(d.coins+=t.reward,d.friends.earned+=t.reward,d.friends.claimedRewards.push(e),f(),k()))}function R(e,t=!1){let n=document.querySelector(`#inviteStatus`);n&&(n.textContent=e,n.classList.toggle(`invite-status-error`,t),n.classList.add(`invite-status-visible`))}async function z(){let e=Se();try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(e);else{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select();let n=document.execCommand(`copy`);if(t.remove(),!n)throw Error(`Clipboard unavailable`)}R(`✓ Код скопирован. Его можно отправить другу.`)}catch{R(`Скопируй код вручную: ${e}`,!0)}}function Te(){z().then(()=>{let e=document.querySelector(`#inviteStatus`);e&&!e.classList.contains(`invite-status-error`)&&R(`✓ Код скопирован. Отправь его другу — Telegram-приглашения пока не подключены.`)})}var B=[500,750,1e3,1500,2e3,3e3,5e3];function V(){let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function H(){let e=V();d.dailyTasks.date!==e&&(d.dailyTasks.date=e,d.dailyTasks.claimed=[],d.dailyTasks.bonusClaimed=!1,d.dailyTasks.startStats={clicks:d.stats.clicks,earned:d.stats.earned,energySpent:d.stats.energySpent,upgradesBought:d.stats.upgradesBought},f())}function U(){let e=Math.max(1,d.level);return[{id:`daily-clicks`,icon:`🚜`,title:`Работа в поле`,description:`Сделай ${300*e} кликов`,target:300*e,progress:d.stats.clicks-d.dailyTasks.startStats.clicks,reward:1e3*e},{id:`daily-earned`,icon:`💰`,title:`Хороший урожай`,description:`Заработай ${15e3*e} монет`,target:15e3*e,progress:d.stats.earned-d.dailyTasks.startStats.earned,reward:2e3*e},{id:`daily-energy`,icon:`⚡`,title:`Полный рабочий день`,description:`Потрать ${2e3*e} энергии`,target:2e3*e,progress:d.stats.energySpent-d.dailyTasks.startStats.energySpent,reward:1500*e},{id:`daily-upgrades`,icon:`🔧`,title:`Развитие хозяйства`,description:`Купи ${Math.min(2+Math.floor(e/5),5)} улучшения`,target:Math.min(2+Math.floor(e/5),5),progress:d.stats.upgradesBought-d.dailyTasks.startStats.upgradesBought,reward:2500*e}]}function W(e){return Math.min(Math.max(0,e.progress),e.target)}function Ee(e){if(!e)return null;let t=new Date(`${e}T00:00:00`),n=new Date(`${V()}T00:00:00`).getTime()-t.getTime();return Math.round(n/864e5)}function De(){let e=d.dailyReward.lastClaimDate;if(!e){d.dailyReward.day=1;return}let t=Ee(e);t!==0&&t>1&&(d.dailyReward.day=1)}function G(){return De(),d.dailyReward.lastClaimDate!==V()}function K(){if(!G())return;let e=document.querySelector(`.daily-overlay`);e&&e.remove();let t=Math.min(Math.max(d.dailyReward.day,1),7),n=B[t-1],r=document.createElement(`div`);r.className=`daily-overlay`,r.innerHTML=`
    <div class="daily-card">

      <div class="daily-glow"></div>

      <div class="daily-main-icon">
        🎁
      </div>

      <div class="daily-small">
        ЕЖЕДНЕВНАЯ НАГРАДА
      </div>

      <div class="daily-title">
        День ${t}
      </div>

      <div class="daily-subtitle">
        Заходи каждый день
        и получай больше монет
      </div>

      <div class="daily-days">

        ${B.map((e,n)=>{let r=n+1,i=r===t,a=r<t;return`
              <div
                class="
                  daily-day
                  ${i?`daily-day-active`:``}
                  ${a?`daily-day-passed`:``}
                "
              >

                <span>
                  ДЕНЬ ${r}
                </span>

                <strong>
                  ${a?`✓`:`🪙 ${m(e)}`}
                </strong>

              </div>
            `}).join(``)}

      </div>

      <div class="daily-current-reward">

        <span>
          🪙
        </span>

        <div>

          <small>
            НАГРАДА СЕГОДНЯ
          </small>

          <strong>
            +${m(n)}
          </strong>

        </div>

      </div>

      <button
        id="claimDailyReward"
        class="daily-button"
      >
        ЗАБРАТЬ НАГРАДУ
      </button>

    </div>
  `,document.body.appendChild(r),r.querySelector(`#claimDailyReward`).addEventListener(`click`,()=>{Oe(),r.remove()})}function Oe(){if(!G())return;let e=Math.min(Math.max(d.dailyReward.day,1),7),t=B[e-1];d.coins+=t,d.dailyReward.lastClaimDate=V(),d.dailyReward.totalClaims+=1,e>=7?d.dailyReward.day=1:d.dailyReward.day=e+1,f(),k()}function ke(e){let t=Math.floor(e/3600),n=Math.floor(e%3600/60);return t>0?`${t} ч ${n} мин`:`${Math.max(1,n)} мин`}function Ae(){if(!d.offline||d.offline.pendingCoins<=0||d.offline.awaySeconds<60)return;let e=document.querySelector(`.offline-overlay`);e&&e.remove();let t=document.createElement(`div`);t.className=`offline-overlay`,t.innerHTML=`
    <div class="offline-card">

      <div class="offline-glow"></div>

      <div class="offline-icon">
        🌙
      </div>

      <div class="offline-small">
        С ВОЗВРАЩЕНИЕМ
      </div>

      <div class="offline-title">
        Пока тебя не было
      </div>

      <div class="offline-time">
        ⏱️ ${ke(d.offline.awaySeconds)}
      </div>

      <div class="offline-description">
        Ферма продолжала работать
        и принесла тебе:
      </div>

      <div class="offline-reward">

        <span class="offline-coin">
          🪙
        </span>

        <div>
          <small>
            ЗАРАБОТАНО
          </small>

          <strong>
            +${m(d.offline.pendingCoins)}
          </strong>
        </div>

      </div>

      <div class="offline-limit">
        Максимальный офлайн-доход:
        ${te} часов
      </div>

      <button
        id="claimOfflineIncome"
        class="offline-button"
      >
        ЗАБРАТЬ МОНЕТЫ
      </button>

    </div>
  `,document.body.appendChild(t),t.querySelector(`#claimOfflineIncome`).addEventListener(`click`,()=>{je(),t.remove()})}function je(){if(!d.offline)return;let e=Math.max(0,Number(d.offline.pendingCoins)||0);e<=0||(d.coins+=e,d.offline.pendingCoins=0,d.offline.awaySeconds=0,d.offline.lastSeen=Date.now(),f(),k(),setTimeout(()=>{K()},300))}function Me(){return`
    <nav class="bottom-menu">

      ${q(`farm`,`🏠`,`Ферма`)}

      ${q(`garage`,`🚜`,`Техника`)}

      ${q(`upgrades`,`⬆️`,`Улучшения`)}

      ${q(`tasks`,`🎯`,`Задания`)}

      ${q(`friends`,`👥`,`Друзья`)}

    </nav>
  `}function q(e,t,n){return`
    <button
      class="
        menu-item
        ${d.currentScreen===e?`active`:``}
      "
      data-screen="${e}"
    >

      <span class="menu-icon">
        ${t}
      </span>

      <span>
        ${n}
      </span>

    </button>
  `}var J=[`field`,`yard`,`lands`];function Y(e,t=!1){if(!J.includes(e))return;j=e,document.querySelectorAll(`[data-farm-territory]`).forEach(n=>{let r=n.dataset.farmTerritory===e;n.classList.toggle(`is-active`,r),n.setAttribute(`aria-selected`,String(r)),n.tabIndex=r?0:-1,r&&t&&n.focus()});for(let[t,n]of Object.entries({field:`#farmTerritoryPanelField`,yard:`#farmTerritoryPanelYard`,lands:`#farmTerritoryPanelLands`})){let r=document.querySelector(n);r&&(r.hidden=t!==e)}let n=document.querySelector(`#farmSceneTag`);n&&(n.textContent=e===`field`?`УЧАСТОК 01`:e===`yard`?`РАЙОН 01`:`РАЙОН 02`)}function Ne(){let e=document.querySelector(`#toggleCropPicker`);e?.addEventListener(`click`,()=>{M=!M;let t=document.querySelector(`#farmCropOptions`);t&&(t.hidden=!M);let n=document.querySelector(`.farm-crop-note`);n&&(n.hidden=!M),e.textContent=M?`Свернуть`:`Сменить`,e.setAttribute(`aria-expanded`,String(M))}),document.querySelectorAll(`[data-select-crop]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=o.find(t=>t.id===e.dataset.selectCrop);!t||d.level<t.levelRequired||d.selectedCrop===t.id||(d.selectedCrop=t.id,M=!1,f(),k())})}),document.querySelectorAll(`[data-farm-territory]`).forEach(e=>{e.addEventListener(`click`,()=>Y(e.dataset.farmTerritory)),e.addEventListener(`keydown`,t=>{if(![`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(t.key))return;t.preventDefault();let n=J.indexOf(e.dataset.farmTerritory);Y(t.key===`Home`?J[0]:t.key===`End`?J.at(-1):J[(n+(t.key===`ArrowRight`?1:-1)+J.length)%J.length],!0)})});let t=document.querySelector(`#openTerritory`);t&&t.addEventListener(`click`,()=>{A=!0;let e=document.querySelector(`#territoryOverlay`);e&&(e.hidden=!1)});function n(){A=!1;let e=document.querySelector(`#territoryOverlay`);e&&(e.hidden=!0)}document.querySelector(`#closeTerritory`)?.addEventListener(`click`,n),document.querySelector(`[data-close-territory]`)?.addEventListener(`click`,n),document.querySelectorAll(`[data-build]`).forEach(e=>{e.addEventListener(`click`,()=>me(e.dataset.build))}),document.querySelectorAll(`[data-screen]`).forEach(e=>{e.addEventListener(`click`,()=>{d.currentScreen=e.dataset.screen,A=!1,k()})}),document.querySelectorAll(`.claim-daily-task`).forEach(e=>{e.addEventListener(`click`,()=>{Pe(e.dataset.taskId)})});let r=document.querySelector(`#tractorButton`);r&&r.addEventListener(`click`,Re),document.querySelectorAll(`.choose-tractor`).forEach(e=>{e.addEventListener(`click`,()=>{d.selectedTractor=Number(e.dataset.id),f(),k()})}),document.querySelectorAll(`.buy-tractor`).forEach(e=>{e.addEventListener(`click`,()=>{Be(Number(e.dataset.id))})}),document.querySelectorAll(`.buy-upgrade`).forEach(e=>{e.addEventListener(`click`,()=>{Ve(e.dataset.upgrade)})}),document.querySelectorAll(`.development-reward-button`).forEach(e=>{e.addEventListener(`click`,()=>{ae(Number(e.dataset.developmentLevel))})}),document.querySelectorAll(`.claim-task`).forEach(e=>{e.addEventListener(`click`,()=>{He(e.dataset.task)})}),document.querySelectorAll(`.claim-friend-reward`).forEach(e=>{e.addEventListener(`click`,()=>{we(e.dataset.reward)})});let i=document.querySelector(`#copyInviteCode`);i&&i.addEventListener(`click`,z);let a=document.querySelector(`#inviteFriendButton`);a&&a.addEventListener(`click`,Te)}function Pe(e){H();let t=U().find(t=>t.id===e);t&&(d.dailyTasks.claimed.includes(e)||W(t)<t.target||(d.coins+=t.reward,d.dailyTasks.claimed.push(e),f(),Fe(),k()))}function Fe(){d.dailyTasks.bonusClaimed||U().every(e=>d.dailyTasks.claimed.includes(e.id))&&(d.coins+=5e3,d.dailyTasks.bonusClaimed=!0,E(50),f())}function X(){let e=Number(d.harvest?.clicks)||0;return Math.max(0,Math.min(99,Math.floor(e)))}function Ie(){if((!d.harvest||typeof d.harvest!=`object`)&&(d.harvest={...u.harvest}),d.harvest.clicks=X()+1,d.harvest.clicks<i)return!1;d.harvest.clicks=0,d.harvest.completed=(Number(d.harvest.completed)||0)+1;let e=c();return d.harvest.earned=(Number(d.harvest.earned)||0)+e,d.coins+=e,d.stats.earned+=e,!0}function Le(e){let t=X(),n=t/i*100,r=document.querySelector(`#harvestCount`),a=document.querySelector(`#harvestFill`),o=document.querySelector(`.farm-field-harvested`);if(r&&(r.textContent=`${t} / ${i}`),a&&(a.style.width=`${n}%`),o&&o.style.setProperty(`--harvest-progress`,`${n}%`),e){let e=document.querySelector(`#harvestToast`);e&&(e.textContent=`🌾 Урожай собран! +${m(c())} 🪙`,e.classList.remove(`harvest-toast-show`),e.offsetWidth,e.classList.add(`harvest-toast-show`))}}function Re(){if(d.energy<=0){let e=document.querySelector(`#tractorButton`);e&&(e.classList.remove(`no-energy`),e.offsetWidth,e.classList.add(`no-energy`));return}let e=D(),t=d.upgrades.luck*2,n=Math.random()*100<t;n&&(e*=2),d.coins+=e,--d.energy,d.stats.clicks+=1,d.stats.earned+=e,d.stats.energySpent+=1,E(1);let r=Ie();Z(),Le(r),ze(e,n);let i=document.querySelector(`#tractorButton`);i&&(i.classList.remove(`tractor-click`),i.offsetWidth,i.classList.add(`tractor-click`)),f()}function Z(){let e=document.querySelector(`.coins-block span`),t=document.querySelector(`#energy`),n=document.querySelector(`#maxEnergy`),r=document.querySelector(`#energyFill`),i=document.querySelector(`.level-number`),a=document.querySelector(`.xp-info strong`),o=document.querySelector(`.xp-fill`);e&&(e.textContent=m(d.coins)),t&&(t.textContent=d.energy),n&&(n.textContent=d.maxEnergy),r&&(r.style.width=`${d.energy/d.maxEnergy*100}%`),i&&(i.textContent=d.level);let s=T();if(a&&(a.textContent=`${d.xp} / ${s} XP`),o){let e=Math.min(100,d.xp/s*100);o.style.width=`${e}%`}}function ze(e,t=!1){let n=document.querySelector(`#coinEffectContainer`);if(!n)return;let r=document.createElement(`div`);r.className=t?`coin-effect luck-effect`:`coin-effect`,r.innerHTML=t?`🍀 УДАЧА! +${e} <span>●</span>`:`+${e} <span>●</span>`,r.style.transform=`translateX(${Math.random()*60-30}px)`,n.appendChild(r),setTimeout(()=>{r.remove()},t?1100:800)}function Be(e){let n=t.find(t=>t.id===e);if(n&&!d.ownedTractors.includes(e)&&!(d.level<n.levelRequired)){if(d.coins<n.price){alert(`Не хватает монет!\n\nНужно: ${m(n.price)}`);return}d.coins-=n.price,d.ownedTractors.push(n.id),d.selectedTractor=n.id,d.stats.tractorsBought+=1,f(),k()}}function Ve(e){let t=0;if(e===`power`&&(t=v()),e===`energy`&&(t=y()),e===`recovery`){if(d.upgrades.recovery>=5)return;t=b()}if(e===`offline`){if(d.upgrades.offline>=10)return;t=x()}if(e===`luck`){if(d.upgrades.luck>=10)return;t=S()}if(t){if(d.coins<t){alert(`Не хватает монет!\n\nНужно: ${m(t)}`);return}if(d.coins-=t,e===`power`&&(d.upgrades.power+=1),e===`energy`){let e=d.maxEnergy;d.upgrades.energy+=1,d.maxEnergy=C(),d.energy+=d.maxEnergy-e}e===`recovery`&&(d.upgrades.recovery+=1,Ue()),e===`offline`&&(d.upgrades.offline+=1),e===`luck`&&(d.upgrades.luck+=1),d.stats.upgradesBought+=1,f(),k()}}function He(e){let t=n.find(t=>t.id===e);t&&(d.claimedTasks.includes(e)||O(t)<t.target||(d.coins+=t.reward,d.claimedTasks.push(e),f(),k()))}var Q=null;function Ue(){Q&&clearInterval(Q),Q=setInterval(()=>{d.energy<d.maxEnergy&&(d.energy+=1,d.energy>d.maxEnergy&&(d.energy=d.maxEnergy),Z(),f())},w())}Ue(),setInterval(()=>{f()},5e3),window.addEventListener(`beforeunload`,f),k(),setTimeout(()=>{if(d.offline.pendingCoins>0&&d.offline.awaySeconds>=60){Ae();return}K()},300);var $=window.Telegram?.WebApp;if($?.initData){window.FarmClickerTelegram={status:`connecting`};try{$.ready(),$.expand();let e=await fetch(`/api/telegram/bootstrap`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({initData:$.initData}),cache:`no-store`});if(!e.ok)throw Error(`Telegram API responded ${e.status}`);let t=await e.json();if(!t.authenticated)throw Error(`Authentication failed`);window.FarmClickerTelegram={status:`verified`,profile:t.profile},window.dispatchEvent(new CustomEvent(`farmclicker:telegram-ready`,{detail:t.profile})),console.info(`Telegram profile verified. Cloud gameplay is not enabled yet.`)}catch(e){window.FarmClickerTelegram={status:`error`},console.warn(`Telegram authorization not ready:`,e.message)}}