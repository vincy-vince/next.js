import { Card } from "@/app/components/card";
import Link from "next/link";
export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <div>
        <Link className="ml-4 text-red-800" href="/complex-dashboard">
          Default
        </Link>
      </div>
    </Card>
  );
}
