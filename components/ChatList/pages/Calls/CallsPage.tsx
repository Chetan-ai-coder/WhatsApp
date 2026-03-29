import CallsFav from "./CallsFav";
import CallsPreview from "./CallsPreview";

export default function CallsPage() {
  return (
    <div className="flex-1 overflow-y-auto flex flex-col gap-2.5 px-3">
      <CallsFav />
      <div className="flex flex-col gap-2.5">
        <h1 className="text-[15px] font-semibold">Recent</h1>
        <CallsPreview />
        <CallsPreview />
        <CallsPreview />
        <CallsPreview />
        <CallsPreview />
        <CallsPreview />
        <CallsPreview />
        <CallsPreview />
        <CallsPreview />
        <CallsPreview />
        <CallsPreview />
        <CallsPreview />
      </div>
    </div>
  );
}
