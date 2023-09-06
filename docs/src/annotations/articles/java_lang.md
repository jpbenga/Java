# java.lang.annotation

## @Documented

Annotation marqueur qui demande à l’outil qui génère la documentation d’inclure cette annotation dans la documentation. Par défaut Javadoc ne génère pas de fichier HTML pour les annotations.

```java
@Documented
public @interface DixHuitAnsOuPlus {}
```

## @Target

Annotation qui indique sur quel élément Java l’annotation peut-être placée.
Cette annotation utilise l’énumération `ElementType` : https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/lang/annotation/ ElementType.html
Dans l’exemple ci-dessous, l’annotation pourra être placée au dessus d’un attribut et au dessus d’une méthode :

```java
@Documented
@Target({ElementType.FIELD, ElementType.METHOD})
public @interface DixHuitAnsOuPlus {}
```

## @Retention

Précise la politique de rétention de l’annotation. Il y a trois valeurs possibles : `SOURCE` (l’annotation n’existera qu’au niveau du code source et sera ignorée par le compilateur), `CLASS` (l’annotation sera retenue jusqu’au moment de la compilation mais ignorée par la JVM) et `RUNTIME` (l’annotation sera retenue jusqu’à l’exécution du programme).

```java

@Documented
@Target({ElementType.FIELD, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface DixHuitAnsOuPlus {}
```

## @Repeatable

Apparue avec la version 8 de Java, elle autorise une annotation a être utilisée plusieurs fois sur un même élément Java. L’annotation `@Scheduled` utilisée ci-après est annotée `@Repeatable` :

```java
@Scheduled(cron="00 00 8 * * *")
@Scheduled(cron="00 00 19 * * *")
public void sauvegarder() {}
```
