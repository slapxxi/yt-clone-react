function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Content />

      <aside className="upnext">
        <section className="flex justify-between my-10">
          <Title size="lg">Next</Title>
          <div className="flex items-center gap-10">
            <label htmlFor="autoplay" className="uppercase text-10 font-bold">
              Autoplay
            </label>
            <Switch on id="autoplay" />
          </div>
        </section>
        <NavList className="flex flex-col gap-20">
          <NavListItem className="">
            <Link>
              <VideoCard
                src="public/cover10.jpg"
                duration="2:30"
                views="80k"
                title="A Brief History of Creation"
              />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link>
              <VideoCard
                src="public/cover11.jpg"
                duration="8:00"
                views="123k"
                title="Selecting the Right Hotel"
              />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link>
              <VideoCard
                src="public/cover19.jpg"
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
      </aside>
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <Button className="header__menu">
        <Icon name="menu" />
      </Button>
      <Logo className="logo_player" />
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
      <Button className="ml-auto lg:hidden">
        <Icon name="dots" />
      </Button>
      <Button className="hidden lg:block">
        <Avatar src="public/dude.jpg" />
      </Button>
    </header>
  );
}

function Content() {
  return (
    <main className="content content_player">
      <figure className="relative">
        <svg viewBox="0 0 320 180" width="100%" className="lg:rounded">
          <image
            href="public/cover18.jpg"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>

        <div className="player-controls lg:hidden">
          <Button className="shrink-0">
            <Icon name="pause" size={12} />
          </Button>
          <time className="text-10">1:34</time>
          <div className="player-progress w-full">
            <div className="player-progress__track"></div>
          </div>
          <time className="text-10">-10:00</time>
          <Button className="shrink-0">
            <Icon name="volume" size={12} />
          </Button>
        </div>

        <div className="player-controls-hd">
          <div className="flex justify-between">
            <time className="text-16">1:34</time>
            <time className="text-16">-10:00</time>
          </div>
          <div className="player-progress w-full">
            <div className="player-progress__track"></div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-40">
              <Button className="shrink-0">
                <Icon name="pause" size={20} />
              </Button>
              <Button className="shrink-0">
                <Icon name="rewind" size={20} />
              </Button>
              <div className="flex items-center gap-10">
                <Button className="shrink-0">
                  <Icon name="volume" size={20} />
                </Button>
                <div className="player-volume">
                  <div></div>
                </div>
              </div>
            </div>
            <div className="color-em flex gap-20">
              <Button className="shrink-0">
                <Icon name="cc" size={20} />
              </Button>
              <Button className="shrink-0">
                <Icon name="cog" size={20} />
              </Button>
              <Button className="shrink-0">
                <Icon name="theater" size={20} />
              </Button>
              <Button className="shrink-0">
                <Icon name="fullscreen" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </figure>

      <header className="flex flex-col gap-10 my-10 lg:my-20 lg:flex-row lg:items-end lg:justify-between w-full">
        <div className="flex flex-col px-16 lg:p-0">
          <div className="flex justify-between items-center">
            <Title className="lg:text-36">
              Dude You'Re Getting A Telescope
            </Title>
            <Button className="lg:hidden">
              <Icon name="chevron-down" />
            </Button>
          </div>
          <span className="color-em">123k views</span>
        </div>
        <div className="flex gap-30 overflow-auto pl-16 py-10 lg:p-0 lg:gap-10">
          <Button type="secondary">
            <Icon name="like" className="color-em" />
            <span>123k</span>
          </Button>
          <Button type="secondary" className="shrink-0">
            <Icon name="dislike" className="color-em" />
            <span>23k</span>
          </Button>
          <Button type="secondary" className="shrink-0">
            <Icon name="share" className="color-em" />
            <span>Share</span>
          </Button>
        </div>
      </header>

      <section className="subscribe flex justify-between items-center w-full">
        <div className="flex gap-10 items-center w-full lg:items-start">
          <Avatar src="public/food.jpg" size="lg" className="shrink-0" />
          <div className="flex flex-col gap-10 max-w-prose">
            <div className="flex flex-col gap-5 lg:gap-10">
              <Title>Food & Drink</Title>
              <span className="color-em text-10 lg:hidden">
                245k subscribed
              </span>
              <span className="color-em text-10 hidden lg:block">
                Published on 14 Jun 2019
              </span>
            </div>
            <Text className="hidden lg:block">
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy; it is based on
              a number of factors, including ad placement, demographic, even the
              consumer’s mood when they see your ad.
            </Text>
            <Button className="hidden lg:flex text-20 color-em">
              Show More
            </Button>
          </div>
          <Button className="color-primary ml-auto lg:hidden">Subscribe</Button>
          <Button className="hidden lg:flex ml-auto" type="primary">
            Subscribe 2.3m
          </Button>
        </div>
      </section>
    </main>
  );
}

function Switch(props) {
  const { on, id, ...rest } = props;
  return (
    <span className="switch">
      <input
        type="checkbox"
        id={id}
        defaultChecked={on ? true : false}
        className="switch__input"
      />
      <span className="switch__thumb"></span>
      <span className="switch__track"></span>
    </span>
  );
}

function Text(props) {
  const { children, size, ...rest } = props;
  return (
    <p
      className={`text ${props.className ?? ""} ${size ? `text_${size}` : ""}`}
      {...rest}
    >
      {children}
    </p>
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
        <time dateTime="PT2M30S" className="video-card__duration">
          {duration}
        </time>
      </div>
      <Title as="figcaption" className="video-card__title">
        {title}
      </Title>
      <div className="video-card__info">
        <div className="video-card__info-block">
          <span>{views} views</span>
          <Icon name="separator" size={2} />
          <time dateTime="2022-01-01">{createdAt}</time>
        </div>
        <span rel="author">{author}</span>
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

function Logo(props) {
  return (
    <a href="/" {...props}>
      <img src="public/yt-logo.svg" alt="YT logo" />
    </a>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar lg:hidden">
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
    <a href="#" className={`link ${className ?? ""}`} {...rest}>
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
