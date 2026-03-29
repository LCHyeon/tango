import { Switch } from "@/components/ui/switch";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const PcMenuPopup = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed left-0 right-0 bottom-0 top-16 z-40 hidden md:block"
        onClick={onClose}
      />

      <div className="absolute left-0 top-full mt-2 z-50 w-64 rounded-xl border bg-background shadow-lg p-4 hidden md:block">
        <div className="flex items-center justify-between mb-4">
          <span className="font-semibold">메뉴</span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span>다크 테마</span>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <span>발음기호</span>
            <Switch />
          </div>
        </div>
      </div>
    </>
  );
};

export default PcMenuPopup;
