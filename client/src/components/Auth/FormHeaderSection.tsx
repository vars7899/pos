interface FormHeaderSectionProps {
  data: { title: string; description: string; body: string };
}

const FormHeaderSection = (props: FormHeaderSectionProps) => {
  return (
    <div className="flex flex-col pb-6">
      <p className="text-4xl text-zinc-950 mb-4 capitalize">{props.data.title}</p>
      <p className="text-xl text-zinc-600">{props.data.description}</p>
    </div>
  );
};

export default FormHeaderSection;
