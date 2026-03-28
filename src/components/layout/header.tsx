import { ROUTES } from "@/constants/route";
import { useNavigate } from "@tanstack/react-router";

type HeaderProps = {
  title?: string;
};

const Header = ({ title = "Tango" }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="w-full border-b bg-background">
      <div
        onClick={() => navigate({ to: ROUTES.Home })}
        className="mx-auto max-w-md px-5 py-4 cursor-pointer"
      >
        <h1 className="text-lg font-semibold text-primary">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
