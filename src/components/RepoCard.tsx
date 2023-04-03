import { FunctionComponent, memo, useMemo } from "react";
import { IRepo } from "../models/models";
import { githubActions } from "../store/github/github.slice";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../store";

interface RepoCardProps {
  repo: IRepo;
}

const RepoCard: FunctionComponent<RepoCardProps> = ({ repo }) => {
  const { addFavorite, removeFavorite } = useActions();

  const { favorities } = useAppSelector((state) => state.github);

  const onAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addFavorite(repo.html_url);
  };

  const onRemoveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    removeFavorite(repo.html_url);
  };

  const inSelected = useMemo(() => {
    return !favorities.includes(repo.html_url);
  }, [favorities, repo]);

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>
        <div className="flex gap-2 mt-2">
          <button
            disabled={!inSelected}
            onClick={onAddClick}
            className={`py-2 px-4 bg-yellow-400 w-full rounded hover:shadow-md transition-all ${
              !inSelected ? "opacity-20" : "opacity-100"
            }`}
          >
            Add
          </button>
          <button
            onClick={onRemoveClick}
            disabled={inSelected}
            className={`py-2 px-4 rounded bg-red-400 w-full hover:shadow-md transition-all ${
              inSelected ? "opacity-20" : "opacity-100"
            }`}
          >
            Remove
          </button>
        </div>
      </a>
    </div>
  );
};

export default memo(RepoCard);
