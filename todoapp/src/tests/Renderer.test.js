import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Navbar from '../components/Navbar'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
    test("renders", () => {
        const NavbarWrapper = shallow(<Navbar />);
        expect(NavbarWrapper.exists()).toBe(true);
    });
});