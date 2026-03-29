import { useParams, useNavigate } from "@tanstack/react-router";
import { WORDS } from "@/constants/words";
import { ROUTES } from "@/constants/route";
import { splitIntoUnits } from "@/lib/utils";
import { useWordSettingStore } from "@/stores/word-setting.store";

const WordLevelPage = () => {
  const { level } = useParams({ from: ROUTES.WordLevel });
  const navigate = useNavigate();

  const unitSize = useWordSettingStore((s) => s.unitSize);
  const words = WORDS[level as keyof typeof WORDS].words;
  const units = splitIntoUnits(words, unitSize);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-foreground">{level} 단어장</h2>

      {units.map((unitWords, index) => (
        <div
          key={index}
          className="
            p-5 border border-border rounded-xl bg-card
            cursor-pointer flex justify-between items-center
            transition-all duration-200
            hover:-translate-y-0.5 hover:shadow-md
          "
          onClick={() =>
            navigate({
              to: ROUTES.WordUnit,
              params: { level, unit: String(index) },
            })
          }
        >
          <span className="text-lg font-semibold text-foreground">
            UNIT {index + 1}
          </span>

          <span className="text-sm text-primary font-medium">
            {unitWords.length}개
          </span>
        </div>
      ))}
    </div>
  );
};

export default WordLevelPage;
