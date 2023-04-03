import { FunctionComponent } from "react";
import { useAppSelector } from "../store";

interface FavoritiesPageProps {}

const FavoritiesPage: FunctionComponent<FavoritiesPageProps> = () => {
  const { favorities } = useAppSelector((state) => state.github);

  if (favorities.length === 0) {
    return <p className="text-center">No items</p>;
  }

  return (
    <div className="flex justify-center pt-10 mx-auto items-center w-screen">
      <ul className="list-none">
        {favorities?.map((f) => (
          <li key={f}>
            <a href={f}>{f}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritiesPage;
