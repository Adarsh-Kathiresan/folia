import { TrEvent } from '@/types/TrEvent';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type EventRowProps = {
    event: TrEvent;
};

const EventRow: React.FC<EventRowProps> = ({ event }) => (
    <View style={styles.row}>
        <Text style={styles.text}>{event.date}</Text>
        <Text style={styles.text}>{event.event}</Text>
    </View>
);

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    text: {
        marginRight: 16,
        fontSize: 16,
        color: '#333',
    },
});

export default EventRow;