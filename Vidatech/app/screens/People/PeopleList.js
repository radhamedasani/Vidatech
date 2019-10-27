import React, { useState, useEffect } from 'react'
import { FlatList, View, Text, ActivityIndicator } from 'react-native'

import { baseStyle } from '../../themes/base'
import { PeopleItem } from './PeopleItem'
import { SearchBar } from '../../components/Search'
import { filterList } from '../../utilities'

import { sortList } from '../../utilities'
import { fetchData } from '../../services/api'
import { FETCH_PEOPLE } from '../../services/endpoints'

export function PeopleList(props) {
    // const [data, setData] = useState([]);
    const [listData, setListData] = useState({
        people: [],
        loading: true,
        searchList: []
    });
    const { list } = baseStyle;

    const fetchPeople = () => {
        const fetchPeopleList = async () => {
            let data = await fetchData(FETCH_PEOPLE);
            let people = data.map((item) => {
                item.name = item.firstName + " " + item.lastName;
                return item;
            })
            people = sortList(people, 'name');
            setListData({
                people,
                loading: false,
                searchList: people
            });
        }
        fetchPeopleList();
    }

    const onClickSearch = (searchTxt) => {
       // alert(searchTxt);
        const searchInput = searchTxt.toLowerCase();
        const { people } = listData;
        const searchList = filterList(people, 'name', searchInput);
        const newListData = Object.assign({}, listData, { searchList });
        setListData(newListData);
    }

    useEffect(fetchPeople, []);

    renderPeople = ({ item }) => {
        return (<PeopleItem {...item} />);
    }
    return (<View style={list}>
        {/* <Text>{listData.searchList.length}</Text> */}
        {listData.loading ? <ActivityIndicator animating={true} /> :
            <View>
                <SearchBar placeholderTxt='Search People'
                    onClickSearch={onClickSearch} />
                <FlatList data={listData.searchList}
                    renderItem={renderPeople}
                    initialNumToRender={5} />
            </View>}
    </View>);
}
