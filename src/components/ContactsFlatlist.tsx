import React, {FC, useEffect, useState} from 'react';
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
  Skeleton,
} from 'native-base';
import {Contact} from '../types';

interface FlatListContact {
  item: Contact;
}
interface Props {
  contacts: Contact[];
  setContact: (value: any) => void;
  selected: string[];
}

class ContactsFlatList extends React.Component<Props> {
  render() {
    return (
      <View style={{height: 300, padding: 10}}>
        <Text>Select Contact to send Mail</Text>
        <Checkbox.Group
          onChange={this.props.setContact}
          value={this.props.selected}
          accessibilityLabel="choose numbers">
          <FlatList
            data={this.props.contacts}
            renderItem={({item: {name, email}}: FlatListContact) => {
              return (
                <View
                  style={{
                    padding: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text fontSize="lg">{name}</Text>
                    <Text fontSize="md">{email}</Text>
                  </View>
                  <View
                    style={{
                      paddingTop: 10,
                      paddingLeft: 10,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-end',
                    }}>
                    <Checkbox value={email} accessibilityLabel={name} />
                  </View>
                </View>
              );
            }}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <Divider />}
          />
        </Checkbox.Group>
      </View>
    );
  }
}

export default ContactsFlatList;
