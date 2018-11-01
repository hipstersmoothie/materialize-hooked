import React, { useRef, useState } from 'react';

import Body from './materialize/body';
import Nav, { NavItem, NavSearch } from './materialize/nav';
import Button from './materialize/button';
import Fab from './materialize/fixedActionButton';
import Carousel from './materialize/carousel';
import Slider, { SliderImage } from './materialize/slider';
import MaterialBox from './materialize/materialBox';
import Modal, { useModal } from './materialize/modal';
import Collapsible, { CollapsibleItem } from './materialize/collapsible';
import FeatureDiscovery, {
  useFeatureDiscovery
} from './materialize/featureDiscovery';
import Dropdown, { DropdownItem, Divider } from './materialize/dropdown';

// eslint-disable-next-line import/no-unassigned-import
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Input from './materialize/input';

const App = () => {
  const featureDiscovery = useRef();
  const toggle = useFeatureDiscovery(featureDiscovery);
  const [value, setValue] = useState();

  return (
    <>
      <Nav useSideNav isRight isFixed logo="Logo">
        <NavItem href="sass.html" text="Sass" />
        <NavItem href="badges.html" text="Components" />
        <NavItem isActive href="collapsible.html" text="Javascript" />
        <NavItem href="mobile.html" text="Mobile" />
      </Nav>

      <Body>
        <Input
          value={value}
          onChange={e => setValue(e.currentTarget.value)}
          length={10}
        />

        <Carousel
          images={[
            'https://vignette.wikia.nocookie.net/animaljam/images/7/78/Lil_bub_the_cat-250x250.jpg/revision/latest?cb=20140510201421',
            'http://webfixfast.com/wp-content/uploads/2012/11/cat-1-250x250.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9jWojHYGGqM0ZTIziTBMyv29Ql5Wv-6DSQvxz5m_rZ4CYq5G',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhL-vJ32eGdFal-LDu5wDRXBteI7vLhQ7PF31cu2fFAzE6uQZ',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx9nLK29Z9NJm43wf3hCcLpew8IOhG2R0xWFVJjC0Dy25Ym6_XaA'
          ]}
        />
        <Collapsible>
          <CollapsibleItem header="First">
            <span>Lorem ipsum dolor sit amet.</span>
          </CollapsibleItem>
          <CollapsibleItem header="Second">
            <span>Lorem ipsum dolor sit amet.</span>
          </CollapsibleItem>
          <CollapsibleItem header="Third">
            <span>Lorem ipsum dolor sit amet.</span>
          </CollapsibleItem>
        </Collapsible>

        <Dropdown text="Drop Me!">
          <DropdownItem>one</DropdownItem>
          <DropdownItem>two</DropdownItem>
          <Divider />
          <DropdownItem>three</DropdownItem>
          <DropdownItem>
            <i className="material-icons">view_module</i>
            four
          </DropdownItem>
        </Dropdown>

        <MaterialBox
          className="section"
          caption="A pretty picture"
          src="https://materializecss.com/images/sample-1.jpg"
          width={650}
        />

        <Slider>
          <SliderImage
            src="https://lorempixel.com/580/250/nature/1"
            caption={
              <div>
                <h3>This is our big Tagline!</h3>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            }
          />
          <SliderImage
            src="https://lorempixel.com/580/250/nature/2"
            captionClass="left-align"
            caption={
              <div>
                <h3>Left Aligned Caption</h3>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            }
          />
          <SliderImage
            src="https://lorempixel.com/580/250/nature/3"
            captionClass="right-align"
            caption={
              <div>
                <h3>Right Aligned Caption</h3>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            }
          />
          <SliderImage
            src="https://lorempixel.com/580/250/nature/4"
            captionClass="center-align"
            caption={
              <div>
                <h3>This is our big Tagline!</h3>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            }
          />
        </Slider>

        <a
          className="waves-effect waves-light btn modal-trigger"
          href="#modal-example"
        >
          Modal
        </a>

        <Modal id="modal-example">
          <div className="tap-target-content">
            <h5>Title</h5>
            <p>A bunch of text</p>
          </div>
        </Modal>

        <Fab id="fab" className="red" icon="mode_edit" onClick={toggle}>
          <Button isFloating className="red" icon="insert_chart" />
          <Button isFloating className="yellow darken-1" icon="format_quote" />
          <Button isFloating className="green" icon="publish" />
          <Button isFloating className="blue" icon="attach_file" />
        </Fab>

        <FeatureDiscovery ref={featureDiscovery} target="fab">
          <div className="tap-target-content">
            <h5>Title</h5>
            <p>A bunch of text</p>
          </div>
        </FeatureDiscovery>
      </Body>
    </>
  );
};

export default App;
