---
pageClass: cookbook
---

# Introduction

Ce Cook Book décrit les étapes pour créer un projet Spring :

- embarquant un serveur Tomcat qui écoute sur le port 8080
- embarquant une base de données H2 en mémoire nommée enquetes
- utilisant des JSPs pour le front avec la bibliothèque JSTL : https://jakarta.ee/specifications/tags/ et la bibliothèque de balises JSP de Spring - qualifié de monolithique et basé sur le modèle en 5 couches comme suit :

1. **Classes métier** (Package `fr.clelia.fx.enquetes.business`):

   - Exemples de classes : Enquete, Theme, Question
   - Annotations : `@Entity`

2. **Vues** (Dossier `src/main/webapp/WEB-INF`):

   - Exemple : `index.jsp`
   - Utilisation de JSPs avec la bibliothèque JSTL : [Documentation JSTL](https://jakarta.ee/specifications/tags/)
   - Utilisation de la bibliothèque de balises JSP de Spring

3. **Contrôleurs** (Package `fr.clelia.fx.enquetes.controller`):

   - Annotations : `@Controller`, `@RestController`
   - Exemple : Classe `EnqueteController`

4. **Services** (Package `fr.clelia.fx.enquetes.service`):

   - Annotations : `@Service`
   - Exemples : Interface `EnqueteService`, Classe `EnqueteServiceImpl`

5. **DAO** (Package `fr.clelia.fx.enquetes.dao`):
   - Annotations : `@Repository`
   - Exemples : Interface `EnqueteDao`, `ThemeDao`, `QuestionDao`

```md
+--------------------------------+
| Serveur Tomcat |
| Port : 8080 |
+--------------------------------+
|
v
+--------------------------------+
| Vues (JSPs with JSTL and |
| Spring JSP Tags Library) |
| [src/main/webapp/WEB-INF] |
+--------------------------------+
|
v
+--------------------------------+
| Contrôleurs |
| [fr.clelia.fx.enquetes.controller] |
| @Controller, @RestController|
+--------------------------------+
|
v
+--------------------------------+
| Services |
| [fr.clelia.fx.enquetes.service] |
| @Service |
+--------------------------------+
|
v
+--------------------------------+
| DAOs |
| [fr.clelia.fx.enquetes.dao] |
| @Repository |
+--------------------------------+
|
v
+--------------------------------+
| Classes métier |
| [fr.clelia.fx.enquetes.business] |
| @Entity |
+--------------------------------+
```

La programmation par contrat est mise en œuvre pour réduire le couplage : la communication entre les couches se base sur la notion d’interface. Exemple le contrôleur EnqueteController a besoin d’un service EnqueteService, il déclare cette dépendance en faisant référence à l’interface et non à l’implémentation du service (EnqueteServiceImpl) :

```java
@Controller
    public class EnqueteController {

    private final EnqueteService enqueteService;
}
```
