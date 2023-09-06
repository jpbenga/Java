# Jackson

## @JsonProperty

Annotation servant, entre autres, à indiquer le nom de l’attribut tel qui doit apparaître dans la version sérialisée en JSON de l’objet Java

```java
@JsonProperty(value="prix") private float prixTTC;
```

L’ordre de sérialisation est imposé avec l’attribut `index` : value=””, index=2

```java
@JsonProperty(value="prix", index=2) private float prixTTC;
```

Pour accepter une donnée sans la restituer au moment de la sérialisation :

```java
@JsonProperty(access=Access.WRITE_ONLY)
private String motDePasse;
```

## @JsonIgnore

Annotation servant à ne pas inclure l’attribut annoté dans l’expression JSON de l’objet Java, autrement dit dans la version sérialisée de l’objet Java

```java
@JsonIgnore
private float prixTTC;
```

## @JsonManagedReference

Accompagne l’annotation `@OneToMany` et permet d’éviter les boucles infinies au moment de la sérialisation

## @JsonBackReference

Accompagne l’annotation `@ManyToOne` et permet d’éviter les boucles infinies au moment de la sérialisation
