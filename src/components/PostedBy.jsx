export default function PostedBy({ username = "name" }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <p className="text-gray-500">Posted by</p>
      <p className="text-violet-600">@{username}</p>
    </div>
  );
}
