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
      <Button className="header__menu">
        <Icon name="menu" />
      </Button>
      <Logo />
      <Search className="header__search lg:ml-50" />
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

function Content() {
  return (
    <main className="content">
      <section className="home-section">
        <section className="section-header lg:flex hidden">
          <Avatar src="public/gussie.jpg" size="lg" />
          <Title size="lg">Dollie Blair</Title>
        </section>
        <NavList className="video-list">
          <NavListItem className="video-list__item">
            <Link>
              <VideoCard
                src="public/cover.jpg"
                duration="2:30"
                views="80k"
                title="A Brief History of Creation"
              />
            </Link>
          </NavListItem>
          <NavListItem className="video-list__item">
            <Link>
              <VideoCard
                src="public/cover2.jpg"
                duration="8:00"
                views="123k"
                title="Selecting the Right Hotel"
              />
            </Link>
          </NavListItem>
          <NavListItem className="video-list__item">
            <Link>
              <VideoCard
                src="public/cover3.jpg"
                duration="6:40"
                views="11k"
                title="Asteroids"
              />
            </Link>
          </NavListItem>
          <NavListItem className="video-list__item">
            <Link>
              <VideoCard
                src="public/cover4.jpg"
                duration="6:40"
                views="11k"
                title="Telescopes 101"
              />
            </Link>
          </NavListItem>
          <NavListItem className="video-list__item">
            <Link>
              <VideoCard
                src="public/cover5.jpg"
                duration="6:40"
                views="11k"
                title="Telescopes 101"
              />
            </Link>
          </NavListItem>
          <NavListItem className="video-list__item">
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

      <section className="home-section">
        <header className="section-header">
          <Title size="lg" className="home-section__title">
            Recommended
          </Title>
          <div className="content-extra ml-auto lg:flex items-center gap-40">
            <div className="flex items-center gap-10">
              <Button type="round">
                <Icon name="chevron-left" size={11}></Icon>
              </Button>
              <Button type="round">
                <Icon name="chevron-right" size={11}></Icon>
              </Button>
            </div>
          </div>
        </header>
        <NavList className="video-list">
          <NavListItem className="video-list__item">
            <Link>
              <VideoCard
                src="public/cover7.jpg"
                duration="2:30"
                views="80k"
                title="A Brief History of Creation"
                size="lg"
              />
            </Link>
          </NavListItem>
          <NavListItem className="video-list__item">
            <Link>
              <VideoCard
                src="public/cover8.jpg"
                duration="8:00"
                views="123k"
                title="Selecting the Right Hotel"
                size="lg"
              />
            </Link>
          </NavListItem>
          <NavListItem className="video-list__item">
            <Link>
              <VideoCard
                src="public/cover9.jpg"
                duration="6:40"
                views="11k"
                title="Asteroids"
                size="lg"
              />
            </Link>
          </NavListItem>
        </NavList>
      </section>

      <section className="home-section">
        <header className="section-header">
          <Avatar src="public/food.jpg" size="lg" className="content-extra" />
          <Title size="lg" className="home-section__title">
            Food &amp; Drink
          </Title>
          <small className="small content-extra">
            Recommended channel for you
          </small>
          <div className="content-extra ml-auto lg:flex items-center gap-40">
            <Button type="primary">Subscribe 2.3m</Button>
            <div className="flex items-center gap-10">
              <Button type="round">
                <Icon name="chevron-left" size={11}></Icon>
              </Button>
              <Button type="round">
                <Icon name="chevron-right" size={11}></Icon>
              </Button>
            </div>
          </div>
        </header>

        <NavList className="video-list">
          <NavListItem className="video-list__item">
            <Link>
              <VideoCard
                src="public/cover10.jpg"
                duration="2:30"
                views="80k"
                title="Astronomy or Astrology"
              />
            </Link>
          </NavListItem>
          <NavListItem className="video-list__item">
            <Link>
              <VideoCard
                src="public/cover11.jpg"
                duration="8:00"
                views="123k"
                title="Advertising Outdoors"
              />
            </Link>
          </NavListItem>
          <NavListItem className="video-list__item">
            <Link>
              <VideoCard
                src="public/cover12.jpg"
                duration="6:40"
                views="11k"
                title="Radio Astronomy"
              />
            </Link>
          </NavListItem>
          <NavListItem className="video-list__item">
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
          <NavListItem className="video-list__item">
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
          <NavListItem className="video-list__item">
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
    size = "sm",
    views = "80k",
    createdAt = "3 days ago",
    author = "Dollie Blair",
    duration = "2:30",
    ...rest
  } = props;
  return (
    <figure className={`video-card ${className ?? ""}`} {...rest}>
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className={`video-card__cover video-card__cover_${size}`}
        />
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
  const { className, src = "public/dude.jpg", size = "sm", ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      className={`avatar avatar_${size} ${className ?? ""}`}
      {...rest}
    >
      <image
        href={src}
        width="24"
        height="24"
        clipPath="url(#clip-circle)"
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  );
}

function Button(props) {
  const { className, type = "def", ...rest } = props;
  return (
    <button className={`btn ${className ?? ""} btn_${type}`} {...rest}>
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
        <NavListItem className="sidebar__navlist-spacer">
          <Link className="sidebar__navlist-link">
            <Icon name="folder" className="sidebar__navlist-icon" />
            <span>Library</span>
          </Link>
        </NavListItem>
        <NavListItem className="sidebar-extra">
          <Link className="sidebar__navlist-link">
            <Icon name="scroll" className="sidebar__navlist-icon" />
            <span>History</span>
          </Link>
        </NavListItem>
        <NavListItem className="sidebar-extra">
          <Link className="sidebar__navlist-link">
            <Icon name="clock" className="sidebar__navlist-icon" />
            <span>Watch Later</span>
          </Link>
        </NavListItem>
        <NavListItem className="sidebar-extra">
          <Link className="sidebar__navlist-link">
            <Icon name="star" className="sidebar__navlist-icon" />
            <span>Favorites</span>
          </Link>
        </NavListItem>
        <NavListItem className="sidebar-extra">
          <Link className="sidebar__navlist-link">
            <Icon name="heart" className="sidebar__navlist-icon" />
            <span>Liked Videos</span>
          </Link>
        </NavListItem>
        <NavListItem className="sidebar-extra">
          <Link className="sidebar__navlist-link">
            <Icon name="musical-note" className="sidebar__navlist-icon" />
            <span>Music</span>
          </Link>
        </NavListItem>
        <NavListItem className="sidebar-extra">
          <Link className="sidebar__navlist-link">
            <Icon name="gamepad" className="sidebar__navlist-icon" />
            <span>Games</span>
          </Link>
        </NavListItem>
        <NavListItem className="sidebar-extra">
          <Link className="sidebar__navlist-link">
            <Icon name="chevron-down" className="sidebar__navlist-icon" />
            <span>Show More</span>
          </Link>
        </NavListItem>
      </NavList>

      <section className="sidebar-extra sidebar-section">
        <Title className="mb-30">Subscriptions</Title>
        <NavList className="sidebar__navlist gap-20">
          <NavListItem>
            <Link className="sidebar__navlist-link sidebar__navlist-link">
              <Avatar
                src="public/gussie.jpg"
                className="sidebar__navlist-icon"
              />
              <span>Gussie Singleton</span>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link className="sidebar__navlist-link sidebar__navlist-link">
              <Avatar src="public/nora.jpg" className="sidebar__navlist-icon" />
              <span>Nora Francis</span>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link className="sidebar__navlist-link sidebar__navlist-link">
              <Avatar
                src="public/belle.jpg"
                className="sidebar__navlist-icon"
              />
              <span>Belle Briggs</span>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link className="sidebar__navlist-link sidebar__navlist-link">
              <Avatar
                src="public/eunice.jpg"
                className="sidebar__navlist-icon"
              />
              <span>Eunice Cortez</span>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link className="sidebar__navlist-link sidebar__navlist-link">
              <Avatar src="public/emma.jpg" className="sidebar__navlist-icon" />
              <span>Emma Hanson</span>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link className="sidebar__navlist-link sidebar__navlist-link">
              <Avatar src="public/leah.jpg" className="sidebar__navlist-icon" />
              <span>Leah Berry</span>
            </Link>
          </NavListItem>
        </NavList>
      </section>
      <div className="sidebar__settings">
        <Button className="flex gap-10">
          <Icon name="cog" />
          <span className="ml-4">Settings</span>
        </Button>
      </div>
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
