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
import {Contact, Group} from '../types';

interface FlatListContact {
  item: Contact;
}
interface Props {
  contacts: Contact[];
  setContact: () => void;
}

class ContactsFlatList extends React.Component<Props> {
  render() {
    return (
      <View style={{flex: 1, height: 100, padding: 10}}>
        {/*<Text>Contats: {JSON.stringify(this.props.contacts)}</Text>*/}
        <FlatList
          data={this.props.contacts}
          renderItem={({item: {name, email, phone}}: FlatListContact) => {
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
                  <Text fontSize="sm">{phone}</Text>
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
      </View>
    );
  }
}

export default ContactsFlatList;
