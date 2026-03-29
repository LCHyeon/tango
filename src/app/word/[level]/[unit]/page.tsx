import { useParams } from "@tanstack/react-router";
import { WORDS } from "@/constants/words";
import { ROUTES } from "@/constants/route";
import { splitIntoUnits } from "@/lib/utils";
import { useWordSettingStore } from "@/stores/word-setting.store";

const WordUnitPage = () => {
  const { level, unit } = useParams({ from: ROUTES.WordUnit });

  const unitSize = useWordSettingStore((s) => s.unitSize);
  const words = WORDS[level as keyof typeof WORDS].words;
  const units = splitIntoUnits(words, unitSize);
  const currentUnit = units[Number(unit)];

  if (!currentUnit) {
    return <div className="p-4">존재하지 않는 유닛입니다.</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-foreground">
        {level} - UNIT {Number(unit) + 1}
      </h2>

      {currentUnit.map((w) => (
        <div
          key={w.id}
          className="
            p-4 border border-border rounded-xl bg-card
            flex flex-col gap-3
          "
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
