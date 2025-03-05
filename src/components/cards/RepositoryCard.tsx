'use client';

type RepositoryCardProps = {
  name: string;
  stars: number;
  isForked: boolean;
  lastUpdated: string;
};

export default function RepositoryCard(props: RepositoryCardProps) {
  return (
    <div className="max-w-full p-6 bg-white shadow-md min-h-32 w-2xl rounded-xl">
      <div className="flex items-center justify-between">
        <div className="mb-4">
          <div className="flex items-center gap-1">
            <span className="font-bold tracking-wide uppercase">Repository:</span>
            <span>{props.name}</span>
          </div>
          <div className="flex items-center gap-1 text-xs italic leading-none text-muted">
            <span className="font-semibold">last updated:</span>
            <span>{new Date(props.lastUpdated).toLocaleString()}</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="block -mt-1 text-xl leading-none">⭐</span>
          <span className="flex items-center justify-center w-8 h-8 text-gray-600 bg-gray-200 border-2 border-gray-400 rounded">
            {props.stars}
          </span>
        </div>
      </div>
      {props.isForked && (
        <div className="px-2 py-0 text-xs text-blue-600 bg-blue-200 border-2 border-blue-600 rounded-lg w-max">
          forked
        </div>
      )}
    </div>
  );
}
