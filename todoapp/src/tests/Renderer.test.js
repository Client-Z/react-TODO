import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Navbar from '../components/Navbar'

Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
    test("renders", () => {
        const NavbarWrapper = shallow(<Navbar />);
        expect(NavbarWrapper.exists()).toBe(true);
    });
});