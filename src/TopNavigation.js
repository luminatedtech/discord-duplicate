import {
    FaSearch,
    FaHashtag,
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
  } from 'react-icons/fa';
  
  
  const TopNavigation = () => {
    return (
      <div className='top-navigation'>
        <HashtagIcon />
        <Title />
        <ThemeIcon />
        <Search />
        <BellIcon />
        <UserCircle />
      </div>
    );
  };
  
  const ThemeIcon = () => {
    //const [darkTheme, setDarkTheme] = useDarkMode();
    //const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <div>hi</div>
    //   <span onClick={handleMode}>
    //     {darkTheme ? (
    //       <FaSun size='24' className='top-navigation-icon' />
    //     ) : (
    //       <FaMoon size='24' className='top-navigation-icon' />
    //     )}
    //   </span>
    );
  };
  
  const Search = () => (
    <div className='search'>
      <input className='search-input' type='text' placeholder='Search...' />
      <FaSearch size='18' className='text-secondary my-auto' />
    </div>
  );
  const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
  const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />;
  const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />;
  const Title = () => <h5 className='title-text'>my-portfolio</h5>;
  
  export default TopNavigation;
  