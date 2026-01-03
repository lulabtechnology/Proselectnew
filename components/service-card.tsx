import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ServiceIconKey } from "@/content/services";
import {
  Wrench,
  Zap,
  Droplets,
  Flame,
  HardHat,
  Building2,
  Shield,
  Award,
  Clock,
  CheckCircle2
} from "lucide-react";

const ICONS: Record<ServiceIconKey, React.ElementType> = {
  Wrench,
  Zap,
  Droplets,
  Flame,
  HardHat,
  Building2,
  Shield,
  Award,
  Clock,
  CheckCircle2
};

export default function ServiceCard({
  title,
  bullets,
  icon
}: {
  title: string;
  bullets: string[];
  icon: ServiceIconKey;
}) {
  const Icon = ICONS[icon];

  return (
    <Card className="h-full overflow-hidden">
      <CardContent className="pt-6">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white">
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <CardTitle className="text-base">{title}</CardTitle>
            <div className="mt-4 flex flex-wrap gap-2">
              {bullets.map((b, i) => (
                <Badge key={i}>{b}</Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
