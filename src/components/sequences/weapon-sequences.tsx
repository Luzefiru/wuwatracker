import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function WeaponSequences() {
  return (
    <Card>
      <CardHeader className="pb-6">
        <CardTitle>Convene History Data</CardTitle>
        <CardDescription>
          Export or change your Convene History URL here.
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="border-t px-6 py-4"></CardFooter>
    </Card>
  );
}
