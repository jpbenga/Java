import{_ as s,v as n,b as a,R as l}from"./chunks/framework.bf5b583c.js";const C=JSON.parse('{"title":"Introduction","description":"","frontmatter":{"pageClass":"cookbook"},"headers":[],"relativePath":"src/cookbook/articles/introduction.md","filePath":"src/cookbook/articles/introduction.md","lastUpdated":null}'),e={name:"src/cookbook/articles/introduction.md"},p=l(`<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>Ce Cook Book décrit les étapes pour créer un projet Spring :</p><ul><li>embarquant un serveur Tomcat qui écoute sur le port 8080</li><li>embarquant une base de données H2 en mémoire nommée enquetes</li><li>utilisant des JSPs pour le front avec la bibliothèque JSTL : <a href="https://jakarta.ee/specifications/tags/" target="_blank" rel="noreferrer">https://jakarta.ee/specifications/tags/</a> et la bibliothèque de balises JSP de Spring - qualifié de monolithique et basé sur le modèle en 5 couches comme suit :</li></ul><ol><li><p><strong>Classes métier</strong> (Package <code>fr.clelia.fx.enquetes.business</code>):</p><ul><li>Exemples de classes : Enquete, Theme, Question</li><li>Annotations : <code>@Entity</code></li></ul></li><li><p><strong>Vues</strong> (Dossier <code>src/main/webapp/WEB-INF</code>):</p><ul><li>Exemple : <code>index.jsp</code></li><li>Utilisation de JSPs avec la bibliothèque JSTL : <a href="https://jakarta.ee/specifications/tags/" target="_blank" rel="noreferrer">Documentation JSTL</a></li><li>Utilisation de la bibliothèque de balises JSP de Spring</li></ul></li><li><p><strong>Contrôleurs</strong> (Package <code>fr.clelia.fx.enquetes.controller</code>):</p><ul><li>Annotations : <code>@Controller</code>, <code>@RestController</code></li><li>Exemple : Classe <code>EnqueteController</code></li></ul></li><li><p><strong>Services</strong> (Package <code>fr.clelia.fx.enquetes.service</code>):</p><ul><li>Annotations : <code>@Service</code></li><li>Exemples : Interface <code>EnqueteService</code>, Classe <code>EnqueteServiceImpl</code></li></ul></li><li><p><strong>DAO</strong> (Package <code>fr.clelia.fx.enquetes.dao</code>):</p><ul><li>Annotations : <code>@Repository</code></li><li>Exemples : Interface <code>EnqueteDao</code>, <code>ThemeDao</code>, <code>QuestionDao</code></li></ul></li></ol><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">+--------------------------------+</span></span>
<span class="line"><span style="color:#ADBAC7;">| Serveur Tomcat |</span></span>
<span class="line"><span style="color:#ADBAC7;">| Port : 8080 |</span></span>
<span class="line"><span style="color:#ADBAC7;">+--------------------------------+</span></span>
<span class="line"><span style="color:#ADBAC7;">|</span></span>
<span class="line"><span style="color:#ADBAC7;">v</span></span>
<span class="line"><span style="color:#ADBAC7;">+--------------------------------+</span></span>
<span class="line"><span style="color:#ADBAC7;">| Vues (JSPs with JSTL and |</span></span>
<span class="line"><span style="color:#ADBAC7;">| Spring JSP Tags Library) |</span></span>
<span class="line"><span style="color:#ADBAC7;">| [</span><span style="color:#96D0FF;">src/main/webapp/WEB-INF</span><span style="color:#ADBAC7;">] |</span></span>
<span class="line"><span style="color:#ADBAC7;">+--------------------------------+</span></span>
<span class="line"><span style="color:#ADBAC7;">|</span></span>
<span class="line"><span style="color:#ADBAC7;">v</span></span>
<span class="line"><span style="color:#ADBAC7;">+--------------------------------+</span></span>
<span class="line"><span style="color:#ADBAC7;">| Contrôleurs |</span></span>
<span class="line"><span style="color:#ADBAC7;">| [</span><span style="color:#96D0FF;">fr.clelia.fx.enquetes.controller</span><span style="color:#ADBAC7;">] |</span></span>
<span class="line"><span style="color:#ADBAC7;">| @Controller, @RestController|</span></span>
<span class="line"><span style="color:#ADBAC7;">+--------------------------------+</span></span>
<span class="line"><span style="color:#ADBAC7;">|</span></span>
<span class="line"><span style="color:#ADBAC7;">v</span></span>
<span class="line"><span style="color:#ADBAC7;">+--------------------------------+</span></span>
<span class="line"><span style="color:#ADBAC7;">| Services |</span></span>
<span class="line"><span style="color:#ADBAC7;">| [</span><span style="color:#96D0FF;">fr.clelia.fx.enquetes.service</span><span style="color:#ADBAC7;">] |</span></span>
<span class="line"><span style="color:#ADBAC7;">| @Service |</span></span>
<span class="line"><span style="color:#ADBAC7;">+--------------------------------+</span></span>
<span class="line"><span style="color:#ADBAC7;">|</span></span>
<span class="line"><span style="color:#ADBAC7;">v</span></span>
<span class="line"><span style="color:#ADBAC7;">+--------------------------------+</span></span>
<span class="line"><span style="color:#ADBAC7;">| DAOs |</span></span>
<span class="line"><span style="color:#ADBAC7;">| [</span><span style="color:#96D0FF;">fr.clelia.fx.enquetes.dao</span><span style="color:#ADBAC7;">] |</span></span>
<span class="line"><span style="color:#ADBAC7;">| @Repository |</span></span>
<span class="line"><span style="color:#ADBAC7;">+--------------------------------+</span></span>
<span class="line"><span style="color:#ADBAC7;">|</span></span>
<span class="line"><span style="color:#ADBAC7;">v</span></span>
<span class="line"><span style="color:#ADBAC7;">+--------------------------------+</span></span>
<span class="line"><span style="color:#ADBAC7;">| Classes métier |</span></span>
<span class="line"><span style="color:#ADBAC7;">| [</span><span style="color:#96D0FF;">fr.clelia.fx.enquetes.business</span><span style="color:#ADBAC7;">] |</span></span>
<span class="line"><span style="color:#ADBAC7;">| @Entity |</span></span>
<span class="line"><span style="color:#ADBAC7;">+--------------------------------+</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">+--------------------------------+</span></span>
<span class="line"><span style="color:#24292E;">| Serveur Tomcat |</span></span>
<span class="line"><span style="color:#24292E;">| Port : 8080 |</span></span>
<span class="line"><span style="color:#24292E;">+--------------------------------+</span></span>
<span class="line"><span style="color:#24292E;">|</span></span>
<span class="line"><span style="color:#24292E;">v</span></span>
<span class="line"><span style="color:#24292E;">+--------------------------------+</span></span>
<span class="line"><span style="color:#24292E;">| Vues (JSPs with JSTL and |</span></span>
<span class="line"><span style="color:#24292E;">| Spring JSP Tags Library) |</span></span>
<span class="line"><span style="color:#24292E;">| [</span><span style="color:#032F62;text-decoration:underline;">src/main/webapp/WEB-INF</span><span style="color:#24292E;">] |</span></span>
<span class="line"><span style="color:#24292E;">+--------------------------------+</span></span>
<span class="line"><span style="color:#24292E;">|</span></span>
<span class="line"><span style="color:#24292E;">v</span></span>
<span class="line"><span style="color:#24292E;">+--------------------------------+</span></span>
<span class="line"><span style="color:#24292E;">| Contrôleurs |</span></span>
<span class="line"><span style="color:#24292E;">| [</span><span style="color:#032F62;text-decoration:underline;">fr.clelia.fx.enquetes.controller</span><span style="color:#24292E;">] |</span></span>
<span class="line"><span style="color:#24292E;">| @Controller, @RestController|</span></span>
<span class="line"><span style="color:#24292E;">+--------------------------------+</span></span>
<span class="line"><span style="color:#24292E;">|</span></span>
<span class="line"><span style="color:#24292E;">v</span></span>
<span class="line"><span style="color:#24292E;">+--------------------------------+</span></span>
<span class="line"><span style="color:#24292E;">| Services |</span></span>
<span class="line"><span style="color:#24292E;">| [</span><span style="color:#032F62;text-decoration:underline;">fr.clelia.fx.enquetes.service</span><span style="color:#24292E;">] |</span></span>
<span class="line"><span style="color:#24292E;">| @Service |</span></span>
<span class="line"><span style="color:#24292E;">+--------------------------------+</span></span>
<span class="line"><span style="color:#24292E;">|</span></span>
<span class="line"><span style="color:#24292E;">v</span></span>
<span class="line"><span style="color:#24292E;">+--------------------------------+</span></span>
<span class="line"><span style="color:#24292E;">| DAOs |</span></span>
<span class="line"><span style="color:#24292E;">| [</span><span style="color:#032F62;text-decoration:underline;">fr.clelia.fx.enquetes.dao</span><span style="color:#24292E;">] |</span></span>
<span class="line"><span style="color:#24292E;">| @Repository |</span></span>
<span class="line"><span style="color:#24292E;">+--------------------------------+</span></span>
<span class="line"><span style="color:#24292E;">|</span></span>
<span class="line"><span style="color:#24292E;">v</span></span>
<span class="line"><span style="color:#24292E;">+--------------------------------+</span></span>
<span class="line"><span style="color:#24292E;">| Classes métier |</span></span>
<span class="line"><span style="color:#24292E;">| [</span><span style="color:#032F62;text-decoration:underline;">fr.clelia.fx.enquetes.business</span><span style="color:#24292E;">] |</span></span>
<span class="line"><span style="color:#24292E;">| @Entity |</span></span>
<span class="line"><span style="color:#24292E;">+--------------------------------+</span></span></code></pre></div><p>La programmation par contrat est mise en œuvre pour réduire le couplage : la communication entre les couches se base sur la notion d’interface. Exemple le contrôleur EnqueteController a besoin d’un service EnqueteService, il déclare cette dépendance en faisant référence à l’interface et non à l’implémentation du service (EnqueteServiceImpl) :</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">@</span><span style="color:#F47067;">Controller</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">EnqueteController</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">final</span><span style="color:#ADBAC7;"> EnqueteService</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">enqueteService;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Controller</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EnqueteController</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> EnqueteService enqueteService;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,7),o=[p];function c(t,r,i,y,d,A){return n(),a("div",null,o)}const E=s(e,[["render",c]]);export{C as __pageData,E as default};
