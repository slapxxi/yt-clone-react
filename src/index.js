function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Content />
    </>
  );
}

function Content() {
  return (
    <main className="content">
      <section>
        <NavList className="video-list">
          <NavListItem>
            <Link>
              <VideoCard
                src="public/cover.jpg"
                duration="2:30"
                views="80k"
                title="A Brief History of Creation"
              />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link>
              <VideoCard
                src="public/cover2.jpg"
                duration="8:00"
                views="123k"
                title="Selecting the Right Hotel"
              />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link>
              <VideoCard
                src="public/cover3.jpg"
                duration="6:40"
                views="11k"
                title="Asteroids"
              />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link>
              <VideoCard
                src="public/cover4.jpg"
                duration="6:40"
                views="11k"
                title="Telescopes 101"
              />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link>
              <VideoCard
                src="public/cover5.jpg"
                duration="6:40"
                views="11k"
                title="Telescopes 101"
              />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link>
              <VideoCard
                src="public/cover6.jpg"
                duration="6:40"
                views="11k"
                title="Telescopes 101"
              />
            </Link>
          </NavListItem>
        </NavList>
      </section>

      <section className="home-recommended">
        <Title size="lg" className="home-recommended__title">
          Recommended
        </Title>
        <NavList className="video-list">
          <NavListItem>
            <Link>
              <VideoCard
                src="public/cover7.jpg"
                duration="2:30"
                views="80k"
                title="A Brief History of Creation"
              />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link>
              <VideoCard
                src="public/cover8.jpg"
                duration="8:00"
                views="123k"
                title="Selecting the Right Hotel"
              />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link>
              <VideoCard
                src="public/cover9.jpg"
                duration="6:40"
                views="11k"
                title="Asteroids"
              />
            </Link>
          </NavListItem>
        </NavList>
      </section>

      <section className="home-recommended">
        <header className="section-header">
          <Avatar src="public/fooddrink.jpg" />
          <Title size="lg" className="home-recommended__title">
            Food &amp; Drink
          </Title>
        </header>

        <NavList className="video-list">
          <NavListItem>
            <Link>
              <VideoCard
                src="public/cover10.jpg"
                duration="2:30"
                views="80k"
                title="Astronomy or Astrology"
              />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link>
              <VideoCard
                src="public/cover11.jpg"
                duration="8:00"
                views="123k"
                title="Advertising Outdoors"
              />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link>
              <VideoCard
                src="public/cover12.jpg"
                duration="6:40"
                views="11k"
                title="Radio Astronomy"
              />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link>
              <VideoCard
                src="public/cover13.jpg"
                duration="6:40"
                views="45k"
                createdAt="2 months ago"
                title="A Good Autoresponder"
              />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link>
              <VideoCard
                src="public/cover14.jpg"
                duration="1:56"
                views="86k"
                createdAt="7 days ago"
                title="Baby Monitoring Technology"
              />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link>
              <VideoCard
                src="public/cover15.jpg"
                duration="8:56"
                views="8k"
                createdAt="3 days ago"
                title="Asteroids"
              />
            </Link>
          </NavListItem>
        </NavList>
      </section>
    </main>
  );
}

function VideoCard(props) {
  const {
    className,
    title,
    src,
    alt,
    views = "80k",
    createdAt = "3 days ago",
    author = "Dollie Blair",
    duration = "2:30",
    ...rest
  } = props;
  return (
    <figure className={`video-card ${className ?? ""}`} {...rest}>
      <div className="relative">
        <img src={src} alt={alt} className="video-card__cover" />
        <time datetime="PT2M30S" className="video-card__duration">
          {duration}
        </time>
      </div>
      <Title as="figcaption" className="video-card__title">
        {title}
      </Title>
      <div className="video-card__info">
        <div>
          <span>{views} views</span>
          <Icon name="separator" size={2} />
          <time datetime="2022-01-01">{createdAt}</time>
        </div>
        <a rel="author">{author}</a>
      </div>
    </figure>
  );
}

function Header() {
  return (
    <header className="header">
      <Button className="header__menu">
        <Icon name="menu" />
      </Button>
      <Logo />
      <Search className="header__search" />
      <Button className="header__btn-search">
        <Icon name="search" />
      </Button>
      <div className="header__actions">
        <Button>
          <Icon name="camera" />
        </Button>
        <Button>
          <Icon name="grid" />
        </Button>
        <Button>
          <Icon name="bell">
            <Notification>3</Notification>
          </Icon>
        </Button>
      </div>
      <Button>
        <Avatar src="public/dude.jpg" />
      </Button>
    </header>
  );
}

function Notification(props) {
  const { children, ...rest } = props;
  return (
    <svg
      className="notification"
      width="16"
      height="16"
      x="calc(100% - 8px)"
      y="-8"
      {...rest}
    >
      <circle cx="8" cy="8" r="9" stroke="var(--theme-bg)" strokeWidth="2" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="notification__text"
      >
        {children}
      </text>
    </svg>
  );
}

function Search(props) {
  const { className, ...rest } = props;
  return (
    <div className={`input-search ${className ?? ""}`} {...rest}>
      <input id="search" type="search" placeholder="Search" />
      <label htmlFor="search">
        <Icon name="search" size={19} />
      </label>
    </div>
  );
}

function Avatar(props) {
  const { src = "public/dude.jpg", ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...rest}>
      <image href={src} width="24" height="24" clipPath="url(#clip-circle)" />
    </svg>
  );
}

function Button(props) {
  const { className, ...rest } = props;
  return (
    <button className={`btn ${className ?? ""}`} {...rest}>
      {props.children}
    </button>
  );
}

function Icon(props) {
  const { className, name, x, y, size = 20, children, ...rest } = props;
  const iconId = `#icon-${name}`;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
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
      {children}
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
      <NavList className="sidebar__navlist">
        <NavListItem>
          <Link className="sidebar__navlist-link sidebar__navlist-link_active">
            <Icon name="home" className="sidebar__navlist-icon" />
            <span>Home</span>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link className="sidebar__navlist-link">
            <Icon name="flame" className="sidebar__navlist-icon" />
            <span>Trending</span>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link className="sidebar__navlist-link">
            <Icon name="stack" className="sidebar__navlist-icon" />
            <span>Subscriptions</span>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link className="sidebar__navlist-link">
            <Icon name="folder" className="sidebar__navlist-icon" />
            <span>Library</span>
          </Link>
        </NavListItem>
      </NavList>
    </aside>
  );
}

function Link(props) {
  const { children, className, ...rest } = props;
  return (
    <a href="#" className={`link ${className}`} {...rest}>
      {children}
    </a>
  );
}

function NavList(props) {
  const { children, className } = props;
  return <ul className={`navlist ${className}`}>{children}</ul>;
}

function NavListItem(props) {
  const { children, className, ...rest } = props;
  return (
    <li className={`navlist__item ${className ?? ""}`} {...rest}>
      {children}
    </li>
  );
}

function Title(props) {
  const { children, className, size = "sm", level = 2, as } = props;
  const tag = `h${level}`;
  const Component = as || tag;
  return (
    <Component className={`title title_${size} ${className ?? ""}`}>
      {children}
    </Component>
  );
}

ReactDOM.render(<App />, document.getElementById("App"));
