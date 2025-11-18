interface Props {
  title: string;
  subtitle?: string;
}
export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <h2 className="text-2xl font-bold text-center py-6">{title}</h2>
  );
}
