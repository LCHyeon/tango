import LevelCard from "@/components/level-card";
import { ROUTES } from "@/constants/route";
import { WORDS } from "@/constants/words";
import { useNavigate } from "@tanstack/react-router";

const WordPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-foreground">단어장</h2>

      {Object.entries(WORDS).map(([level, data]) => {
        const total = Object.values(data.units).flat().length;

        return (
          <LevelCard
            key={level}
            level={level}
            total={total}
            learned={0}
            onClick={() =>
              navigate({ to: ROUTES.WordLevel, params: { level } })
            }
          />
        );
      })}
    </div>
  );
};

export default WordPage;
