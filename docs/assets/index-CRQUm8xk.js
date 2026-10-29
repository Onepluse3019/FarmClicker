(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:1,name:`Фермерский трактор`,image:`/assets/vehicles/tractor.png`,power:15,price:0,levelRequired:1},{id:2,name:`Усиленный трактор`,image:`/assets/vehicles/tractor2.png`,power:30,price:5e3,levelRequired:2},{id:3,name:`Профессиональный трактор`,image:`/assets/vehicles/tractor3.png`,power:60,price:15e3,levelRequired:4},{id:4,name:`Мега-комбайн`,image:`/assets/vehicles/combine.png`,power:120,price:5e4,levelRequired:7},{id:5,name:`Тяжёлый трактор`,image:`/assets/vehicles/heavy.png`,power:200,price:25e4,levelRequired:10,rarity:`rare`,rarityLabel:`РЕДКАЯ`},{id:6,name:`Турботрактор`,image:`/assets/vehicles/turbo.png`,power:350,price:75e4,levelRequired:15,rarity:`rare`,rarityLabel:`РЕДКАЯ`},{id:7,name:`Трактор «Титан»`,image:`/assets/vehicles/titan.png`,power:600,price:2e6,levelRequired:22,rarity:`epic`,rarityLabel:`ЭПИЧЕСКАЯ`},{id:8,name:`Комбайн «Молния»`,image:`/assets/vehicles/lightning.png`,power:1e3,price:6e6,levelRequired:30,rarity:`legendary`,rarityLabel:`ЛЕГЕНДАРНАЯ`},{id:9,name:`Трактор «Голиаф»`,image:`/assets/vehicles/goliath.png`,power:1600,price:18e6,levelRequired:40,rarity:`mythic`,rarityLabel:`МИФИЧЕСКАЯ`},{id:10,name:`Комбайн «Феникс»`,image:`/assets/vehicles/phoenix.png`,power:2500,price:5e7,levelRequired:50,rarity:`unique`,rarityLabel:`УНИКАЛЬНАЯ`}],t=[{id:`clicks`,icon:`👆`,title:`Рабочий день`,description:`Сделай 100 нажатий на трактор`,target:100,reward:500},{id:`earned`,icon:`💰`,title:`Хороший урожай`,description:`Заработай 5 000 монет на ферме`,target:5e3,reward:1e3},{id:`upgrades`,icon:`⚡`,title:`Развитие фермы`,description:`Купи 3 улучшения`,target:3,reward:1500},{id:`tractors`,icon:`🚜`,title:`Новая техника`,description:`Купи ещё одну единицу техники`,target:1,reward:2500}],n=[{id:`friend1`,friends:1,reward:1e3},{id:`friend3`,friends:3,reward:3e3},{id:`friend5`,friends:5,reward:7500},{id:`friend10`,friends:10,reward:2e4},{id:`friend25`,friends:25,reward:6e4},{id:`friend50`,friends:50,reward:15e4},{id:`friend100`,friends:100,reward:4e5}],r=100,i=1e3,a=[{id:`wheat`,name:`Пшеница`,icon:`🌾`,levelRequired:1,harvestBonus:0,detail:`Классический урожай`,fieldImage:`/assets/field-wheat.png`,harvestedImage:`/assets/field-harvested-wheat.png`},{id:`corn`,name:`Кукуруза`,icon:`🌽`,levelRequired:6,harvestBonus:200,detail:`Бонус +200 монет`,fieldImage:`/assets/field-corn.png`,harvestedImage:`/assets/field-harvested-corn.png`},{id:`potato`,name:`Картофель`,icon:`🥔`,levelRequired:10,harvestBonus:450,detail:`Бонус +450 монет`,fieldImage:`/assets/field-potato.png`,harvestedImage:`/assets/field-harvested-potato.png`},{id:`sunflower`,name:`Подсолнечник`,icon:`🌻`,levelRequired:16,harvestBonus:850,detail:`Бонус +850 монет`,fieldImage:`/assets/field-sunflower.png`,harvestedImage:`/assets/field-harvested-sunflower.png`}];function o(){let e=a.find(e=>e.id===u.selectedCrop);return e&&u.level>=e.levelRequired?e:a[0]}function s(){return i+M()+o().harvestBonus}var c=[{id:`orchard`,name:`Яблоневый сад`,image:`/assets/apple-tree.png`,price:18e3,levelRequired:5,harvestBonus:150,detail:`Яблони украсят ферму и принесут дополнительный доход.`},{id:`barn`,name:`Красный амбар`,image:`/assets/barn.png`,price:4e4,levelRequired:6,harvestBonus:300,detail:`Уютный амбар для хранения собранного урожая.`},{id:`silo`,name:`Зерновой силос`,image:`/assets/silo.png`,price:95e3,levelRequired:8,harvestBonus:500,detail:`Хранилище зерна для развитого хозяйства.`},{id:`secondField`,name:`Второе поле`,image:`/assets/second-field.png`,price:21e4,levelRequired:12,harvestBonus:600,detail:`Расширяет территорию. Бонус за полный сбор урожая.`},{id:`greenhouse`,name:`Тепличный комплекс`,image:`/assets/buildings-v8/greenhouse.svg`,price:35e4,levelRequired:14,harvestBonus:1200,detail:`Стеклянные теплицы с овощами и зеленью.`},{id:`workshop`,name:`Мастерская техники`,image:`/assets/buildings-v8/workshop.svg`,price:8e5,levelRequired:18,harvestBonus:2400,detail:`Ремонтный бокс для тракторов и комбайнов.`},{id:`warehouse`,name:`Большой зерновой склад`,image:`/assets/buildings-v8/warehouse.svg`,price:25e5,levelRequired:24,harvestBonus:4200,detail:`Большой склад для сбора и хранения зерна.`},{id:`farField`,name:`Большое дальнее поле`,image:`/assets/buildings-v8/far-field.svg`,price:7e6,levelRequired:32,harvestBonus:8e3,detail:`Новые земли с большим золотым полем.`}],l={level:1,xp:0,coins:3055,energy:1e3,maxEnergy:1e3,selectedTractor:1,ownedTractors:[1],selectedCrop:`wheat`,currentScreen:`farm`,upgrades:{power:0,energy:0,recovery:0,offline:0,luck:0},developmentRewards:[],stats:{clicks:0,earned:0,energySpent:0,upgradesBought:0,tractorsBought:0},claimedTasks:[],dailyTasks:{date:``,claimed:[],bonusClaimed:!1,startStats:{clicks:0,earned:0,energySpent:0,upgradesBought:0}},friends:{invited:0,earned:0,claimedRewards:[]},offline:{lastSeen:Date.now(),pendingCoins:0,awaySeconds:0},dailyReward:{day:1,lastClaimDate:``,totalClaims:0},farmBuildings:{orchard:!1,barn:!1,silo:!1,secondField:!1,greenhouse:!1,workshop:!1,warehouse:!1,farField:!1},harvest:{clicks:0,completed:0,earned:0}};function ee(){try{let e=localStorage.getItem(`farmClickerSave`);if(!e)return structuredClone(l);let t=JSON.parse(e);return{...structuredClone(l),...t,upgrades:{...l.upgrades,...t.upgrades||{}},stats:{...l.stats,...t.stats||{}},claimedTasks:Array.isArray(t.claimedTasks)?t.claimedTasks:[],friends:{...l.friends,...t.friends||{},claimedRewards:Array.isArray(t.friends?.claimedRewards)?t.friends.claimedRewards:[]},offline:{...l.offline,...t.offline||{}},dailyReward:{...l.dailyReward,...t.dailyReward||{}},farmBuildings:{...l.farmBuildings,...t.farmBuildings&&typeof t.farmBuildings==`object`&&!Array.isArray(t.farmBuildings)?t.farmBuildings:{}},harvest:{...l.harvest,...t.harvest&&typeof t.harvest==`object`?t.harvest:{}},currentScreen:`farm`}}catch(e){return console.error(`Ошибка загрузки сохранения:`,e),structuredClone(l)}}var u=ee(),te=8;function ne(){let e=f();return Math.max(10,Math.floor(e.power*2+m()))}function re(){let e=Date.now();if(!u.offline){u.offline={lastSeen:e,pendingCoins:0,awaySeconds:0};return}let t=Number(u.offline.lastSeen)||e,n=Math.floor((e-t)/1e3),r=Math.min(n,28800);if(r<60){u.offline.lastSeen=e;return}let i=ne(),a=1+u.upgrades.offline*.1,o=Math.floor(r/60*i*a);u.offline.pendingCoins=o,u.offline.awaySeconds=r,u.offline.lastSeen=e}re();function d(){try{localStorage.setItem(`farmClickerSave`,JSON.stringify(u))}catch(e){console.error(`Ошибка сохранения:`,e)}}function f(){return e.find(e=>e.id===u.selectedTractor)||e[0]}function p(e){return Math.floor(e).toLocaleString(`ru-RU`)}function m(){return u.upgrades.power*5}function h(){let e=u.upgrades.power+u.upgrades.energy+u.upgrades.recovery+u.upgrades.offline+u.upgrades.luck;return{current:e,max:55,percent:Math.min(100,Math.floor(e/55*100))}}var g=[{level:5,coins:5e3,xp:0},{level:10,coins:1e4,xp:100},{level:20,coins:25e3,xp:0},{level:35,coins:5e4,xp:300},{level:55,coins:1e5,xp:1e3}];function ie(){let e=h(),t=u.developmentRewards||[];return g.find(n=>e.current>=n.level&&!t.includes(n.level))}function ae(e){let t=g.find(t=>t.level===e);t&&(u.developmentRewards||=[],!u.developmentRewards.includes(e)&&(h().current<t.level||(u.coins+=t.coins,u.developmentRewards.push(e),t.xp>0&&T(t.xp),d(),D())))}function _(){return 1e3*2**u.upgrades.power}function v(){return 1500*2**u.upgrades.energy}function y(){return 2e3*2**u.upgrades.recovery}function b(){return 3e3*2**u.upgrades.offline}function x(){return 5e3*2**u.upgrades.luck}function S(){return 1e3+u.upgrades.energy*250}function C(){let e=[3e3,2500,2e3,1500,1e3,750];return e[Math.min(u.upgrades.recovery,e.length-1)]}function oe(){return(C()/1e3).toString().replace(`.`,`,`)}function w(){return u.level*100}function T(e){for(u.xp+=e;u.xp>=w();){let e=w();u.xp-=e,u.level+=1;let t=u.level*500;u.coins+=t,se(u.level,t)}}function se(t,n){let r=document.querySelector(`.level-up-overlay`);r&&r.remove();let i=e.find(e=>e.levelRequired===t),a=document.createElement(`div`);a.className=`level-up-overlay`,a.innerHTML=`
    <div class="level-up-card">

      <div class="level-up-glow"></div>

      <div class="level-up-icon">
        🎉
      </div>

      <div class="level-up-small">
        НОВЫЙ УРОВЕНЬ
      </div>

      <div class="level-up-number">
        ${t}
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
            +${p(n)}
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
  `,document.body.appendChild(a),a.querySelector(`.level-up-button`).addEventListener(`click`,()=>{a.remove(),D()})}function ce(){return f().power+m()}function E(e){return e.id===`clicks`?u.stats.clicks:e.id===`earned`?u.stats.earned:e.id===`upgrades`?u.stats.upgradesBought:e.id===`tractors`?u.stats.tractorsBought:0}function D(){u.maxEnergy=S(),u.energy>u.maxEnergy&&(u.energy=u.maxEnergy),document.querySelector(`#app`).innerHTML=`
      <div class="game">

        ${ue()}

        <div id="screen">
          ${le()}
        </div>

        ${Me()}

      </div>
    `,Ne()}function le(){switch(u.currentScreen){case`garage`:return _e();case`upgrades`:return ye();case`tasks`:return be();case`friends`:return Ce();default:return ge()}}function ue(){let e=w(),t=Math.min(100,u.xp/e*100);return`
    <div class="top-section">

      <header class="topbar">

        <div class="level-block">

          <span class="small-label">
            УРОВЕНЬ
          </span>

          <span class="level-number">
            ${u.level}
          </span>

        </div>

        <div class="coins-block">

          <div class="coin-icon">
            ₽
          </div>

          <span>
            ${p(u.coins)}
          </span>

        </div>

      </header>

      <div class="xp-section">

        <div class="xp-info">

          <span>
            ОПЫТ
          </span>

          <strong>
            ${u.xp} / ${e} XP
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
  `}var O=!1,k=`field`,A=!1;function j(e){return u.farmBuildings?.[e]===!0}function M(){return c.reduce((e,t)=>e+(j(t.id)?t.harvestBonus:0),0)}function N(){return c.filter(e=>j(e.id)).length}function de(){return`
    <div class="farm-landscape" aria-hidden="true">
      <img class="scenery scenery-tree-left" src="/assets/decor-v3/broadleaf-tree.png" alt="" draggable="false" />
      <img class="scenery scenery-tree-right" src="/assets/decor-v3/pine-clean.png" alt="" draggable="false" />
      <img class="scenery scenery-flowers" src="/assets/decor-v3/flower-bush-clean.png" alt="" draggable="false" />
    </div>
  `}function fe(){return`
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
        <span>${c.slice(0,4).filter(e=>j(e.id)).length} / 4 построено</span>
      </div>
      <div class="farm-village-scene">
        ${c.slice(0,4).map(e=>{let t=j(e.id),n=u.level>=e.levelRequired;return`
            <div class="farm-homestead farm-homestead-${e.id} ${t?`is-built`:`is-empty`}" data-plot="${e.id}" aria-label="${e.name}: ${t?`построено`:n?`можно построить`:`откроется на уровне `+e.levelRequired}">
              <div class="farm-homestead-object">
                ${t?`<img src="${e.image}" alt="" draggable="false" loading="lazy" />`:`<span class="farm-foundation" aria-hidden="true"><span>${n?`+`:`🔒`}</span></span>`}
              </div>
              <div class="farm-homestead-label"><strong>${e.name}</strong><small>${t?`✓ Построено`:n?`Место под постройку`:`Уровень ${e.levelRequired}`}</small></div>
            </div>
          `}).join(``)}
      </div>
      <img class="farm-village-detail farm-village-detail-a" src="/assets/decor-v3/flower-bush-clean.png" alt="" aria-hidden="true" draggable="false" />
      <img class="farm-village-detail farm-village-detail-b" src="/assets/rock.png" alt="" aria-hidden="true" draggable="false" />
      <img class="farm-village-detail farm-village-detail-c" src="/assets/well.png" alt="" aria-hidden="true" draggable="false" />
    </section>
  `}function pe(){return`
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
        <span>${c.slice(4).filter(e=>j(e.id)).length} / 4 построено</span>
      </div>
      <div class="farm-new-lands-scene">
        ${c.slice(4).map(e=>{let t=j(e.id),n=u.level>=e.levelRequired;return`
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
  `}function me(){let e=M();return`
    <div class="territory-overlay" id="territoryOverlay" ${O?``:`hidden`}>
      <div class="territory-backdrop" data-close-territory="true"></div>
      <section class="territory-sheet" role="dialog" aria-modal="true" aria-label="Постройки фермы">
        <div class="territory-sheet-header">
          <div>
            <span class="territory-eyebrow">🏡 РАЗВИТИЕ ХОЗЯЙСТВА</span>
            <h2>Моя территория</h2>
            <span class="territory-sheet-subtitle">Постройки: ${N()} / ${c.length} · Бонус за урожай: +${p(e)} 🪙</span>
          </div>
          <button type="button" class="territory-close" id="closeTerritory" aria-label="Закрыть">✕</button>
        </div>
        <div class="territory-building-list">
          ${c.map(e=>{let t=j(e.id),n=u.level<e.levelRequired,r=u.coins<e.price;return`
              <article class="territory-building-card ${t?`is-built`:``}">
                <div class="territory-building-art"><img src="${e.image}" alt="" loading="lazy" draggable="false" /></div>
                <div class="territory-building-info">
                  <h3>${e.name}</h3>
                  <p>${e.detail}</p>
                  <span class="territory-building-bonus">🌾 +${p(e.harvestBonus)} монет за урожай</span>
                  ${t?`<span class="territory-built-label">✓ Построено</span>`:`<button type="button" class="territory-buy" data-build="${e.id}" ${n||r?`disabled`:``}>
                         ${n?`🔒 Уровень ${e.levelRequired}`:r?`🪙 Нужно ${p(e.price)}`:`Построить · ${p(e.price)} 🪙`}
                       </button>`}
                </div>
              </article>
            `}).join(``)}
        </div>
        <p class="territory-help">Постройки покупаются один раз и сохраняются. Основной доход трактора не меняется.</p>
      </section>
    </div>
  `}function he(e){let t=c.find(t=>t.id===e);!t||j(e)||u.level<t.levelRequired||u.coins<t.price||(u.coins-=t.price,(!u.farmBuildings||typeof u.farmBuildings!=`object`)&&(u.farmBuildings={...l.farmBuildings}),u.farmBuildings[e]=!0,d(),O=!0,D())}function ge(){let e=f(),t=ce(),n=Y(),i=n/r*100,l=o();return`
    <div class="farm-screen">

      <main class="farm-area">
        <div class="farm-scene-heading">
          <div>
            <span class="farm-scene-eyebrow">🌿 МОЁ ХОЗЯЙСТВО</span>
            <h2>Фермерская долина</h2>
          </div>
          <span class="farm-scene-tag" id="farmSceneTag">${k===`field`?`УЧАСТОК 01`:k===`yard`?`РАЙОН 01`:`РАЙОН 02`}</span>
        </div>

        <div class="farm-territory-tabs" role="tablist" aria-label="Разделы фермы">
          <button type="button" class="farm-territory-tab ${k===`field`?`is-active`:``}" id="farmTerritoryTabField" data-farm-territory="field" role="tab" aria-label="Поле" aria-controls="farmTerritoryPanelField" aria-selected="${k===`field`}" tabindex="${k===`field`?0:-1}">
            <span class="farm-territory-tab-title">🚜 Поле</span>
            <span class="farm-territory-tab-count">Играть</span>
          </button>
          <button type="button" class="farm-territory-tab ${k===`yard`?`is-active`:``}" id="farmTerritoryTabYard" data-farm-territory="yard" role="tab" aria-label="Фермерский двор" aria-controls="farmTerritoryPanelYard" aria-selected="${k===`yard`}" tabindex="${k===`yard`?0:-1}">
            <span class="farm-territory-tab-title">🏡 Фермерский двор</span>
            <span class="farm-territory-tab-count">${c.slice(0,4).filter(e=>j(e.id)).length}/4</span>
          </button>
          <button type="button" class="farm-territory-tab ${k===`lands`?`is-active`:``}" id="farmTerritoryTabLands" data-farm-territory="lands" role="tab" aria-label="Новые земли" aria-controls="farmTerritoryPanelLands" aria-selected="${k===`lands`}" tabindex="${k===`lands`?0:-1}">
            <span class="farm-territory-tab-title">🌾 Новые земли</span>
            <span class="farm-territory-tab-count">${c.slice(4).filter(e=>j(e.id)).length}/4</span>
          </button>
        </div>
        <div class="farm-map-world" aria-label="Выбранная часть фермы">
          <div class="farm-territory-panel farm-field-panel" id="farmTerritoryPanelField" role="tabpanel" aria-labelledby="farmTerritoryTabField" ${k===`field`?``:`hidden`}>
          <section class="farm-crop-picker" aria-label="Выбор культуры">
            <div class="farm-crop-current">
              <span class="farm-crop-current-icon" aria-hidden="true">${l.icon}</span>
              <div class="farm-crop-current-info">
                <small>СЕЙЧАС ВЫРАЩИВАЕМ</small>
                <strong>${l.name}</strong>
              </div>
              <button id="toggleCropPicker" class="farm-crop-toggle" type="button" aria-controls="farmCropOptions" aria-expanded="${A}">${A?`Свернуть`:`Сменить`}</button>
            </div>
            <div id="farmCropOptions" class="farm-crop-options" ${A?``:`hidden`}>
              ${a.map(e=>{let t=u.level<e.levelRequired,n=l.id===e.id;return`<button type="button" class="farm-crop-option ${n?`is-selected`:``}" data-select-crop="${e.id}" ${t||n?`disabled`:``} aria-label="${e.name}${t?`, откроется на уровне `+e.levelRequired:``}">
                  <span class="farm-crop-option-icon" aria-hidden="true">${e.icon}</span>
                  <span class="farm-crop-option-info"><strong>${e.name}</strong><small>${t?`🔒 Уровень ${e.levelRequired}`:n?`✓ Выбрано`:`+${p(e.harvestBonus)} за урожай`}</small></span>
                </button>`}).join(``)}
            </div>
            <p class="farm-crop-note" ${A?``:`hidden`}>У всех культур 100 нажатий на сбор. Выбор не сбрасывает прогресс.</p>
          </section>
          <div class="farm-map-core" data-crop="${l.id}" aria-label="Игровое поле с трактором">
            <div class="farm-map-light" aria-hidden="true"></div>
            <div class="farm-crop-field-tag" aria-hidden="true">${l.icon} ${l.name}</div>
            <div class="farm-animated-clouds" aria-hidden="true"><span></span><span></span></div>

          <img
            class="farm-field"
            src="${l.fieldImage}"
            draggable="false"
            alt=""
          />

          <img
            class="farm-field farm-field-harvested"
            src="${l.harvestedImage}"
            style="--harvest-progress: ${i}%"
            draggable="false"
            alt=""
            aria-hidden="true"
          />

          <div class="farm-wheat-breeze" aria-hidden="true"></div>
          ${de()}

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
          <div class="farm-territory-panel" id="farmTerritoryPanelYard" role="tabpanel" aria-labelledby="farmTerritoryTabYard" ${k===`yard`?``:`hidden`}>
            ${fe()}
          </div>
          <div class="farm-territory-panel" id="farmTerritoryPanelLands" role="tabpanel" aria-labelledby="farmTerritoryTabLands" ${k===`lands`?``:`hidden`}>
            ${pe()}
          </div>
        </div>

        <div class="harvest-progress-panel" aria-label="Сбор урожая">
          <div class="harvest-progress-top">
            <span>${l.icon} УРОЖАЙ С ПОЛЯ</span>
            <strong id="harvestCount">${n} / ${r}</strong>
          </div>
          <div class="harvest-progress-track">
            <div id="harvestFill" class="harvest-progress-fill" style="width: ${i}%"></div>
          </div>
          <div class="harvest-reward-hint">Награда за полный сбор: +<span id="harvestReward">${p(s())}</span> 🪙</div>
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
              ${u.energy}
            </span>

            /

            <span id="maxEnergy">
              ${u.maxEnergy}
            </span>

          </div>

        </div>

        <div class="energy-bar">

          <div
            id="energyFill"
            class="energy-fill"
            style="
              width:
              ${u.energy/u.maxEnergy*100}%
            "
          ></div>

        </div>

        <div class="click-info">

          +${t}

          <span class="mini-coin">
            ●
          </span>

          за нажатие на трактор

          ${m()>0?`
                <div class="click-bonus">
                  ⚡ Бонус улучшений:
                  +${m()}
                </div>
              `:``}

        </div>

        <button type="button" id="openTerritory" class="territory-entry">
          <span class="territory-entry-icon">🏡</span>
          <span class="territory-entry-label"><strong>ТЕРРИТОРИЯ ФЕРМЫ</strong><small>Постройки и развитие хозяйства</small></span>
          <span class="territory-entry-count">${N()} / ${c.length} <span>›</span></span>
        </button>

      </section>

      ${me()}

    </div>
  `}function _e(){return`
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
          ${u.ownedTractors.length}
          /
          ${e.length}
        </div>

      </div>

      <div class="tractor-list">
        ${e.map(ve).join(``)}
      </div>

    </section>
  `}function ve(e){let t=u.ownedTractors.includes(e.id),n=u.selectedTractor===e.id,r=u.level<e.levelRequired,i=``;return i=n?`
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
        ${p(e.price)}
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
                ${p(e.price)}
              </div>
            `}

        ${i}

      </div>

    </div>
  `}function ye(){let e=u.upgrades.power,t=u.upgrades.energy,n=u.upgrades.recovery,r=u.upgrades.offline,i=u.upgrades.luck,a=h(),o=ie(),s=u.developmentRewards||[],c=g.find(e=>!s.includes(e.level)),l=``;return l=o?`
      <div class="development-next-reward">

        <div>
          <span>
            🎁 Награда за ${o.level}/55
          </span>

          <strong>
            🪙 ${p(o.coins)}
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
          🪙 ${p(c.coins)}
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

        ${P({type:`power`,icon:`⚡`,title:`Мощность`,level:e,description:`Увеличивает доход за каждое нажатие.`,current:`+${m()} к доходу`,next:`+${m()+5} к доходу`,price:_()})}

        ${P({type:`energy`,icon:`🔋`,title:`Запас энергии`,level:t,description:`Позволяет дольше работать без остановки.`,current:`${u.maxEnergy} энергии`,next:`${u.maxEnergy+250} энергии`,price:v()})}

        ${P({type:`recovery`,icon:`♻️`,title:`Восстановление`,level:n,description:`Ускоряет автоматическое восстановление энергии.`,current:`+1 каждые ${oe()} сек.`,next:n>=5?`МАКСИМУМ`:`+1 каждые ${([2500,2e3,1500,1e3,750][n]/1e3).toString().replace(`.`,`,`)} сек.`,price:y(),maxed:n>=5})}

        ${P({type:`offline`,icon:`💰`,title:`Офлайн-доход`,level:r,description:`Увеличивает заработок, пока тебя нет в игре.`,current:`+${r*10}% к офлайн-доходу`,next:r>=10?`МАКСИМУМ`:`+${(r+1)*10}% к офлайн-доходу`,price:b(),maxed:r>=10})}

        ${P({type:`luck`,icon:`🍀`,title:`Удача`,level:i,description:`Даёт шанс получить двойной доход за нажатие.`,current:`${i*2}% шанс x2`,next:i>=10?`МАКСИМУМ`:`${(i+1)*2}% шанс x2`,price:x(),maxed:i>=10})}

      </div>

    </section>
  `}function P({type:e,icon:t,title:n,level:r,description:i,current:a,next:o,price:s,maxed:c=!1}){return`
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
              ${p(s)}
            </button>
          `}

    </div>
  `}function be(){V();let e=t.filter(e=>u.claimedTasks.includes(e.id)).length,n=H(),r=n.filter(e=>u.dailyTasks.claimed.includes(e.id)).length;return`
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
          ${r}/${n.length}
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

        ${n.map(xe).join(``)}

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
            ${u.dailyTasks.bonusClaimed?`Все ежедневные задания выполнены`:`Выполни 4 ежедневных задания`}
          </span>

          <div class="daily-bonus-reward">
            🪙 5000
            <span>+</span>
            ⭐ 50 XP
          </div>

        </div>

        <div class="
          daily-bonus-progress
          ${u.dailyTasks.bonusClaimed?`claimed`:``}
        ">
          ${u.dailyTasks.bonusClaimed?`ПОЛУЧЕНО ✓`:`${r}/4`}
        </div>

      </div>


      <div class="tasks-section-title starter-title">

        <div>
          <span>🌱</span>
          Стартовые задания
        </div>

        <small>
          ${e}/${t.length}
        </small>

      </div>


      <div class="task-list">

        ${t.map(Se).join(``)}

      </div>

    </section>
  `}function xe(e){let t=U(e),n=Math.min(100,Math.floor(t/e.target*100)),r=t>=e.target,i=u.dailyTasks.claimed.includes(e.id),a=``;return a=i?`
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
  `}function Se(e){let t=E(e),n=Math.min(t,e.target),r=Math.min(100,n/e.target*100),i=t>=e.target,a=u.claimedTasks.includes(e.id);return`
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
          ${p(n)}
          /
          ${p(e.target)}
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
          ${p(e.reward)}
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
  `}function F(){return`FARM-`+String(1e5+u.level*731)}function Ce(){let e=u.friends.claimedRewards.length;return`
    <section class="friends-screen">

      <div class="friends-header">
        <div class="friends-header-copy">
          <div class="garage-small">ФЕРМЕРСКАЯ КОМАНДА</div>
          <h1>Друзья</h1>
          <p>Приглашай друзей и развивайте ферму вместе</p>
        </div>
        <div class="friends-header-count" title="Полученные награды за приглашения">
          <strong>${e}/${n.length}</strong>
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
            <strong>${p(u.friends.invited)}</strong>
            <small>друзей</small>
          </div>
          <div class="friend-stat">
            <span>ЗАРАБОТАНО</span>
            <strong>${p(u.friends.earned)}</strong>
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
          <div id="inviteCode" class="invite-code" aria-label="Код приглашения">${F()}</div>
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
        <span>${e}/${n.length} наград</span>
      </div>

      <div class="friend-rewards">
        ${n.slice(0,3).map(I).join(``)}
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
            ${n.slice(3).map(I).join(``)}
          </div>
        </details>
      </div>

      <div class="friends-roster">
        <div class="friends-roster-title">👥 Приглашённые друзья</div>
        <div class="friends-roster-empty">
          <div aria-hidden="true">🌱</div>
          <strong>${u.friends.invited>0?`Учтено друзей: ${p(u.friends.invited)}`:`Пока никого нет`}</strong>
          <p>Имена и список участников появятся после подключения настоящей реферальной системы Telegram.</p>
        </div>
      </div>

    </section>
  `}function I(e){let t=u.friends.claimedRewards.includes(e.id),n=u.friends.invited>=e.friends,r=Math.min(u.friends.invited,e.friends),i=Math.min(100,r/e.friends*100);return`
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
            ${p(e.reward)}
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
                ${p(e.reward)}
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
  `}function we(e){let t=n.find(t=>t.id===e);t&&(u.friends.claimedRewards.includes(e)||u.friends.invited<t.friends||(u.coins+=t.reward,u.friends.earned+=t.reward,u.friends.claimedRewards.push(e),d(),D()))}function L(e,t=!1){let n=document.querySelector(`#inviteStatus`);n&&(n.textContent=e,n.classList.toggle(`invite-status-error`,t),n.classList.add(`invite-status-visible`))}async function R(){let e=F();try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(e);else{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select();let n=document.execCommand(`copy`);if(t.remove(),!n)throw Error(`Clipboard unavailable`)}L(`✓ Код скопирован. Его можно отправить другу.`)}catch{L(`Скопируй код вручную: ${e}`,!0)}}function Te(){R().then(()=>{let e=document.querySelector(`#inviteStatus`);e&&!e.classList.contains(`invite-status-error`)&&L(`✓ Код скопирован. Отправь его другу — Telegram-приглашения пока не подключены.`)})}var z=[500,750,1e3,1500,2e3,3e3,5e3];function B(){let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function V(){let e=B();u.dailyTasks.date!==e&&(u.dailyTasks.date=e,u.dailyTasks.claimed=[],u.dailyTasks.bonusClaimed=!1,u.dailyTasks.startStats={clicks:u.stats.clicks,earned:u.stats.earned,energySpent:u.stats.energySpent,upgradesBought:u.stats.upgradesBought},d())}function H(){let e=Math.max(1,u.level);return[{id:`daily-clicks`,icon:`🚜`,title:`Работа в поле`,description:`Сделай ${300*e} кликов`,target:300*e,progress:u.stats.clicks-u.dailyTasks.startStats.clicks,reward:1e3*e},{id:`daily-earned`,icon:`💰`,title:`Хороший урожай`,description:`Заработай ${15e3*e} монет`,target:15e3*e,progress:u.stats.earned-u.dailyTasks.startStats.earned,reward:2e3*e},{id:`daily-energy`,icon:`⚡`,title:`Полный рабочий день`,description:`Потрать ${2e3*e} энергии`,target:2e3*e,progress:u.stats.energySpent-u.dailyTasks.startStats.energySpent,reward:1500*e},{id:`daily-upgrades`,icon:`🔧`,title:`Развитие хозяйства`,description:`Купи ${Math.min(2+Math.floor(e/5),5)} улучшения`,target:Math.min(2+Math.floor(e/5),5),progress:u.stats.upgradesBought-u.dailyTasks.startStats.upgradesBought,reward:2500*e}]}function U(e){return Math.min(Math.max(0,e.progress),e.target)}function Ee(e){if(!e)return null;let t=new Date(`${e}T00:00:00`),n=new Date(`${B()}T00:00:00`).getTime()-t.getTime();return Math.round(n/864e5)}function De(){let e=u.dailyReward.lastClaimDate;if(!e){u.dailyReward.day=1;return}let t=Ee(e);t!==0&&t>1&&(u.dailyReward.day=1)}function W(){return De(),u.dailyReward.lastClaimDate!==B()}function G(){if(!W())return;let e=document.querySelector(`.daily-overlay`);e&&e.remove();let t=Math.min(Math.max(u.dailyReward.day,1),7),n=z[t-1],r=document.createElement(`div`);r.className=`daily-overlay`,r.innerHTML=`
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

        ${z.map((e,n)=>{let r=n+1,i=r===t,a=r<t;return`
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
                  ${a?`✓`:`🪙 ${p(e)}`}
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
            +${p(n)}
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
  `,document.body.appendChild(r),r.querySelector(`#claimDailyReward`).addEventListener(`click`,()=>{Oe(),r.remove()})}function Oe(){if(!W())return;let e=Math.min(Math.max(u.dailyReward.day,1),7),t=z[e-1];u.coins+=t,u.dailyReward.lastClaimDate=B(),u.dailyReward.totalClaims+=1,e>=7?u.dailyReward.day=1:u.dailyReward.day=e+1,d(),D()}function ke(e){let t=Math.floor(e/3600),n=Math.floor(e%3600/60);return t>0?`${t} ч ${n} мин`:`${Math.max(1,n)} мин`}function Ae(){if(!u.offline||u.offline.pendingCoins<=0||u.offline.awaySeconds<60)return;let e=document.querySelector(`.offline-overlay`);e&&e.remove();let t=document.createElement(`div`);t.className=`offline-overlay`,t.innerHTML=`
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
        ⏱️ ${ke(u.offline.awaySeconds)}
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
            +${p(u.offline.pendingCoins)}
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
  `,document.body.appendChild(t),t.querySelector(`#claimOfflineIncome`).addEventListener(`click`,()=>{je(),t.remove()})}function je(){if(!u.offline)return;let e=Math.max(0,Number(u.offline.pendingCoins)||0);e<=0||(u.coins+=e,u.offline.pendingCoins=0,u.offline.awaySeconds=0,u.offline.lastSeen=Date.now(),d(),D(),setTimeout(()=>{G()},300))}function Me(){return`
    <nav class="bottom-menu">

      ${K(`farm`,`🏠`,`Ферма`)}

      ${K(`garage`,`🚜`,`Техника`)}

      ${K(`upgrades`,`⬆️`,`Улучшения`)}

      ${K(`tasks`,`🎯`,`Задания`)}

      ${K(`friends`,`👥`,`Друзья`)}

    </nav>
  `}function K(e,t,n){return`
    <button
      class="
        menu-item
        ${u.currentScreen===e?`active`:``}
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
  `}var q=[`field`,`yard`,`lands`];function J(e,t=!1){if(!q.includes(e))return;k=e,document.querySelectorAll(`[data-farm-territory]`).forEach(n=>{let r=n.dataset.farmTerritory===e;n.classList.toggle(`is-active`,r),n.setAttribute(`aria-selected`,String(r)),n.tabIndex=r?0:-1,r&&t&&n.focus()});for(let[t,n]of Object.entries({field:`#farmTerritoryPanelField`,yard:`#farmTerritoryPanelYard`,lands:`#farmTerritoryPanelLands`})){let r=document.querySelector(n);r&&(r.hidden=t!==e)}let n=document.querySelector(`#farmSceneTag`);n&&(n.textContent=e===`field`?`УЧАСТОК 01`:e===`yard`?`РАЙОН 01`:`РАЙОН 02`)}function Ne(){let e=document.querySelector(`#toggleCropPicker`);e?.addEventListener(`click`,()=>{A=!A;let t=document.querySelector(`#farmCropOptions`);t&&(t.hidden=!A);let n=document.querySelector(`.farm-crop-note`);n&&(n.hidden=!A),e.textContent=A?`Свернуть`:`Сменить`,e.setAttribute(`aria-expanded`,String(A))}),document.querySelectorAll(`[data-select-crop]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=a.find(t=>t.id===e.dataset.selectCrop);!t||u.level<t.levelRequired||u.selectedCrop===t.id||(u.selectedCrop=t.id,A=!1,d(),D())})}),document.querySelectorAll(`[data-farm-territory]`).forEach(e=>{e.addEventListener(`click`,()=>J(e.dataset.farmTerritory)),e.addEventListener(`keydown`,t=>{if(![`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(t.key))return;t.preventDefault();let n=q.indexOf(e.dataset.farmTerritory);J(t.key===`Home`?q[0]:t.key===`End`?q.at(-1):q[(n+(t.key===`ArrowRight`?1:-1)+q.length)%q.length],!0)})});let t=document.querySelector(`#openTerritory`);t&&t.addEventListener(`click`,()=>{O=!0;let e=document.querySelector(`#territoryOverlay`);e&&(e.hidden=!1)});function n(){O=!1;let e=document.querySelector(`#territoryOverlay`);e&&(e.hidden=!0)}document.querySelector(`#closeTerritory`)?.addEventListener(`click`,n),document.querySelector(`[data-close-territory]`)?.addEventListener(`click`,n),document.querySelectorAll(`[data-build]`).forEach(e=>{e.addEventListener(`click`,()=>he(e.dataset.build))}),document.querySelectorAll(`[data-screen]`).forEach(e=>{e.addEventListener(`click`,()=>{u.currentScreen=e.dataset.screen,O=!1,D()})}),document.querySelectorAll(`.claim-daily-task`).forEach(e=>{e.addEventListener(`click`,()=>{Pe(e.dataset.taskId)})});let r=document.querySelector(`#tractorButton`);r&&r.addEventListener(`click`,Re),document.querySelectorAll(`.choose-tractor`).forEach(e=>{e.addEventListener(`click`,()=>{u.selectedTractor=Number(e.dataset.id),d(),D()})}),document.querySelectorAll(`.buy-tractor`).forEach(e=>{e.addEventListener(`click`,()=>{Be(Number(e.dataset.id))})}),document.querySelectorAll(`.buy-upgrade`).forEach(e=>{e.addEventListener(`click`,()=>{Ve(e.dataset.upgrade)})}),document.querySelectorAll(`.development-reward-button`).forEach(e=>{e.addEventListener(`click`,()=>{ae(Number(e.dataset.developmentLevel))})}),document.querySelectorAll(`.claim-task`).forEach(e=>{e.addEventListener(`click`,()=>{He(e.dataset.task)})}),document.querySelectorAll(`.claim-friend-reward`).forEach(e=>{e.addEventListener(`click`,()=>{we(e.dataset.reward)})});let i=document.querySelector(`#copyInviteCode`);i&&i.addEventListener(`click`,R);let o=document.querySelector(`#inviteFriendButton`);o&&o.addEventListener(`click`,Te)}function Pe(e){V();let t=H().find(t=>t.id===e);t&&(u.dailyTasks.claimed.includes(e)||U(t)<t.target||(u.coins+=t.reward,u.dailyTasks.claimed.push(e),d(),Fe(),D()))}function Fe(){u.dailyTasks.bonusClaimed||H().every(e=>u.dailyTasks.claimed.includes(e.id))&&(u.coins+=5e3,u.dailyTasks.bonusClaimed=!0,T(50),d())}function Y(){let e=Number(u.harvest?.clicks)||0;return Math.max(0,Math.min(99,Math.floor(e)))}function Ie(){if((!u.harvest||typeof u.harvest!=`object`)&&(u.harvest={...l.harvest}),u.harvest.clicks=Y()+1,u.harvest.clicks<r)return!1;u.harvest.clicks=0,u.harvest.completed=(Number(u.harvest.completed)||0)+1;let e=s();return u.harvest.earned=(Number(u.harvest.earned)||0)+e,u.coins+=e,u.stats.earned+=e,!0}function Le(e){let t=Y(),n=t/r*100,i=document.querySelector(`#harvestCount`),a=document.querySelector(`#harvestFill`),o=document.querySelector(`.farm-field-harvested`);if(i&&(i.textContent=`${t} / ${r}`),a&&(a.style.width=`${n}%`),o&&o.style.setProperty(`--harvest-progress`,`${n}%`),e){let e=document.querySelector(`#harvestToast`);e&&(e.textContent=`🌾 Урожай собран! +${p(s())} 🪙`,e.classList.remove(`harvest-toast-show`),e.offsetWidth,e.classList.add(`harvest-toast-show`))}}function Re(){if(u.energy<=0){let e=document.querySelector(`#tractorButton`);e&&(e.classList.remove(`no-energy`),e.offsetWidth,e.classList.add(`no-energy`));return}let e=ce(),t=u.upgrades.luck*2,n=Math.random()*100<t;n&&(e*=2),u.coins+=e,--u.energy,u.stats.clicks+=1,u.stats.earned+=e,u.stats.energySpent+=1,T(1);let r=Ie();X(),Le(r),ze(e,n);let i=document.querySelector(`#tractorButton`);i&&(i.classList.remove(`tractor-click`),i.offsetWidth,i.classList.add(`tractor-click`)),d()}function X(){let e=document.querySelector(`.coins-block span`),t=document.querySelector(`#energy`),n=document.querySelector(`#maxEnergy`),r=document.querySelector(`#energyFill`),i=document.querySelector(`.level-number`),a=document.querySelector(`.xp-info strong`),o=document.querySelector(`.xp-fill`);e&&(e.textContent=p(u.coins)),t&&(t.textContent=u.energy),n&&(n.textContent=u.maxEnergy),r&&(r.style.width=`${u.energy/u.maxEnergy*100}%`),i&&(i.textContent=u.level);let s=w();if(a&&(a.textContent=`${u.xp} / ${s} XP`),o){let e=Math.min(100,u.xp/s*100);o.style.width=`${e}%`}}function ze(e,t=!1){let n=document.querySelector(`#coinEffectContainer`);if(!n)return;let r=document.createElement(`div`);r.className=t?`coin-effect luck-effect`:`coin-effect`,r.innerHTML=t?`🍀 УДАЧА! +${e} <span>●</span>`:`+${e} <span>●</span>`,r.style.transform=`translateX(${Math.random()*60-30}px)`,n.appendChild(r),setTimeout(()=>{r.remove()},t?1100:800)}function Be(t){let n=e.find(e=>e.id===t);if(n&&!u.ownedTractors.includes(t)&&!(u.level<n.levelRequired)){if(u.coins<n.price){alert(`Не хватает монет!\n\nНужно: ${p(n.price)}`);return}u.coins-=n.price,u.ownedTractors.push(n.id),u.selectedTractor=n.id,u.stats.tractorsBought+=1,d(),D()}}function Ve(e){let t=0;if(e===`power`&&(t=_()),e===`energy`&&(t=v()),e===`recovery`){if(u.upgrades.recovery>=5)return;t=y()}if(e===`offline`){if(u.upgrades.offline>=10)return;t=b()}if(e===`luck`){if(u.upgrades.luck>=10)return;t=x()}if(t){if(u.coins<t){alert(`Не хватает монет!\n\nНужно: ${p(t)}`);return}if(u.coins-=t,e===`power`&&(u.upgrades.power+=1),e===`energy`){let e=u.maxEnergy;u.upgrades.energy+=1,u.maxEnergy=S(),u.energy+=u.maxEnergy-e}e===`recovery`&&(u.upgrades.recovery+=1,Q()),e===`offline`&&(u.upgrades.offline+=1),e===`luck`&&(u.upgrades.luck+=1),u.stats.upgradesBought+=1,d(),D()}}function He(e){let n=t.find(t=>t.id===e);n&&(u.claimedTasks.includes(e)||E(n)<n.target||(u.coins+=n.reward,u.claimedTasks.push(e),d(),D()))}var Z=null;function Q(){Z&&clearInterval(Z),Z=setInterval(()=>{u.energy<u.maxEnergy&&(u.energy+=1,u.energy>u.maxEnergy&&(u.energy=u.maxEnergy),X(),d())},C())}Q(),setInterval(()=>{d()},5e3),window.addEventListener(`beforeunload`,d),D(),setTimeout(()=>{if(u.offline.pendingCoins>0&&u.offline.awaySeconds>=60){Ae();return}G()},300);var $=window.Telegram?.WebApp;if($?.initData){window.FarmClickerTelegram={status:`connecting`};try{$.ready(),$.expand();let e=await fetch(`/api/telegram/bootstrap`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({initData:$.initData}),cache:`no-store`});if(!e.ok)throw Error(`Telegram API responded ${e.status}`);let t=await e.json();if(!t.authenticated)throw Error(`Authentication failed`);window.FarmClickerTelegram={status:`verified`,profile:t.profile},window.dispatchEvent(new CustomEvent(`farmclicker:telegram-ready`,{detail:t.profile})),console.info(`Telegram profile verified. Cloud gameplay is not enabled yet.`)}catch(e){window.FarmClickerTelegram={status:`error`},console.warn(`Telegram authorization not ready:`,e.message)}}