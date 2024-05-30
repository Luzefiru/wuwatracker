import Timeline from "@/components/home/timeline";
import { Button } from "@/components/ui/button";

export default function Import() {
  return (
    <div className="flex flex-col h-full w-full p-5 gap-3">
      <Button variant="outline" className="w-[10%] mb-3">
        Back
      </Button>
      <p className="font-semibold text-lg">
        Note: his method is only confirmed to work with Windows 10 and above.
      </p>
      <Timeline />
    </div>
  );
}
