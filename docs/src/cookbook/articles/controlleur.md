# Controlleur

- Écrire le ou les contrôleurs Spring. Annoter chaque classe contrôleur avec `@Controller`.

- (manière dépréciée) Demander à Spring l’injection des objets de type Service dans les contrôleurs grâce à l'annotation `@Autowired` placée sur chaque attribut.

::: info
NB : Chaque objet de type Service doit être annoté @Autowired.
:::

Exemple:

```java
@Controller
public class EnqueteController {

@Autowired
private EnqueteService enqueteService;

@Autowired
private QuestionService questionService;
```

(manière moderne, à préférer) Ajouter un constructeur dans le contrôleur avec en
paramètre tous les objets que Spring doit injecter dans le contrôleur.

Exemple:

```java
@Controller
public class EnqueteController {

    private final EnqueteService enqueteService;
    private final QuestionService questionService;

public EnqueteController(EnqueteService enqueteService, QuestionService questionService) {
    super();
    this.enqueteService = enqueteService;
    this.questionService = questionService;
    }
}
```

(manière encore plus moderne, à préférer) Ajouter l’annotation `@AllArgsConstructor` de Lombok qui va ajouter à la volée un constructeur avec en paramètre tous les objets que Spring doit injecter dans le contrôleur.

Exemple:

```java
@Controller
@AllArgsConstructor // [!code focus]
public class EnqueteController {

private final EnqueteService enqueteService;
private final QuestionService questionService;
}
```

Ajouter les méthodes nécessaires pour traiter toutes les requêtes HTTP. Chacune de ces méthodes doit renvoyer un objet de type ModelAndView :
https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/ web/servlet/ModelAndView.html

```java
@Controller
@AllArgsConstructor
public class EnqueteController {
private final EnqueteService enqueteService;
private final QuestionService questionService;
@RequestMapping(value = { "/index", "/" }) public ModelAndView accueil() {
ModelAndView mav = new ModelAndView("index");
                  mav.addObject("enquetes",
enqueteService.recupererEnquetes());
return mav; }
}
```
