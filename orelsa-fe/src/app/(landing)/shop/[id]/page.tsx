interface IProps {
  params: {
    id: string;
  };
}
export default function ShopDetaiils({ params }: IProps) {
  return (
    <div>
      <p>{params.id}</p>
    </div>
  );
}
