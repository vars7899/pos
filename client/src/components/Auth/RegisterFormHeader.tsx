interface RegisterFormHeaderProps {
  data: { title: string; description: string; body: string };
}

export const RegisterFormHeader = (props: RegisterFormHeaderProps) => {
  return (
    <div className="flex flex-col pb-4">
      <p className="text-2xl text-zinc-950 mb-2 capitalize">{props.data.title}</p>
      <p className="text-lg text-zinc-600">{props.data.description}</p>
    </div>
  );
};
