import ContributorCard from '@/components/cards/ContributorCard';

export default function Home() {
  return (
    <main>
      <ContributorCard imageUrl="/dummy.png" repoUrl="" name="balintnemeth" tag="@github" contributions={123} />
    </main>
  );
}
