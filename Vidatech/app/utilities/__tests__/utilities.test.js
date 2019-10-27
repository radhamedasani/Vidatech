import { sortList, formatDate } from '../'

describe('Test Utilites ==>', () => {

    it('Test Sorting', () => {
        const data = [{
            "id": "1",
            "name": "Rhett",
        }, {
            "id": "2",
            "name": "Jan",
        }, {
            "id": "3",
            "name": "Langosh",
        }];
        const expectedSortList = [{
            "id": "2",
            "name": "Jan",
        }, {
            "id": "3",
            "name": "Langosh",
        }, {
            "id": "1",
            "name": "Rhett",
        }];
        const sortedList = sortList(data, 'name');
        expect(expectedSortList).toEqual(sortedList);
    });

    it('Test Format Dates', () => {
        const formattedDate = formatDate('2019-04-29T10:04:24.713Z');
        const expectedDate = "29 Apr 2019";
        expect(formattedDate).toBe(expectedDate);
    })
});