import Navbar from './Navbar';

function DesktopHeader() {
  return (
    <Navbar>
      <Navbar.Nav>
        <Navbar.NavLinks>
          <Navbar.NavLink to="/women" opens="women">
            Women
          </Navbar.NavLink>
          <Navbar.NavLink to="/men" opens="men">
            Men
          </Navbar.NavLink>
          <Navbar.NavLink to="/lifestyle">Lifestyle</Navbar.NavLink>
        </Navbar.NavLinks>

        <div>
          {/* <img src="/renaissance-logo.svg" alt="" /> */}
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

      <div className="bg-red-300 py-4 transition-all duration-300 ease-in-out empty:h-0 empty:p-0">
        <Navbar.Body name="women">
          <div className="bg-blue-300 px-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            tenetur dolore, sapiente nobis praesentium at consequuntur mollitia
            autem reprehenderit cupiditate voluptatem, repellendus omnis?
            Doloribus error, quas minus ipsa ex, dolor recusandae nostrum est
            aliquid rem quia. Quis facilis vero, eum deleniti officia mollitia
            ratione unde odit quibusdam placeat, aperiam nisi. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Odit, quae autem aut suscipit
            sint reiciendis soluta expedita totam labore voluptas perferendis
            rerum modi nesciunt est quaerat. Illum quaerat animi necessitatibus
            perspiciatis ducimus, nobis voluptatum. Adipisci provident suscipit
            sit quibusdam! Temporibus consequatur soluta vitae aut odit eligendi
            obcaecati aliquid nihil delectus.
          </div>
        </Navbar.Body>

        <Navbar.Body name="men">
          <div className="bg-blue-300 px-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            t ratione unde odit quibusdam Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Vitae, temporibus vero obcaecati
            voluptas quod minima expedita, rem similique suscipit error maiores
            eos optio rerum, iste numquam non earum. Illum debitis, illo maxime
            animi, nam odit dolorem quia aliquam eaque quisquam impedit, at
            dicta aut modi recusandae reiciendis totam consectetur quos eveniet
            est et. Qui odio maxime consectetur praesentium magnam? Doloremque
            nesciunt aliquam doloribus commodi aperiam a possimus explicabo
            impedit earum. placeat, aperiam nisi.
          </div>
        </Navbar.Body>
      </div>

      <Navbar.NavOverlay />
    </Navbar>
  );
}

export default DesktopHeader;
