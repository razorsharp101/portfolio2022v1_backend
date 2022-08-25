export default {
    name: 'cert',
    title: 'Certificate',
    type: 'object',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'link',
        title: 'Link',
        type: 'string',
      },
      {
        name: 'img',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  