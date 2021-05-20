import { Link } from 'react-router-dom';

const menus = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/not-found',
    text: 'NotFound',
  },
];

const Header = () => (
  <header className="sticky-top py-3 shadow-sm">
    <div className="container d-flex justify-content-center align-items-center">
      {menus.map((m) => (
        <Link key={m.path} className="link-primary me-3" to={m.path}>
          {m.text}
        </Link>
      ))}
    </div>
  </header>
);

export default Header;
