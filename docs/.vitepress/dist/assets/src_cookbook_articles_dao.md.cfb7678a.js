import{_ as s,v as e,b as a,R as o}from"./chunks/framework.bf5b583c.js";const n="/Java/assets/jparepository.27b84797.png",t="/Java/assets/diagramme_classe.ec6e82b2.png",A=JSON.parse('{"title":"Dao","description":"","frontmatter":{},"headers":[],"relativePath":"src/cookbook/articles/dao.md","filePath":"src/cookbook/articles/dao.md","lastUpdated":null}'),p={name:"src/cookbook/articles/dao.md"},l=o('<h1 id="dao" tabindex="-1">Dao <a class="header-anchor" href="#dao" aria-label="Permalink to &quot;Dao&quot;">​</a></h1><ul><li>Écrire les interfaces DAO en sélectionnant dans le menu File / New / Interface. Chaque interface hérite de JpaRepository</li></ul><p><img src="'+n+'" alt="JPARepository"></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">interface</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">EnqueteDao</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">extends</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">JpaRepository</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F47067;">Enquete</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">Long</span><span style="color:#ADBAC7;">&gt; {}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EnqueteDao</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">JpaRepository</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">Enquete</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">Long</span><span style="color:#24292E;">&gt; {}</span></span></code></pre></div><ul><li>Avec IntelliJ et le plugin JPA Buddy (<a href="https://www.jpa-buddy.com/" target="_blank" rel="noreferrer">https://www.jpa-buddy.com/</a> disponible sur le marketplace d’IntelliJ à partir de la version 2020), les DAO peuvent être générées en choisissant une ou plusieurs classes puis new Spring Data Repository.</li></ul><p>Javadoc des interfaces Repository de Spring Data JPA : <a href="https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/" target="_blank" rel="noreferrer">https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/</a> repository/JpaRepository.html</p><ul><li><p>L’interface JpaRepository hérite de l’interface PagingAndSortingRepository : <a href="https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/" target="_blank" rel="noreferrer">https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/</a> repository/PagingAndSortingRepository.html</p></li><li><p>L’interface PagingAndSortingRepository hérite de l’interface CrudRepository : <a href="https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/" target="_blank" rel="noreferrer">https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/</a> repository/CrudRepository.html</p><p>Voici un diagramme de classes présentant l’héritage entre les 4 interfaces :</p><p><img src="'+t+`" alt="Diagramme de classe"></p></li><li><p>Dans chaque interface du package dao, des méthodes annotées <code>@Query</code> ou des méthodes requêtes peuvent être déclarées. Par défaut l’annotation <code>@Query</code> attend une requête HQL :</p></li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">@</span><span style="color:#F47067;">Query</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;FROM Theme t ORDER BY size(t.enquetes) DESC&quot;</span><span style="color:#ADBAC7;">) List</span><span style="color:#F47067;">&lt;</span><span style="color:#ADBAC7;">Theme</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">findThemesSortedByNbEnquetes</span><span style="color:#ADBAC7;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Query</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;FROM Theme t ORDER BY size(t.enquetes) DESC&quot;</span><span style="color:#24292E;">) List</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">Theme</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">findThemesSortedByNbEnquetes</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Se référer à la documentation officielle pour rédiger la requête HQL : <a href="https://docs.jboss.org/hibernate/stable/orm/userguide/html_single/" target="_blank" rel="noreferrer">https://docs.jboss.org/hibernate/stable/orm/userguide/html_single/</a> Hibernate_User_Guide.html</p><ul><li>L’annotation <code>@Query</code> peut aussi accueillir une requête SQL grâce à l’attribut <code>nativeQuery</code> :</li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">@</span><span style="color:#F47067;">Query</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">value</span><span style="color:#F47067;">=</span><span style="color:#96D0FF;">&quot;SELECT * FROM Enquete WHERE theme_id=:idTheme&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">nativeQuery</span><span style="color:#F47067;">=</span><span style="color:#6CB6FF;">true</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">List</span><span style="color:#F47067;">&lt;</span><span style="color:#ADBAC7;">Enquete</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">findByIdTheme</span><span style="color:#ADBAC7;">(@</span><span style="color:#F47067;">Param</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;idTheme&quot;</span><span style="color:#ADBAC7;">) Long idTheme);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Query</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">value</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;SELECT * FROM Enquete WHERE theme_id=:idTheme&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">nativeQuery</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">List</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">Enquete</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">findByIdTheme</span><span style="color:#24292E;">(@</span><span style="color:#D73A49;">Param</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;idTheme&quot;</span><span style="color:#24292E;">) Long idTheme);</span></span></code></pre></div><ul><li>Une alternative à l’annotation <code>@Query</code> est l’écriture de requête par dérivation, en anglais « query-method ». Le nom de la méthode est interprété par Spring Data et traduit en HQL. Exemple :</li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">List</span><span style="color:#F47067;">&lt;</span><span style="color:#ADBAC7;">Enquete</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">findByTheme</span><span style="color:#ADBAC7;">(Theme theme);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">List</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">Enquete</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">findByTheme</span><span style="color:#24292E;">(Theme theme);</span></span></code></pre></div><ul><li>Les mots clés autorisés dans le nom des méthodes sont résumés sur la table suivante : <a href="https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-" target="_blank" rel="noreferrer">https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-</a> methods.query-creation</li></ul>`,14),r=[l];function c(i,d,y,u,g,h){return e(),a("div",null,r)}const D=s(p,[["render",c]]);export{A as __pageData,D as default};
