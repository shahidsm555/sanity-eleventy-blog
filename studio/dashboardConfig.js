export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebfc9b5496fb530dc1e1f79',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-nmny1sdz',
                  apiId: '89e5954b-15f0-4035-9d4c-f73614407e34'
                },
                {
                  buildHookId: '5ebfc9b5ff64585127195c95',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ydacwqhq',
                  apiId: '67adfe69-1b36-483d-bfb7-a1346ccdf8cb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shahidsm555/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ydacwqhq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
