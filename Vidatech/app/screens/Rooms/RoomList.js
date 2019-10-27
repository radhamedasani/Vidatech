import React, { useState, useEffect } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'

import { RoomItem } from './RoomItem'
import { CustomCheckBox } from '../../components/CustomCheckBox'
import { baseStyle } from '../../themes/base'
import { fetchData } from '../../services/api'
import { FETCH_ROOMS } from '../../services/endpoints'
import { sortList, filterList } from '../../utilities'
import { is } from '@babel/types'

export function RoomList(props) {
    const { list } = baseStyle
    const [roomList, setRoomsList] = useState({
        totalRooms: [],
        availableRooms: [],
        loading: true
    });
    let data = [];
    const fetchRooms = () => {
        const fetchRoomList = async () => {
            try {
                totalRooms = await fetchData(FETCH_ROOMS);
                totalRooms = sortList(totalRooms, 'name');
                availableRooms = filterList(totalRooms, 'isOccupied', false);
                data = availableRooms;
                setRoomsList({
                    totalRooms,
                    availableRooms,
                    loading: false,
                    rooms: [...availableRooms]
                });
            } catch (e) {
                setRoomsList({ loading: false, rooms: [] });
                //alert(JSON.stringify(e));
            }
        }
        fetchRoomList();
    }
    const onClickCheckBox = (isChecked) => {
        const { totalRooms, availableRooms } = roomList;
        const rooms = isChecked ? totalRooms : availableRooms;
        const newRoomList = Object.assign({}, roomList, { rooms });
        setRoomsList(newRoomList);
    }
    const renderRoom = ({ item }) => {
        return (<RoomItem {...item} />);
    }
    useEffect(fetchRooms, []);
    return (<View style={list}>
        {roomList.loading ? <ActivityIndicator animating={true} /> :
            <View>
                <CustomCheckBox title='Include Unavailable Rooms'
                    onClickCheckBox={onClickCheckBox} />
                <FlatList data={roomList.rooms}
                    renderItem={renderRoom}>
                </FlatList>
            </View>
        }
    </View>);
}