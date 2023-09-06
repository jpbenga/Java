import{_ as s,v as n,b as a,R as l}from"./chunks/framework.bf5b583c.js";const e="/Java/assets/databasefirst.b5934602.png",p="/Java/assets/databasefirst2.d7584e35.png",b=JSON.parse('{"title":"Classes business","description":"","frontmatter":{},"headers":[],"relativePath":"src/cookbook/articles/classes_business.md","filePath":"src/cookbook/articles/classes_business.md","lastUpdated":null}'),o={name:"src/cookbook/articles/classes_business.md"},t=l(`<h1 id="classes-business" tabindex="-1">Classes business <a class="header-anchor" href="#classes-business" aria-label="Permalink to &quot;Classes business&quot;">​</a></h1><p>Pour chaque classe métier:</p><ul><li><p>Ajouter un constructeur vide, sinon on obtient l’exception : <code>org.hibernate.InstantiationException: No default constructor for entity: fr.clelia.fx.enquetes.business.Enquete</code></p></li><li><p>Ajouter un accesseur (méthode get) et un mutateur (méthode set) pour chaque attribut privé</p></li><li><p>Une méthode <code>toString()</code>: Spring va se servir de cette méthode pour générer les formulaires HTML utilisant les balises <code>&lt;form:form&gt;</code> et donner à chaque élément du formulaire la bonne valeur par défaut</p></li><li><p>Annoter les classes business avec les annotations Hibernate (se référer au <a href="/Java/annotations/introduction.html">mémento Annotations</a>) Exemple:</p></li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ftwO9" id="tab-Ly2ucDX" checked="checked"><label for="tab-Ly2ucDX">sans-lombok</label><input type="radio" name="group-ftwO9" id="tab-5CbL26Y"><label for="tab-5CbL26Y">lombok</label></div><div class="blocks"><div class="language-java vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">@</span><span style="color:#F47067;">Entity</span></span>
<span class="line"><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Question</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">@</span><span style="color:#F47067;">Id</span></span>
<span class="line"><span style="color:#ADBAC7;">@</span><span style="color:#F47067;">GeneratedValue</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">strategy</span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;">GenerationType.IDENTITY)</span></span>
<span class="line"><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">int</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> String</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">libelle; @</span><span style="color:#F47067;">ManyToOne</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> Enquete</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">enquete;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Question</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;"> }</span></span>
<span class="line"><span style="color:#ADBAC7;"> ...</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Entity</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Question</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Id</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">GeneratedValue</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">strategy</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">GenerationType.IDENTITY)</span></span>
<span class="line"><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">private</span><span style="color:#24292E;"> String libelle; @</span><span style="color:#D73A49;">ManyToOne</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">private</span><span style="color:#24292E;"> Enquete enquete;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Question</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;"> ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed has-focused-lines vp-code-dark"><code><span class="line has-focus"><span style="color:#ADBAC7;">@</span><span style="color:#F47067;">Entity</span><span style="color:#ADBAC7;"> </span></span>
<span class="line has-focus"><span style="color:#ADBAC7;">@</span><span style="color:#F47067;">NoArgsConstructor</span><span style="color:#ADBAC7;"> </span></span>
<span class="line has-focus"><span style="color:#ADBAC7;">@</span><span style="color:#F47067;">Getter</span><span style="color:#ADBAC7;"> </span></span>
<span class="line has-focus"><span style="color:#ADBAC7;">@</span><span style="color:#F47067;">Setter</span><span style="color:#ADBAC7;"> </span></span>
<span class="line has-focus"><span style="color:#ADBAC7;">@</span><span style="color:#F47067;">EqualsAndHashCode</span><span style="color:#ADBAC7;"> </span></span>
<span class="line has-focus"><span style="color:#ADBAC7;">@</span><span style="color:#F47067;">ToString</span><span style="color:#ADBAC7;"> </span></span>
<span class="line"><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Question</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">@</span><span style="color:#F47067;">Id</span></span>
<span class="line"><span style="color:#ADBAC7;">@</span><span style="color:#F47067;">GeneratedValue</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">strategy</span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;">GenerationType.IDENTITY)</span></span>
<span class="line"><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">int</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> String</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">libelle;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">@</span><span style="color:#F47067;">ManyToOne</span></span>
<span class="line"><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> Enquete</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">enquete;</span></span>
<span class="line"><span style="color:#ADBAC7;">...</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line has-focus"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Entity</span><span style="color:#24292E;"> </span></span>
<span class="line has-focus"><span style="color:#24292E;">@</span><span style="color:#D73A49;">NoArgsConstructor</span><span style="color:#24292E;"> </span></span>
<span class="line has-focus"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Getter</span><span style="color:#24292E;"> </span></span>
<span class="line has-focus"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Setter</span><span style="color:#24292E;"> </span></span>
<span class="line has-focus"><span style="color:#24292E;">@</span><span style="color:#D73A49;">EqualsAndHashCode</span><span style="color:#24292E;"> </span></span>
<span class="line has-focus"><span style="color:#24292E;">@</span><span style="color:#D73A49;">ToString</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Question</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Id</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">GeneratedValue</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">strategy</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">GenerationType.IDENTITY)</span></span>
<span class="line"><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">private</span><span style="color:#24292E;"> String libelle;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">ManyToOne</span></span>
<span class="line"><span style="color:#D73A49;">private</span><span style="color:#24292E;"> Enquete enquete;</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"></div><div class="blocks"><p><em><strong>Version Database First</strong></em>:</p><ul><li>Concevoir les tables avec MySQL Workbench, JMerise ou looping</li><li>Ajouter une connexion à la base de données</li></ul><p><img src="`+e+'" alt="database first"></p><ul><li>Cliquer-droit sur le projet: configure / convert to JPA project</li><li>JPA est coché, cliquer sur Next</li><li>Choisir Generic 2.1 et disable user library puis cliquer sur Finish</li><li>Cliquer droit sur le projet JPA Tools / Generate Entities from Tables</li><li>Sélectionner toutes les tables, cliquer sur Next 2 fois</li><li>Sur la fenêtre « Customize Defaults » chosir identity comme Key generator et comme package le dossier business</li></ul><p><img src="'+p+'" alt="database first2"></p><p>Alternativement, les classes métier peuvent être générées en choisissant File / New / JPA Entities from Tables</p><ul><li>Générer le diagramme de classes métier avec le reverse engineer de StarUML et placer le fichier .mdj ainsi qu’une version PNG du diagramme dans un dossier nommé <code>doc</code></li></ul></div></div></div></div>',4),c=[t];function r(i,y,u,A,d,D){return n(),a("div",null,c)}const v=s(o,[["render",r]]);export{b as __pageData,v as default};
