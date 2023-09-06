# Swagger

## @Operation

Annotation servant à définir ce qui sera exposé sur la page Swagger concernant la méthode d’un contrôleur REST

```java
@Operation(description = "Renvoie l’ensemble des thèmes") @GetMapping("themes")
public List<Theme> getThemes() {
return themeService.recupererThemes();
}
```

## @Parameter

Annotation servant à décrire chaque méthode d’un REST Contrôleur

```java
@Operation(description = "Ajoute un thème")
@ResponseStatus(code=HttpStatus.CREATED) @PostMapping("themes/{nom}")
public Theme postTheme(
@Parameter(description = "Nom du thème à ajouter") String nom) {
    return themeService.ajouterTheme(nom);
}
```
