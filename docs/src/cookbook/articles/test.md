# Test

Ajouter un fichier application.properties dans un nouveau dossier `src/test/resources` Ce fichier peut contenir des propriétés qui configurent une base H2 en mémoire :

```java
spring.datasource.url=jdbc:h2:mem:enquetes_test
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=org.h2.Driver
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.H2Dialect
```

Cette configuration servira exclusivement pendant la phase de tests. Sans la présence du fichier `src/test/resources/application.properties`, Maven utilisera le fichier `src/main/resources/application.properties` pour lancer les tests.

Écrire les tests dans le dossier `src/test/java`
Le package dao accueillera les tests sur les interfaces DAO. Ces classes de test pourront être annotées `@SpringBootTest` ou `@DataJpaTest`.
Le package service accueillera les tests sur les classes de la couche service. Ces classes de test seront annotées `@SpringBootTest`.
Le package controller accueillera les tests sur les classes de la couche controller. Ces classes de test seront annotées `@SpringBootTest`.
