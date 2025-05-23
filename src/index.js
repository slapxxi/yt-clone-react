function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Content />
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <Logo />
      <Button className="header__btn-search">
        <Icon name="search" />
      </Button>
      <Button>
        <Avatar href="public/avatar.jpg" />
      </Button>
    </header>
  );
}

function Avatar() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <image
        href="public/dude.jpg"
        width="24"
        height="24"
        clipPath="url(#clip-circle)"
      />
    </svg>
  );
}

function Button(props) {
  const { className, ...rest } = props;
  return (
    <button className={`btn ${className}`} {...rest}>
      {props.children}
    </button>
  );
}

function Icon(props) {
  const { className, name, x, y, ...rest } = props;
  const iconId = `#icon-${name}`;
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={`icon ${className ?? ""}`}
      {...rest}
    >
      <use
        href={iconId}
        width="24"
        height="24"
        fill="currentColor"
        x={x}
        y={y}
      />
    </svg>
  );
}

function Logo() {
  return (
    <a href="/">
      <img src="public/yt-logo.svg" alt="YT logo" />
    </a>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <NavList>
        <NavListItem>
          <Link>
            <Icon name="home" />
            <span>Home</span>
          </Link>
        </NavListItem>
      </NavList>
      <NavList>
        <NavListItem>
          <Link>
            <Icon name="flame" />
            <span>Trending</span>
          </Link>
        </NavListItem>
      </NavList>
      <NavList>
        <NavListItem>
          <Link>
            <Icon name="stack" y={10} />
            <span>Subscriptions</span>
          </Link>
        </NavListItem>
      </NavList>
      <NavList>
        <NavListItem>
          <Link>
            <Icon name="folder" />
            <span>Library</span>
          </Link>
        </NavListItem>
      </NavList>
    </aside>
  );
}

function Link(props) {
  const { children } = props;
  return (
    <a href="#" className="link">
      {children}
    </a>
  );
}

function NavList(props) {
  const { children } = props;
  return <ul className="navlist">{children}</ul>;
}

function NavListItem(props) {
  const { children, className, ...rest } = props;
  return (
    <li className={`navlist__item ${className}`} {...rest}>
      {children}
    </li>
  );
}

function Content() {
  return <main className="content"></main>;
}

function Title(props) {
  const { children, size = "sm", level = 2 } = props;
  const Tag = `h${level}`;
  return <Tag className={`title title_${size}`}>{children}</Tag>;
}

ReactDOM.render(<App />, document.getElementById("App"));
