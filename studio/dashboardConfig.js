export default {
  widgets: [
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
                  buildHookId: '60dd6f95223a0f970c72f230',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-k1qcocko',
                  apiId: '0622d20f-a21a-433c-b79f-42efc3e1e389'
                },
                {
                  buildHookId: '60dd6f95e047ffa01c2acae3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gyo3ap3v',
                  apiId: '5a64bb93-e11a-4c12-9baa-b88e442dfb2f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jackconev/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gyo3ap3v.netlify.app', category: 'apps'}
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
