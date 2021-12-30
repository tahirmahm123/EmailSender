import React from 'react';
import {View} from 'react-native';
import {Text, Heading, Button, FlatList, Divider} from 'native-base';
import {find} from '../Services/Contacts';
import {Contact, RootStackParamList} from '../types';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'Contacts'>;
interface State {
  data: Contact[];
}
interface FlatListContact {
  item: Contact;
}
class ContactsScreen extends React.Component<Props, State> {
  state = {
    data: [],
  };
  componentDidMount() {
    find()
      .then(response => {
        console.log(response);
        this.setState({data: response});
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{alignItems: 'flex-end', padding: 10}}>
          <Button
            size="md"
            colorScheme="secondary"
            style={{width: 150}}
            onPress={() => {
              this.props.navigation.navigate('AddNewContact');
            }}>
            Add New Contact
          </Button>
        </View>

        <View style={{flex: 1, padding: 40, backgroundColor: '#F8F8F8'}}>
          <FlatList
            data={this.state.data}
            renderItem={({
              item: {name, email, phone, group},
            }: FlatListContact) => {
              return (
                <View
                  style={{
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Heading>{name}</Heading>
                    <Text fontSize="lg">{email}</Text>
                    <Text fontSize="md">{phone}</Text>
                    <Text fontSize="md">Group: {group.title}</Text>
                  </View>
                  <View
                    style={{
                      paddingTop: 10,
                      paddingLeft: 10,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-end',
                    }}>
                    <Button
                      size="sm"
                      colorScheme="primary"
                      style={{width: 70}}
                      onPress={() => {
                        this.props.navigation.navigate('AddNewContact');
                      }}>
                      Send Mail
                    </Button>
                  </View>
                </View>
              );
            }}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <Divider />}
          />
        </View>
      </View>
    );
  }
}

export default ContactsScreen;
