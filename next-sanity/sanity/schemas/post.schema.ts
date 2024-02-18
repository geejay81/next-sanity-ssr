const post = {
    name: 'post',
    title: 'Blog Posts',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 }
          },
          {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
          },
          {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
              {
                type: 'block',
              },
              {
                type: 'image',
                options: {hotspot: true}
              },
              {
                type: 'code',
                title: 'Code'
              }
            ],
          },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
}

export default post;