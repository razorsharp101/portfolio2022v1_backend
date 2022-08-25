export default {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "superhero",
      title: "Superhero",
      type: "string",
    },
    {
      name: "message",
      title: "Message",
      type: "string",
    },
    {
      name: "imgurl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "socmedlink",
      title: "Socmedlink",
      type: "string",
    },
    {
      name: "background",
      title: "Background",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
