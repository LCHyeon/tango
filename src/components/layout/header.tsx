import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import MobileMenuOverlay from "./mobile-menu-overlay";
import PcMenuPopup from "./pc-menu-popup";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full border-b bg-background">
        <div className="mx-auto flex max-w-md items-center justify-between px-5 py-2 relative">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <PcMenuPopup
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
            />
          </div>

          <button
            onClick={() => setIsDark((prev) => !prev)}
            className="p-2 rounded-md hover:bg-muted transition"
          >
            {isDark ? (
              <Sun className="h-5 w-5 cursor-pointer" />
            ) : (
              <Moon className="h-5 w-5 cursor-pointer" />
            )}
          </button>
        </div>
      </header>

      <MobileMenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Header;
