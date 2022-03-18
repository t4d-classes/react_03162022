import { Outlet, Link } from 'react-router-dom';

import './Layout.css';

export const Layout = () => {

  return (
    <div className="container">
      <header id="page-header">
        <h1>The Tools</h1>
      </header>
      <nav id="main-menu">
        <ul className="menu-bar">
          <li className="menu-item"><Link to="/">Home</Link></li>
          <li className="menu-item"><Link to="/color-tool">Color Tool</Link></li>
          <li className="menu-item"><Link to="/car-tool">Car Tool</Link></li>
        </ul>
      </nav>
      <main id="content">
        <Outlet />
      </main>
      <aside id="sidebar">
        Sidebar
      </aside>
      <footer id="page-footer">
        <small>&copy; {new Date().getFullYear()} A Cool Company, Inc.</small>
      </footer>
    </div>
  )


};