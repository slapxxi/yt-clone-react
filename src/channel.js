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
    <header className="header header_channel">
      <Button className="header__menu">
        <Icon name="menu" />
      </Button>
      <div className="flex items-center gap-10">
        <Logo />
        <Title>Margaret Phelps</Title>
      </div>
      <Search className="header__search lg:ml-50" />
      <Button className="header__btn-search ml-0">
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
        <Icon name="dots" />
      </Button>
    </header>
  );
}

function Content() {
  return (
    <main className="content content_channel">
      <header className="sticky top-0">
        <svg viewBox="0 0 320 100" className="channel-cover max-w-1600">
          <image
            href="public/backdrop.jpg"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
        <div className="px-16 -mt-35 flex flex-col gap-5 lg:flex-row lg:mt-0 lg:my-30 lg:items-center lg:gap-15 max-w-1600">
          <Avatar src="public/nora.jpg" size="xl" />
          <div className="flex flex-col gap-5">
            <Title className="text-20">Margaret Phelps</Title>
            <Text className="color-em" size="sm">
              245K subscribed
            </Text>
          </div>
          <Button className="hidden lg:block ml-auto color-em">
            <Icon name="bell" />
          </Button>
          <Button type="primary" className="self-start my-20">
            Subscribe 2.3m
          </Button>
        </div>
      </header>

      <div className="channel-content">
        <nav className="px-16 my-10">
          <Tabs className="max-w-960">
            <TabsItem active>Home</TabsItem>
            <TabsItem>Videos</TabsItem>
            <TabsItem>Playlists</TabsItem>
            <TabsItem className="hidden lg:block">Channels</TabsItem>
            <TabsItem className="hidden lg:block">Discussion</TabsItem>
            <TabsItem className="hidden lg:block">About</TabsItem>
            <TabsItem className="hidden lg:block">
              <Icon name="search" />
            </TabsItem>
            <TabsItem className="lg:hidden">
              <Icon name="chevron-down" />
            </TabsItem>
          </Tabs>
        </nav>

        <aside className="hidden lg:block mt-10 row-span-2 col-start-2">
          <Title className="mb-30 color-em font-normal">
            Recommended Channels
          </Title>
          <NavList className="flex flex-col gap-30">
            <NavListItem>
              <Link href="#" className="flex items-center gap-20">
                <Avatar src="public/flora.jpg" size="lg" />
                <Title>Flora Benson</Title>
              </Link>
            </NavListItem>
            <NavListItem>
              <Link href="#" className="flex items-center gap-20">
                <Avatar src="public/violet.jpg" size="lg" />
                <Title>Violet Cobb</Title>
              </Link>
            </NavListItem>
            <NavListItem>
              <Link href="#" className="flex items-center gap-20">
                <Avatar src="public/phil.jpg" size="lg" />
                <Title>Phillip Mullins</Title>
              </Link>
            </NavListItem>
          </NavList>
        </aside>

        <figure
          className="hidden lg:flex gap-30"
          style={{ gridColumn: "1/2", gridRow: "2" }}
        >
          <div className="relative max-w-540">
            <img
              src="public/cover21.jpg"
              alt="Choosing the Best..."
              className="w-full cover"
            />
            <time className="tag absolute bottom-10 right-10">2:30</time>
          </div>
          <div className="flex flex-col justify-center gap-30 max-w-prose">
            <div>
              <Title size="lg" className="mb-10">
                Choosing The Best Audio Player Software For Your Computer
              </Title>
              <Text className="color-text-light">
                Your cheap internet-based banner advertising will become one of
                the sought for ads there are. Today, the world of Internet
                advertising is rapidly evolving beyond banner ads and intrusive
                pop-ups. Bayles A common medium for advertising on the Internet
                is the use of banner ads.
              </Text>
            </div>
            <div className="flex items-center gap-10 mt-10 color-em">
              <span>11k views</span>
              <Icon name="separator" size={3} />
              <time>6 months ago</time>
            </div>
          </div>
        </figure>
      </div>

      <section className="my-20">
        <header className="section-header hidden lg:flex">
          <Title size="lg" className="home-section__title">
            Margaret Phelps Videos
          </Title>
          <div className="flex gap-10 ml-auto">
            <Button type="round">
              <Icon name="chevron-left" size={11}></Icon>
            </Button>
            <Button type="round">
              <Icon name="chevron-right" size={11}></Icon>
            </Button>
          </div>
        </header>
        <NavList className="video-list">
          <NavListItem className="video-list__item">
            <Link>
              <VideoCard
                src="public/cover17.jpg"
                duration="2:30"
                views="80k"
                title="A Brief History of Creation"
              />
            </Link>
          </NavListItem>
          <NavListItem className="video-list__item">
            <Link>
              <VideoCard
                src="public/cover16.jpg"
                duration="8:00"
                views="123k"
                title="Selecting the Right Hotel"
              />
            </Link>
          </NavListItem>
          <NavListItem className="video-list__item">
            <Link>
              <VideoCard
                src="public/cover18.jpg"
                duration="6:40"
                views="11k"
                title="Asteroids"
              />
            </Link>
          </NavListItem>
          <NavListItem className="video-list__item">
            <Link>
              <VideoCard
                src="public/cover15.jpg"
                duration="6:40"
                views="11k"
                title="Telescopes 101"
              />
            </Link>
          </NavListItem>
          <NavListItem className="video-list__item">
            <Link>
              <VideoCard
                src="public/cover19.jpg"
                duration="6:40"
                views="11k"
                title="A Good Autoresponder"
              />
            </Link>
          </NavListItem>
          <NavListItem className="video-list__item">
            <Link>
              <VideoCard
                src="public/cover20.jpg"
                duration="6:40"
                views="11k"
                title="Baby Monitor Technology"
              />
            </Link>
          </NavListItem>
        </NavList>
      </section>
    </main>
  );
}

function Tabs(props) {
  const { children, className, ...rest } = props;
  return (
    <div className={`tabs ${className ?? ""}`} role="tablist" {...rest}>
      {children}
    </div>
  );
}

function TabsItem(props) {
  const { children, className, active, ...rest } = props;
  return (
    <button
      className={`tabs__item ${className ?? ""} ${active ? "tabs__item_active" : ""}`}
      role="tab"
      {...rest}
    >
      {children}
    </button>
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

function Logo() {
  return (
    <a href="/">
      <img src="public/yt-icon.svg" alt="YT logo" />
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
