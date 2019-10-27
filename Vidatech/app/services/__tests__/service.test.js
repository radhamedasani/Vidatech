import { fetchData } from '../api'
import { FETCH_PEOPLE, FETCH_ROOMS } from '../endpoints'
import fetch from 'isomorphic-fetch'

describe('Test Service ==>', () => {

    it('Test Fetch People', async () => {
        const data = await fetchData(FETCH_PEOPLE);
        console.log(' People Length => ' + data.length);
        expect(data.length).toBeGreaterThan(0);
    }),

        it('Test Fetch Rooms', async () => {
            const data = await fetchData(FETCH_ROOMS);
            console.log('Rooms Length =>' + data.length);
            expect(data.length).toBeGreaterThan(0);
        })
})
