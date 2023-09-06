import{_ as s,v as n,b as a,R as l}from"./chunks/framework.bf5b583c.js";const u=JSON.parse('{"title":"Service","description":"","frontmatter":{},"headers":[],"relativePath":"src/cookbook/articles/service.md","filePath":"src/cookbook/articles/service.md","lastUpdated":null}'),p={name:"src/cookbook/articles/service.md"},o=l(`<h1 id="service" tabindex="-1">Service <a class="header-anchor" href="#service" aria-label="Permalink to &quot;Service&quot;">​</a></h1><ul><li>Écrire les interfaces puis les classes dans le paquetage <code>service</code>. Annoter chaque classe service avec le stéréotype Spring <code>@Service</code> et demander à Spring l’injection des DAO par l’écriture d’un constructeur ayant en paramètre les objets que Spring doit injecter dans le service.</li></ul><p>Exemple:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">@</span><span style="color:#F47067;">Service</span></span>
<span class="line"><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">QuestionServiceImpl</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">implements</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">QuestionService</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">final</span><span style="color:#ADBAC7;"> QuestionDao</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">questionDao;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">final</span><span style="color:#ADBAC7;"> EnqueteDao</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">enqueteDao;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">QuestionServiceImpl</span><span style="color:#ADBAC7;">(QuestionDao </span><span style="color:#F69D50;">questionDao</span><span style="color:#ADBAC7;">, EnqueteDao </span><span style="color:#F69D50;">enqueteDao</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">super</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">this</span><span style="color:#ADBAC7;">.questionDao </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> questionDao; </span><span style="color:#6CB6FF;">this</span><span style="color:#ADBAC7;">.enqueteDao </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> enqueteDao;</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    @</span><span style="color:#F47067;">Override</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> Question </span><span style="color:#DCBDFB;">enregistrerQuestion</span><span style="color:#ADBAC7;">(Question </span><span style="color:#F69D50;">question</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">if</span><span style="color:#ADBAC7;"> (questionDao.</span><span style="color:#DCBDFB;">findByLibelle</span><span style="color:#ADBAC7;">(question.</span><span style="color:#DCBDFB;">getLibelle</span><span style="color:#ADBAC7;">())</span><span style="color:#F47067;">!=</span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">throw</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">new</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">QuestionExistanteException</span><span style="color:#ADBAC7;">(); }</span></span>
<span class="line"><span style="color:#ADBAC7;">    questionDao.</span><span style="color:#DCBDFB;">save</span><span style="color:#ADBAC7;">(question); </span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;"> question;</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    @</span><span style="color:#F47067;">Override</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> Question </span><span style="color:#DCBDFB;">recupererQuestion</span><span style="color:#ADBAC7;">(Long </span><span style="color:#F69D50;">id</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;"> questionDao.</span><span style="color:#DCBDFB;">findById</span><span style="color:#ADBAC7;">(id).</span><span style="color:#DCBDFB;">orElse</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    @</span><span style="color:#F47067;">Override</span></span>
<span class="line"><span style="color:#ADBAC7;">    @</span><span style="color:#F47067;">Transactional</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">readOnly</span><span style="color:#F47067;">=</span><span style="color:#6CB6FF;">true</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> List&lt;</span><span style="color:#F47067;">Question</span><span style="color:#ADBAC7;">&gt; </span><span style="color:#DCBDFB;">recupereQuestions</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;"> questionDao.</span><span style="color:#DCBDFB;">findAll</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Service</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">QuestionServiceImpl</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">implements</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">QuestionService</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> QuestionDao questionDao;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> EnqueteDao enqueteDao;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">QuestionServiceImpl</span><span style="color:#24292E;">(QuestionDao </span><span style="color:#E36209;">questionDao</span><span style="color:#24292E;">, EnqueteDao </span><span style="color:#E36209;">enqueteDao</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.questionDao </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> questionDao; </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.enqueteDao </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> enqueteDao;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Override</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> Question </span><span style="color:#6F42C1;">enregistrerQuestion</span><span style="color:#24292E;">(Question </span><span style="color:#E36209;">question</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (questionDao.</span><span style="color:#6F42C1;">findByLibelle</span><span style="color:#24292E;">(question.</span><span style="color:#6F42C1;">getLibelle</span><span style="color:#24292E;">())</span><span style="color:#D73A49;">!=</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">QuestionExistanteException</span><span style="color:#24292E;">(); }</span></span>
<span class="line"><span style="color:#24292E;">    questionDao.</span><span style="color:#6F42C1;">save</span><span style="color:#24292E;">(question); </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> question;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Override</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> Question </span><span style="color:#6F42C1;">recupererQuestion</span><span style="color:#24292E;">(Long </span><span style="color:#E36209;">id</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> questionDao.</span><span style="color:#6F42C1;">findById</span><span style="color:#24292E;">(id).</span><span style="color:#6F42C1;">orElse</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Override</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Transactional</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">readOnly</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> List&lt;</span><span style="color:#D73A49;">Question</span><span style="color:#24292E;">&gt; </span><span style="color:#6F42C1;">recupereQuestions</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> questionDao.</span><span style="color:#6F42C1;">findAll</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>La méthode d’enregistrement de ce service lève une exception maison (ce qui est bien un des rôles d’un service). L’exception maison existe dans le package exception :</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F47067;">package</span><span style="color:#ADBAC7;"> fr.clelia.fx.enquetes.exception;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">QuestionException</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">extends</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">RuntimeException</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">static</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">final</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">long</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">serialVersionUID</span><span style="color:#F69D50;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">1L</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> fr.clelia.fx.enquetes.exception;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">QuestionException</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RuntimeException</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">long</span><span style="color:#24292E;"> serialVersionUID </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1L</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,6),e=[o];function t(c,r,y,i,A,D){return n(),a("div",null,e)}const B=s(p,[["render",t]]);export{u as __pageData,B as default};
