import React, {FC} from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Code,
  Input,
  Button,
  View,
  FlatList,
  Divider,
  Checkbox,
} from 'native-base';
import {groupsData} from '../utils/testing';
import {useNavigation} from '@react-navigation/native';

interface FlatListContact {
  item: {
    title: string;
  };
}

interface GroupsFlatListProps {}
const GroupsFlatList: FC<GroupsFlatListProps> = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, height: '10%', padding: 50}}>
      <FlatList
        data={groupsData}
        renderItem={({item: {title}}: FlatListContact) => {
          return (
            <View
              style={{
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text fontSize="lg">{title}</Text>
              </View>
              <View
                style={{
                  paddingTop: 10,
                  paddingLeft: 10,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-end',
                }}>
                <Checkbox value={title} />
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Divider />}
      />
      <Button size="sm" colorScheme="secondary">
        Send Mail
      </Button>
    </View>
  );
};

export default GroupsFlatList;
