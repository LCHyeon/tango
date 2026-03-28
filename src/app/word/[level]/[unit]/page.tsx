import { useParams } from "@tanstack/react-router";
import { WORDS } from "@/constants/words";
import { ROUTES } from "@/constants/route";

const WordUnitPage = () => {
  const { level, unit } = useParams({
    from: ROUTES.WordUnit,
  });

  const words = WORDS[level as keyof typeof WORDS].units[unit as string];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-foreground">
        {level} - {unit}
      </h2>

      {words.map((w) => (
        <div
          key={w.id}
          className="p-4 border border-border rounded-xl bg-card flex flex-col gap-3"
        >
          <div className="flex justify-between">
            <span className="font-semibold text-lg text-primary">
              {w.japanese}
            </span>
            <span className="text-sm text-muted-foreground">{w.reading}</span>
          </div>

          <div>
            {w.meanings.map((m, i) => (
              <p key={i} className="text-foreground">
                {i + 1}. {m}
              </p>
            ))}
          </div>

          <div>
            {w.examples.map((ex, i) => (
              <p key={i} className="text-xs text-muted-foreground">
                - {ex}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WordUnitPage;
