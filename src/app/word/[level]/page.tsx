import { useParams, useNavigate } from "@tanstack/react-router";
import { WORDS } from "@/constants/words";
import { ROUTES } from "@/constants/route";

const formatUnit = (unit: string) => {
  const match = unit.match(/unit(\d+)/i);
  if (!match) return unit;
  return `UNIT ${match[1]}`;
};

const WordLevelPage = () => {
  const { level } = useParams({ from: ROUTES.WordLevel });
  const navigate = useNavigate();

  const units = WORDS[level as keyof typeof WORDS].units;

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-foreground">{level} 단어장</h2>

      {Object.entries(units).map(([unit, words]) => (
        <div
          key={unit}
          className="
            p-5 border border-border rounded-xl bg-card 
            cursor-pointer flex justify-between items-center
            transition-all duration-200
            hover:bg-secondary hover:border-primary
            hover:-translate-y-0.5 hover:shadow-md
          "
          onClick={() =>
            navigate({ to: ROUTES.WordUnit, params: { level, unit } })
          }
        >
          <span className="text-lg font-semibold text-foreground">
            {formatUnit(unit)}
          </span>

          <span className="text-sm text-primary font-medium">
            {words.length}개
          </span>
        </div>
      ))}
    </div>
  );
};

export default WordLevelPage;
