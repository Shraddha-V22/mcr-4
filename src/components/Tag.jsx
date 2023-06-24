export default function Tag({ tag = "tag" }) {
  return (
    <button className="rounded-md bg-violet-100 px-2 py-[2px] text-[10px] font-semibold uppercase text-violet-600">
      {tag}
    </button>
  );
}
