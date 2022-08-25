export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "about_message",
      title: "About message",
      type: "string",
    },
    {
      name: "technology",
      title: "Tech",
      type: "array",
      of: [
        {
          type: "tech",
        },
      ],
    },
    {
      name: "certificate",
      title: "Certificate",
      type: "array",
      of: [
        {
          type: "cert",
        },
      ],
    },
  ],
};
