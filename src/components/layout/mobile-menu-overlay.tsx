import { X } from "lucide-react";
import { Switch } from "@/components/ui/switch";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenuOverlay = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background md:hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b">
        <span className="font-semibold">메뉴</span>
        <button onClick={onClose}>
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="p-5 flex flex-col gap-6">
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
  );
};

export default MobileMenuOverlay;