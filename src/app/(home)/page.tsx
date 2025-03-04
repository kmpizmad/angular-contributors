import ContributorList from '@/views/ContributorList';

export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-body">Top Contributors</h1>
      <hr className="mt-4 mb-6 bg-primary-border" />
      <ContributorList />
    </main>
  );
}
