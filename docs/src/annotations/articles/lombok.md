# Lombock

## @NoArgsConstructor

Annotation qui demande à Lombok de générer à la volée un constructeur par défaut, c’est-à-dire sans paramètre

::: code-group

```java [Avec]
@NoArgsConstructor
public class Theme { }
```

```java [Sans]
public class Theme { public Theme() {}
}
```

:::

## @NonNull

Annotation vérifiant que l’attribut n’est pas `null`.
Si l’attribut est nul, une exception `NullPointerException` est levée

```java
@NonNull
private String nom;
```

## @AllArgsConstructor

Annotation qui demande à Lombok de générer à la volée un constructeur contenant un paramètre pour chaque attribut de la classe

::: code-group

```java [Avec]
@AllArgsConstructor
public class Theme {

private Long id;

private String nom;
}
```

```java [Sans]
public class Theme {

private Long id;

private String nom;

public Theme(Long id, String nom) {
   this.id = id;
   this.nom = nom;
   }
}
```

:::

## @RequiredArgsConstructor

Annotation qui demande à Lombok de générer à la volée un constructeur contenant en paramètre tous les attributs déclarés final ou annotés `@NonNull`

::: code-group

```java [Avec]

@RequiredArgsConstructor
public class Theme {

private Long id;

@NonNull
private String nom;
}
```

```java [Sans]

public class Theme {

private Long id;

private String nom;

public Theme(String nom) {
   this.nom = nom;
  }
}
```

:::

## @Getter

Annotation qui demande à Lombok de générer à la volée l’accesseur pour chaque attribut de la classe. A noter : l’annotation peut aussi s’utiliser au dessus de l’attribut.

::: code-group

```java [Avec]
@Getter
public class Theme {

private Long id;

private String nom; }
```

```java [Sans]

public class Theme {

private Long id;

private String nom;

public Long getId() {
   return id;
}
public String getNom() {
   return nom;
   }
}
```

:::

## @Setter

Annotation qui demande à Lombok de générer à la volée le mutateur pour chaque attribut de la classe. A noter : l’annotation peut aussi s’utiliser au dessus de l’attribut.

::: code-group

```java [Avec]
@Setter
public class Theme {

private Long id;

private String nom; }
```

```java [Sans]
public class Theme {

private Long id;

private String nom;

public void setId(Long id) {
   this.id = id;
}
public void setNom(String nom) {
   this.nom = nom;
   }
}
```

:::

## @EqualsAndHashCode

Annotation qui demande à Lombok de générer à la volée les méthodes `equals()` et `hashCode()`

```java
@EqualsAndHashCode
public class Theme { }
```

## @ToString

Annotation qui demande à Lombok de générer à la volée la méthode `toString`

```java
@ToString
public class Theme { }
```

Pour incorporer la méthode `toString()` de la classe mère, il suffit d’ajouter le paramètre
`callSuper=true`
La collection d’attributs peut être renseignée dans l’attribut `of` :

```java
@ToString(of= {"id", "nom"}) public class Theme { }
```

Il est cependant recommandé d’exclure un attribut de la méthode `toString()` comme suit :

```java
@ToString.Exclude
private List<Enquete> enquetes;
```

## @Data

Annotation qui remplace les annotations `@Getter` `@Setter` `@EqualsAndHashCode`, `@RequiredArgsConstructor` et `@ToString`

```java
@Data
public class Theme { }
```

## @Log

Annotation qui ajoute à la classe annotée un attribut nommé `log` de type `java.util.logging.Logger`. Le niveau de log est défini dans le fichier application.properties ou dans le fichier application.yml :

```java
logging.level.root=INFO
```

```java
@RestController
@Log
public class EnqueteRestController {
public EnqueteRestController() {
log.info("Invocation du constructeur par défaut du contrôleur
EnqueteRestController");
      }
}
```

## @Log4j2

Annotation qui ajoute à la classe annotée un attribut nommé log de type org.apache.logging.log4j.Logger

```java
@RestController
@Log4j2
public class EnqueteRestController {
public EnqueteRestController() {
log.info("Invocation du constructeur par défaut du contrôleur
EnqueteRestController");
      }
}
```

## @Slf4j

Annotation qui ajoute à la classe annotée un attribut nommé `log` de type `org.slf4j.Logger`

```java
@RestController
@Slf4j
public class EnqueteRestController {
public EnqueteRestController() {
log.info("Invocation du constructeur par défaut du contrôleur
EnqueteRestController");
      }
}
```

## @Builder

Annotation qui ajoute une méthode static `builder()` sur la classe annotée de façon à construire l’objet en invoquant successivement des méthodes qui renvoient un objet de type Builder :

Exemple de construction :

```java
Theme theme1 = Theme.builder().nom("Voyage").build();
```

Dans la classe métier :

```java
@Builder
public class Theme { }
```

## @SuperBuilder

Annotation à utiliser dans un contexte d’héritage. Cette annotation ajoute une méthode static

`builder()` sur la classe annotée de façon à construire l’objet en appelant successivement des méthodes qui renvoient un objet de type Builder :

Exemple de construction :

```java
Enquete enquete1 = EnqueteTelephonique.builder()
      .nom("Enquete1")
      .scriptDAccroche("Bonjour, auriez-vous deux heures à m’accorder pour répondre à quelques questions ?")
      .prix(1000f)
      .theme(theme1)
      .build();
```

::: info

A noter : en annotant la classe EnqueteTelephonique avec @Builder et non avec @SuperBuilder, les méthodes nom(String) et prix(float) ne seraient pas disponibles car nom et prix sont des attributs de la classe mère.

:::

Dans la classe métier :

```java
@SuperBuilder
public class EnqueteTelephonique { }
```

## @FieldDefaults

Annotation expérimentale utilisée pour définir, entre autres, la visibilité des attributs

```java
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Theme { }
```
