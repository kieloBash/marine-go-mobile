import { getUser } from '@/store/auth-store';
import React from 'react';
import { Text, View } from 'react-native';

const DashboardScreen = () => {
    const user = getUser();
    console.log(user)
    return (
        <View className='items-center justify-center flex-1 bg-gray-100'>
            <Text>{user?.email}</Text>
        </View>
    )
}

export default DashboardScreen