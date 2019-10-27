import React from 'react'
import reactTestRender from 'react-test-renderer'
import { BoxContainer } from '../BoxContainer'
import { ImageLoader } from '../ImageLoader'
import { Header } from '../header'
import { SearchBar } from '../Search'

describe('Custom Components Tests ==>', () => {
    it('Test Box Container', () => {
        const boxComp = reactTestRender.create(<BoxContainer />);
        expect(boxComp).toMatchSnapshot();
    });
    it('Test Header Component', () => {
        const headerComp = reactTestRender.create(<Header />);
        expect(headerComp).toMatchSnapshot();
    });
    it('Test Image Loader', () => {
        const imageLoaderComp = reactTestRender.create(<ImageLoader />);
        expect(imageLoaderComp).toMatchSnapshot();
    });
    it('Test Search bar', () => {
        const searchComp = reactTestRender.create(<SearchBar placeholderTxt='Test People' />);
        expect(searchComp).toMatchSnapshot();
    });
})
