import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Java Annotations",
  description: "Memento Annotation Java",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://www.clelia.fr/images/Header.png',
    lastUpdated: {
          text: 'Dernière mise à jour le',
          formatOptions: { 
            dateStyle: 'full',
            timeStyle: 'medium'
          }
        },
    nav: [
      //Faire en sorte que la sidebar affiche les différentes parties de chaque sujet
      { text: 'Accueil', link: '/' },
      {
        text: 'Menu',
        items: [
          { text: 'Annotations Java', link: 'src/annotations/articles/introduction' },
          { text: 'Cookbook', link: 'src/cookbook/articles/introduction' },
          
          // Ajoutez d'autres éléments de menu ici...
        ]
      }
    ],

    sidebar: {
      'src/annotations/':[
        {
        text: 'Annotations',
        items:[
          {text: 'Introduction', link: 'src/annotations/articles/introduction'},
          {text: 'Hibernate', link: 'src/annotations/articles/hibernate'},
          {text: 'Java_lang', link: 'src/annotations/articles/java_lang'},
          {text: 'Spring', link: 'src/annotations/articles/spring'},
          {text: 'Lombok', link: 'src/annotations/articles/lombok'},
          {text: 'Validation', link: 'src/annotations/articles/validation'},
          {text: 'Swagger', link: 'src/annotations/articles/swagger'},
          {text: 'Jackson', link: 'src/annotations/articles/jackson'},
        ],
      
      }
      ],
      'src/cookbook/':[
        {
          text: 'Cookbook',
          items:[
            {text: 'Introduction', link: 'src/cookbook/articles/introduction' },
            {text: 'Spring Initializer', link: 'src/cookbook/articles/spring_initializer' },
            {text: 'Application.properties', link: 'src/cookbook/articles/application_properties' },
            {text: 'Classes business', link: 'src/cookbook/articles/classes_business' },
            {text: 'Dao', link: 'src/cookbook/articles/dao' },
            {text: 'Service', link: 'src/cookbook/articles/service' },
            {text: 'Controlleur', link: 'src/cookbook/articles/controlleur' },
            {text: 'WEB-INF', link: 'src/cookbook/articles/web_inf' },
            {text: 'API Rest', link: 'src/cookbook/articles/api_rest' },
            {text: 'Test', link: 'src/cookbook/articles/test' },
            {text: 'Documentation API', link: 'src/cookbook/articles/documentation' },
            {text: 'Annexes', link: 'src/cookbook/articles/annexes' },
          ]
        }
      ]
      
    }, 

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    docFooter: {
      prev: 'Page précédente',
      next: 'Page Suivante'
    },

  },
  markdown: {
   theme: {
      dark: 'github-dark-dimmed',
      light: 'github-light',
    }
      },
      ignoreDeadLinks: true,
      base: "/Java/"
})
