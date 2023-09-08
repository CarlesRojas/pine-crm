import SignIn from '../auth/SignIn';

export default function Header() {
  return (
    <header className="w-full h-16 flex items-center justify-between px-2">
      <h1 className="text-lg font-semibold">PineCRM</h1>
      <SignIn />
    </header>
  );
}
