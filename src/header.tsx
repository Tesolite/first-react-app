const Header = (props: { name: string; age?: number }) => {
  if (props.age) {
    return (
      <header className="flex">
        Hello {props.name}! You are {props.age} years old!
      </header>
    );
  }
  return <header className="flex">Hello {props.name}!</header>;
};
export default Header;
