export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "project_name",
      title: "Project Name",
      type: "string",
    },
    {
      name: "demo_link",
      title: "Demo Link",
      type: "string",
    },
    {
      name: "message",
      title: "Message",
      type: "string",
    },
    {
      name: "priority",
      title: "Priority Number",
      type: "number",
    },
    {
      name: "github_link",
      title: "Github Link",
      type: "string",
    },
    {
      name: "project_img",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tech",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
