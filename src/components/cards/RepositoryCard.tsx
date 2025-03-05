'use client';

type RepositoryCardProps = {
  url: string;
  name: string;
  stars: number;
  isForked: boolean;
  lastUpdated: string;
};

export default function RepositoryCard(props: RepositoryCardProps) {
  return (
    <a
      href={props.url}
      target="_blank"
      className="block max-w-full p-6 bg-white shadow-md min-h-40 sm:min-h-32 w-2xl rounded-xl"
    >
      <div className="flex flex-col items-center justify-between mb-4 sm:mb-0 sm:flex-row">
        <div className="mb-4">
          <div className="flex items-center justify-center gap-1 sm:justify-start">
            <span className="font-bold tracking-wide uppercase">Repository:</span>
            <span>{props.name}</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-xs italic leading-none sm:justify-start text-muted">
            <span className="font-semibold">last updated:</span>
            <span>{new Date(props.lastUpdated).toLocaleString()}</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="block -mt-1 text-xl leading-none">⭐</span>
          <span className="flex items-center justify-center h-8 px-2 py-1 text-gray-600 bg-gray-200 border-2 border-gray-400 rounded min-w-8">
            {props.stars}
          </span>
        </div>
      </div>
      {props.isForked && (
        <div className="px-2 py-0 mx-auto text-xs text-blue-600 bg-blue-200 border-2 border-blue-600 rounded-lg sm:mx-0 w-max">
          forked
        </div>
      )}
    </a>
  );
}
