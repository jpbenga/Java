# API Rest

Pour mettre en œuvre une API REST, écrire le ou les contrôleurs Spring. Annoter chaque classe contrôleur avec l’annotation `@RestController`.

« REST est un ensemble de contraintes architecturales. Il ne s'agit ni d'un protocole, ni d'une norme. Les développeurs d'API peuvent mettre en œuvre REST de nombreuses manières. Lorsqu'un client émet une requête par le biais d'une **_API RESTful_**, celle-ci transfère une représentation de l'état de la ressource au demandeur ou point de terminaison.

Cette information, ou représentation, est fournie via le protocole HTTP dans l'un des formats suivants : JSON (JavaScript Object Notation), HTML, XLT, Python, PHP ou texte brut. Le langage de programmation le plus communément utilisé est JSON, car, contrairement à ce que son nom indique, il ne dépend pas d'un langage et peut être lu aussi bien par les humains que par les machines. »

Source : https://www.redhat.com/fr/topics/api/what-is-a-rest-api

De manière conventionnelle, vers une API REST :

- l’envoi d’une requête HTTP avec la méthode GET demande la récupération d’une ou plusieurs données
- l’envoi d’une requête HTTP avec la méthode POST demande l’ajout d’une donnée
- l’envoi d’une requête HTTP avec la méthode PUT demande la mise à jour complète
  d’une donnée
- l’envoi d’une requête HTTP avec la méthode PATCH demande la mise à jour partielle
  d’une donnée
- l’envoi d’une requête HTTP avec la méthode DELETE demande la suppression d’une
  donnée

```java
@RestController
@RequestMapping("/api/")
@AllArgsConstructor
@Validated
public class UtilisateurRestController {
private final UtilisateurService utilisateurService;
private final ThemeService themeService;
/**
* Cette méthode renvoie une page d'utilisateurs
*
* @param pageable correspond à une demande de page * @param filtre correspond au filtre demandé
*
* @return une page d'utilisateurs
*/
@GetMapping("utilisateurs")
public Page<Utilisateur> getUtilisateursPagines(
pageable,filtre){
return utilisateurService.recupererUtilisateurs(pageable, filtre);
    }
}
```

::: info

NB : l’importation de pageable à choisir est celui de Spring et non celui de AWT qui est un vieux toolkit graphique.

:::
