export default function PlaceholderPage({ title }) {
  return (
    <main className="min-w-0 bg-white rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-400">
        This page is empty. Replace this component with your own content.
      </p>
    </main>
  );
}
