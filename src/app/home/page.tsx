import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">JLPT 단어 학습</h2>
        <p className="text-sm text-neutral-600">
          단어장을 보거나 암기 테스트를 시작하세요
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
          <CardContent className="p-5 flex flex-col gap-4">
            <div>
              <p className="text-xs text-neutral-500">Browse</p>
              <h3 className="text-lg font-semibold">단어장</h3>
              <p className="text-sm text-neutral-600 mt-1">
                JLPT 레벨별 단어를 확인할 수 있어요
              </p>
            </div>

            <Button
              className="w-full"
              onClick={() => navigate({ to: "/words" })}
            >
              단어장 보기
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
          <CardContent className="p-5 flex flex-col gap-4">
            <div>
              <p className="text-xs text-neutral-500">Practice</p>
              <h3 className="text-lg font-semibold">암기 테스트</h3>
              <p className="text-sm text-neutral-600 mt-1">
                범위를 선택하고 랜덤 테스트를 시작하세요
              </p>
            </div>

            <Button
              variant="secondary"
              className="w-full"
              onClick={() => navigate({ to: "/test" })}
            >
              테스트 시작
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
