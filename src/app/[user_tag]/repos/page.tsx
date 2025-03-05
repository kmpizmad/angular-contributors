import BackButton from '@/components/common/BackButton';
import RepositoryList from '@/views/RepositoryList';

export default function UserRepositories({ params }: { params: { user_tag: string } }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-body">{params.user_tag}&apos;s Repositories</h1>
        <BackButton />
      </div>
      <hr className="mt-4 mb-6 bg-primary-border" />
      <RepositoryList tag={params.user_tag} />
    </div>
  );
}
