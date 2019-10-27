import React from 'react'
import { View, Text } from 'react-native'
import { roomStyles } from './styles'
import { formatDate } from '../../../utilities'
import { colors } from '../../../themes/base'
import { BoxContainer } from '../../../components/BoxContainer'

export const RoomItem = (props) => {
    const { name, createdAt, isOccupied } = props;
    const OccupiedColor = isOccupied ? 'red' : 'green';
    const availability = isOccupied ? 'Not Available' : 'Available';
    const occupiedTxtColor = {
        color: OccupiedColor
    }
    const { container, roomName, created } = roomStyles
    return (<BoxContainer><View style={container}>
        <Text style={roomName}>{name}</Text>
        <Text style={created}>{`Created At ${formatDate(createdAt)}`}</Text>
        <Text style={[availability, occupiedTxtColor]}>{availability}</Text>
    </View>
    </BoxContainer>)
}