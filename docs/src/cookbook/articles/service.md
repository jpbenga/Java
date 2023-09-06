# Service

- Écrire les interfaces puis les classes dans le paquetage `service`. Annoter chaque classe service avec le stéréotype Spring `@Service` et demander à Spring l’injection des DAO par l’écriture d’un constructeur ayant en paramètre les objets que Spring doit injecter dans le service.

Exemple:

```java
@Service
public class QuestionServiceImpl implements QuestionService {

    private final QuestionDao questionDao;
    private final EnqueteDao enqueteDao;

    public QuestionServiceImpl(QuestionDao questionDao, EnqueteDao enqueteDao) {
    super();
    this.questionDao = questionDao; this.enqueteDao = enqueteDao;
    }

    @Override
    public Question enregistrerQuestion(Question question) {
    if (questionDao.findByLibelle(question.getLibelle())!=null) {
        throw new QuestionExistanteException(); }
    questionDao.save(question); return question;
    }

    @Override
    public Question recupererQuestion(Long id) {
        return questionDao.findById(id).orElse(null);
    }

    @Override
    @Transactional(readOnly=true)
    public List<Question> recupereQuestions() {
    return questionDao.findAll();
    }
}
```

La méthode d’enregistrement de ce service lève une exception maison (ce qui est bien un des rôles d’un service). L’exception maison existe dans le package exception :

```java
package fr.clelia.fx.enquetes.exception;

public class QuestionException extends RuntimeException {
    private static final long serialVersionUID = 1L;
}

```
