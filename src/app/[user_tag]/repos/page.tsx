import BackButton from '@/components/common/BackButton';
import RepositoryList from '@/views/RepositoryList';

type Params = { user_tag: string };

export default async function UserRepositories({ params }: { params: Promise<Params> }) {
  const { user_tag } = await params;

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-body">{user_tag}&apos;s Repositories</h1>
        <BackButton />
      </div>
      <hr className="mt-4 mb-6 bg-primary-border" />
      <RepositoryList tag={user_tag} />
    </div>
  );
}
