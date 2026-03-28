import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type Props = {
  level: string;
  total: number;
  learned: number;
  onClick: () => void;
};

const LevelCard = ({ level, total, learned, onClick }: Props) => {
  const percent = total === 0 ? 0 : (learned / total) * 100;

  const getStatus = () => {
    if (learned === 0) return "시작 전";
    if (learned === total) return "완료";
    return "학습 중";
  };

  return (
    <Card
      onClick={onClick}
      className="
        rounded-2xl cursor-pointer transition-all duration-200
        border border-border bg-card
        hover:bg-secondary hover:border-primary
        hover:-translate-y-0.5 hover:shadow-md
      "
    >
      <CardContent className="p-5 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{level}</h3>
            <p className="text-xs text-muted-foreground">{getStatus()}</p>
          </div>

          <ChevronRight className="w-5 h-5 text-primary mt-1" />
        </div>

        <p className="text-sm text-muted-foreground">
          {learned} / {total} 단어
        </p>

        <Progress value={percent} className="h-2 bg-secondary" />

        <p className="text-xs text-primary font-medium text-right">
          {Math.round(percent)}%
        </p>
      </CardContent>
    </Card>
  );
};

export default LevelCard;
