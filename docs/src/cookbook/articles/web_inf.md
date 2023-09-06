# WEB-INF

Écrire les JSPs dans le dossier `src/main/webapp/WEB-INF` en cliquant-droit sur ce dossier, New / JSP File. En plaçant les JSPs dans ce dossier, elles ne sont pas accessibles publiquement, seuls les contrôleurs peuvent les utiliser.

Pour bénéficier des balises JSTL (Java Standard Tag Library) ajouter la directive suivante dans laJSP:

```java
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
```

Grâce à cette bibliothèque de balises, l’écriture de la vue est simplifiée :
`<c:if>` pour ajouter un branchement.
<u>**_Exemple_**</u>: on teste si l’attribut erreur n’est pas nul. Dans l’affirmative on affiche cet attribut dans une balise h2 :

```java
<c:if test="${erreur ne null}"><h2>${erreur}</h2></c:if>
```

::: info

NB : le mot clé `ne` signifie « not equals ». Il rend la condition du test plus lisible. Il existe également : `eq`, `gt`, `lt`, `ge` et `le`.

:::

`<c:forEach>` pour parcourir une collection. Cette balise doit obligatoirement avoir deux attributs `items` et `var`. L’attribut `items` correspond à la collection à parcourir. L’attribut `var` correspond au nom de la variable de boucle i.e. la variable locale à la boucle.

<u>**_Exemple 1_**</u> : on parcourt une liste d’objets de type Utilisateur nommée utilisateurs, la variable de boucle se nomme utilisateur.

```java
<ul>
<c:forEach items="${utilisateurs}" var="utilisateur">
    <li>${utilisateur.prenom}</li>
</c:forEach>
</ul>
```

<u>**_Exemple 2_**</u> : on parcourt une liste d’objet de type Ville nommée villes, la variable de boucle se nomme ville.

```java
<select name="ID_VILLE">
<c:forEach items="${villes}" var="ville">
<option value="${ville.id}">${ville.nom}</option> </c:forEach>
</select>
```

<u>**_Exemple 3_**</u> : on parcourt une liste d’objet de type Ville nommée villes, la variable de boucle se nomme ville. La balise `forEach` déclare une variable compteur qui s’auto- incrémente à chaque itération :

```java
<select name="ID_VILLE">
<c:forEach items="${villes}" var="ville" varStatus="compteur">
<option value="${ville.id}">${compteur.index} : $ {ville.nom}</option>
</c:forEach>
</select>
```

<u>**_Exemple 4_**</u> : on fait évoluer un compteur allant de 1 à nbSemaines. A chaque itération, le compteur est incrémenté :

```java
<c:forEach var="i" begin="1" end="${nbSemaines}" step="1"> ${i}
</c:forEach>
```

`<c:choose>`, `<c:when>` et `<c:otherwise>` pour les branchements complexes <u>**_Exemple_**</u> :

```java
<c:choose>
<c:when test="${article.stock<5 && article.stock>0}"> stock faible</c:when>
<c:when test="${article.stock==0}">
stock épuisé</c:when>
<c:otherwise>stock disponible</c:otherwise> </c:choose>
```

`<c:set>` pour définir des variables locales <u>**_Exemple_**</u> :

```java
<c:set var="emoji" value="&#x1F7E0;"/>
```

Pour bénéficier des balises de la bibliothèque JSP de Spring, ajouter la directive suivante dans la JSP :

```java
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
```

Grâce à cette bibliothèque de balises, l’écriture du formulaire HTML est simplifiée :
`<form:form>` pour ajouter un formulaire HTML dans lequel un objet métier sera injecté. Cet objet métier est désigné « model attribute ».
Exemple : on ajoute un formulaire qui reçoit un objet métier utilisateur. Les données seront envoyées dans le corps de la requête HTTP car l’attribut method a la valeur post. En cliquant sur le bouton d’inscription, les données seront envoyées à l’URL inscription

```java
<form:form modelAttribute="utilisateur" action="inscription" method="post">
```

`<form:label>` pour ajouter une étiquette
<u>**_Exemple_**</u> : on ajoute une étiquette associé à l’adresse email de l’utilisateur :

```java
<form:label path="email">Email</form:label>
```

`<form:input>` pour ajouter un champ de saisie
<u>**_Exemple_**</u> : on ajoute un champ de saisie qui correspond à l’adresse email de l’utilisateur :

```java
<form:input path="email" />
```

`<form:password>` pour ajouter un champ de saisie de type password
<u>**_Exemple_**</u> : on ajoute un champ de saisie qui correspond au mot de passe de l’utilisateur :

```java
<form:password path="motDePasse" />
```

`<form:errors>` pour ajouter un espace dans lequel Spring pourra afficher les erreurs de validation obtenues en essayant de valider les données saisies sur le formulaire avec les contraintes de validation exprimées dans la classe métier Utilisateur
<u>**_Exemple_**</u> :

```java
<form:errors path="email" cssClass="erreur" />
```

`<form:select>` pour ajouter une liste déroulante <u>**_Exemple_**</u> :

```java
<form:select path="ville">
```

`<form:option>` pour ajouter une option à une liste déroulante <u>**_Exemple_**</u> :

```java
<form:option value="">Merci de choisir une ville</form:option>
```

`<form:options>` pour ajouter une collection d’options à une liste déroulante
<u>**_Exemple_**</u> : on demande à Spring de créer une balise option pour chaque objet de la liste villes. La valeur de l’option contiendra l’id de la ville. L’option affichera le nom de la ville :

```java
<form:options items="${villes}" itemValue="id" itemLabel="nom"></form:options>
```

`<form:button>` pour ajouter un bouton au formulaire <u>**_Exemple_**</u> :

```java
<form:button>Enregistrer</form:button>
```
