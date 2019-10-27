import React from 'react'
import reactTestRenderer from 'react-test-renderer'

import { PeopleItem } from '../PeopleItem'
import { People } from '../'
import { people, PeopleResponse } from '../../testdata'

describe('People Screen Tests ==> ', () => {

    it('Test People Item', () => {
        const peopleitemComp = reactTestRenderer.create(<PeopleItem {...people} />);
        expect(peopleitemComp).toMatchSnapshot();
    })

    it('Test People Comp', () => {
        global.fetch = jest.fn(() => {
            json: () => PeopleResponse
        })
        const PeopleComp = reactTestRenderer.create(<People />);
        expect(PeopleComp).toMatchSnapshot();
    })
})