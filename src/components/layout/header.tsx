type HeaderProps = {
  title?: string;
};

const Header = ({ title = "Tango" }: HeaderProps) => {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-md px-5 py-4">
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
    </header>
  );
};

export default Header;