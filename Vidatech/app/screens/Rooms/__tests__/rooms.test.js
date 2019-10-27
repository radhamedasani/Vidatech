import React from 'react'
import reactTestRenderer from 'react-test-renderer'

import { room } from '../../testdata'
import { RoomItem, } from '../RoomItem'

describe('Test Room Components', () => {
    it('Test Room Item', () => {
        const roomItem = reactTestRenderer.create(<RoomItem {...room} />)
        expect(roomItem).toMatchSnapshot();
    })
})