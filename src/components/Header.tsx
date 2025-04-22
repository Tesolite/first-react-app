const Header = (props: { name: string; age?: number }) => {
  return (
    <header className="dark:bg-zinc-800 dark:text-white bg-amber-500 text-black">
      Hello {props.name}!{props.age && ` You are ${props.age} years old!`}
    </header>
  );
};
export default Header;
