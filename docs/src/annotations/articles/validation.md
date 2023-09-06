# Validation

## @Notblank

Garantit que la valeur de l’attribut (de type String) ne contient pas une chaîne vide

```java
@NotBlank(message="Merci de donner un nom à l''enquête")
@Column(unique = true, nullable = false, length = 150)
private String nom;
```

## @NotNull

Garantit que la valeur de l’attribut contient bien une référence vers un autre objet

```java
@NotNull(message="Merci de préciser le thème de l''enquête")
private Theme theme;
```

## @NotEmpty

Garantit que la chaîne de caractère ou la liste n’est pas vide

```java
@NotEmpty(message="La liste de critères ne peut être vide")
private List<Critere> criteres;
```

## @Digits

Impose un nombre de chiffres avant la virgule et après la virgule. Cette annotation fonctionne sur un attribut de type `int`, `long`, `byte`, `short`, `Integer`, `Long`, `Byte`, `Short`, `CharSequence`, `BigInteger` ou `BigDecimal`

```java
@Digits(integer = 4, fraction = 2, message="Le budget alloué doit contenir {integer} chiffres avant la virgule et {fraction} chiffres après la virgule")
private BigDecimal budgetAlloue;
```

## @Min

Garantit que la valeur de l’attribut est supérieure ou égale à une valeur Min

```java
@Min(value=1000, message="Le prix ne peut pas être inférieur à {value} euros")
private float prix;
```

## @DecimalMin

Garantit que la valeur de l’attribut est supérieure ou égale à une valeur décimale Min

```java
@DecimalMin(value="1000.5", message="Le prix ne peut pas être inférieur à
{value} euros")
private BigDecimal prix;
```

## @Max

Garantit que la valeur de l’attribut est inférieure ou égale à une valeur Max

```java
@Max(value=25000, message="Le prix ne peut pas être supérieur à {value} euros")
private float prix;
```

## @DecimalMax

Garantit que la valeur de l’attribut est inférieure ou égale à une valeur décimale Max

```java
@DecimalMax(value="25000.99", message="Le prix ne peut pas être supérieur à {value} euros")
private BigDecimal prix;
```

## @Range

Garantit que la valeur de l’attribut est comprise entre la borne min et la borne max

```java
@Range(min=1000, max=25000, message="Merci de préciser un prix compris
entre {min} et {max} euros")
private Float prix;
```

## @Positive

Garantit que la valeur de l’attribut est strictement positive

```java
@Positive(message="Merci de préciser un nombre strictement positif")
private Float prix;
```

## @PositiveOrZero

Garantit que la valeur de l’attribut est positive ou égale à zéro

```java
@PositiveOrZero(message="Merci de préciser un nombre supérieur ou égal à zéro")
private Float prix;
```

## @Negative

Garantit que la valeur de l’attribut est négative

```java
@Negative(message="Merci de préciser un nombre strictement négatif")
private Float valeur;
```

## @NegativeOrZero

Garantit que la valeur de l’attribut est négative ou égale à zéro

```java
@NegativeOrZero(message="Merci de préciser un nombre négatif ou égal à zéro")
private Float valeur;
```

## @CreditCardNumber

Garantit que la valeur de l’attribut contient bien un numéro de carte de crédit valide. Pour ce faire Hibernate utilise l’algorithme de Luhn : https://fr.wikipedia.org/wiki/Formule_de_Luhn

```java
@NotNull(message="Merci de renseigner votre numéro de carte")
@CreditCardNumber(message="Le numéro de la carte n'est pas valide")
private String numero;
```

Exemples de numéro de carte valide : 371449635398431, 4111111111111111

## @URL

Garantit que la valeur de l’attribut correspond à une URL valide

```java
@URL(message="Merci de préciser une URL valide")
private String url;
```

## @Past

Garantit que la valeur de l’attribut (de type Date) contient une date dans le passé

```java
@Past(message="La date de naissance doit être dans le passé")
private Date dateDeNaissance;
```

## @PastOrPresent

Garantit que la valeur de l’attribut (de type Date) contient une date dans le passé ou aujourd’hui

```java
@PastOrPresent(message="La date de naissance doit être aujourd’’hui ou dans le passé")
private Date dateDeNaissance;
```

## @Future

Garantit que l’attribut (de type Date) contient une date dans le futur

```java
@Future(message="La date de lancement doit être dans le futur")
private Date dateDeLancement;
```

## @FutureOrPresent

Garantit que l’attribut (de type Date) contient une date dans le futur ou la date actuelle

```java
@FutureOrPresent(message="La date de lancement doit être aujourd’’hui ou dans le futur")
private Date dateDeLancement;
```

## @Pattern

Garantit que la valeur de l’attribut de type `String` respecte une expression régulière précisée dans l’attribut regexp

```java
@Pattern(regexp="^[A-Za-z]+$", message="La référence doit contenir uniquement des lettres")
private String reference;
```

Pour vous aider à écrire vos regex: http://jkorpela.fi/perl/regexp.html et https://regex101.com/

## @Email

Garantit que la valeur de l’attribut de type String contient une adresse email valide

```java
@Email(message="L''adresse email renseignée n'est pas valide")
private String email;
```

## @Size

Garantit que le nombre de caractères de l’attribut respecte les contraintes données en paramètre.

```java
@Size(min=5, message="Le mot de passe doit contenir au minimum {min} caractères")
private String motDePasse;
```

Cette annotation est aussi autorisée au dessus d’une collection (List ou Set) pour vérifier que le nombre d’objets dans la collection respecte les contraintes données en paramètre

## @Length

Garantit que le nombre de caractères de l’attribut respecte les contraintes données en paramètre. `@Length` appartient à Hibernate Validator alors que `@Size` appartient à la spécification JPA

```java
@Length(min=5, max=100, message="La description doit contenir entre {min} et {max} caractères")
private String description;
```

## @Constraint

Sert à définir ses propres contraintes de validation. L’interface doit comporter au minimum les méthodes `message()`, `groups()` et `payload()`. Cela implique également l’écriture d’une classe qui implémente l’interface ContraintValidator. Cette interface déclare une méthode `isValid` qui renvoie un boolean.

```java
@Documented
@Target({ElementType.FIELD, ElementType.METHOD}) @Constraint(validatedBy={DixHuitAnsOuPlusValidator.class}) @Retention(RetentionPolicy.RUNTIME)
public @interface DixHuitAnsOuPlus {
String message() default "Vous devez avoir au moins 18 ans";

Class<?>[] groups() default {};

Class<? extends Payload>[] payload() default {};

}
```

## @Valid

Demande la validation des données de l’objet vis-à-vis des contraintes exprimées dans la classe de l’objet.
L’annotation `@Valid` s’utilise dans la couche contrôleur Spring. Spring fait appel à Hibernate Validator pour valider les données.
Exemple : on demande au moment de l’invocation de la méthode la validation des données de l’objet enquete :

```java
public ModelAndView enregistrerEnquetePost(@Valid @ModelAttribute("enquete") Enquete enquete, BindingResult result) {}
```
