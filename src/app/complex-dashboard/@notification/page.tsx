import { Card } from "@/app/components/card";
import Link from "next/link";
export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <div>
        <Link className="ml-4 text-pink-800" href="/complex-dashboard/archived">
          Archived
        </Link>
      </div>
    </Card>
  );
}
