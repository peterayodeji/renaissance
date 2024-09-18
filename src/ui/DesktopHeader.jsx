import MenNav from './MenNav';
import Navbar from './Navbar';
import WomenNav from './WomenNav';

function DesktopHeader() {
  return (
    <div className="relative">
      <Navbar>
        <Navbar.Nav>
          <Navbar.Links>
            <Navbar.Link to="/women" opens="women">
              Women
            </Navbar.Link>
            <Navbar.Link to="/men" opens="men">
              Men
            </Navbar.Link>
            <Navbar.Link to="/lifestyle">Lifestyle</Navbar.Link>
          </Navbar.Links>

          <div>
            {/* <img src="/renaissance-logo.svg" alt="Brand Logo" /> */}
            <h1 className="text-3xl font-bold text-gray-800">RENAISSANCE</h1>
          </div>

          <div className="flex flex-1 justify-end gap-x-8">
            <div className="flex flex-col items-center text-xs">
              <img src="/search.svg" alt="Search" />
              <span>Search</span>
            </div>
            <div className="flex flex-col items-center text-xs">
              <img src="/user.svg" alt="User" />
              <span>Sign in</span>
            </div>
            <div className="flex flex-col items-center text-xs">
              <img src="/heart.svg" alt="Heart" />
              <span>Wishlist</span>
            </div>
            <div className="flex flex-col items-center text-xs">
              <img src="/shopping-bag.svg" alt="Shopping Bag" />
              <span>Cart</span>
            </div>
          </div>
        </Navbar.Nav>

        <div className="py-8 transition-all duration-300 ease-in-out empty:h-0 empty:p-0">
          <Navbar.Body name="women">
            <WomenNav />
          </Navbar.Body>

          <Navbar.Body name="men">
            <MenNav />
          </Navbar.Body>
        </div>

        <Navbar.NavOverlay />
      </Navbar>
    </div>
  );
}

export default DesktopHeader;
