import NavExtension from './NavExtension';
import NavSubLinks from './NavSubLinks';
import NavTray from './NavTray';

function WomenNav() {
  return (
    <NavTray>
      <NavExtension activeDefault="shoes-and-accesories">
        <NavExtension.Links>
          <NavExtension.Link to="/new-now" opens="new-now">
            <span className="font-semibold">New Now</span>
          </NavExtension.Link>

          <NavExtension.Link
            to="/western-collection"
            opens="western-collection"
          >
            <span className="font-semibold">
              WESTERN <br /> COLLECTION
            </span>
          </NavExtension.Link>

          <NavExtension.Link to="/promotion">Promotion</NavExtension.Link>

          <NavExtension.Link to="/clothing" opens="clothing">
            <span>Clothing</span>
          </NavExtension.Link>

          <NavExtension.Link
            to="/shoes-and-accesories"
            opens="shoes-and-accesories"
          >
            <span>
              Shoes and <br /> accesories
            </span>
          </NavExtension.Link>

          <NavExtension.Link to="/featured">Featured</NavExtension.Link>
        </NavExtension.Links>

        {/* NAVIGATION SUB-LINKS */}
        <NavExtension.SubLinks name="new-now">
          <NavSubLinks />
        </NavExtension.SubLinks>

        <NavExtension.SubLinks name="western-collection">
          <NavSubLinks />
        </NavExtension.SubLinks>

        <NavExtension.SubLinks name="clothing">
          <NavSubLinks />
        </NavExtension.SubLinks>

        <NavExtension.SubLinks name="shoes-and-accesories">
          <NavSubLinks />
        </NavExtension.SubLinks>

        <NavExtension.SubLinks name="featured">
          <NavSubLinks />
        </NavExtension.SubLinks>
      </NavExtension>

      <img
        className="brightness-110 filter lg:h-96"
        src="/women-nav-poster.jpg"
        alt="Women Poster Image"
      />
    </NavTray>
  );
}

export default WomenNav;
