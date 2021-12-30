import React from 'react';
import {StyleSheet, View} from 'react-native';
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
  FlatList,
  Divider,
  Radio,
  Spinner,
} from 'native-base';
import ContactsFlatList from '../components/ContactsFlatlist';
import GroupsFlatList from '../components/GroupsFlatlist';
import {find as findContacts} from '../Services/Contacts';
import {find as findGroups} from '../Services/Groups';
import {find as findTemplates} from '../Services/Templates';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Contact,
  ContactS,
  GroupS,
  RootStackParamList,
  Template,
} from '../types';
import TemplatesFlatlist from '../components/TemplatesFlatlist';

type Props = StackScreenProps<RootStackParamList, 'ComposeEmail'>;
interface State {
  loading: boolean;
  sendType: string;
  contacts: Contact[];
  groups: Group[];
  templates: Template[];
}

interface Group {}
class ComposeEmailScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false,
      sendType: ContactS,
      groups: [],
      contacts: [],
      templates: [],
    };
    this.handleContact = this.handleContact.bind(this);
  }

  componentDidMount() {
    this.setState({loading: true});
    findGroups()
      .then(response => {
        console.log(response);
        this.setState({groups: response});
      })
      .catch((error: any) => {
        console.log(error);
      });
    findTemplates()
      .then(response => {
        console.log(response);
        this.setState({templates: response});
      })
      .catch((error: any) => {
        console.log(error);
      });
    findContacts()
      .then(response => {
        console.log(response);
        this.setState({contacts: response, loading: false});
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  handleContact() {}

  render() {
    return (
      <View style={{flex: 1, padding: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>Select one to send: </Text>
          <Radio.Group
            name="myRadioGroup"
            value={this.state.sendType}
            style={{flexDirection: 'column', paddingLeft: 20}}
            onChange={(nextValue: string) => {
              this.setState({sendType: nextValue});
            }}>
            <Radio value={ContactS} my={1}>
              Contacts
            </Radio>
            <Radio value={GroupS} my={1}>
              Groups
            </Radio>
          </Radio.Group>
        </View>
        {this.state.loading ? (
          <HStack space={2} alignItems="center">
            <Spinner accessibilityLabel="Loading posts" />
            <Heading color="primary.500" fontSize="md">
              Loading
            </Heading>
          </HStack>
        ) : (
          <View>
            <TemplatesFlatlist
              templates={this.state.templates}
              setTemplate={this.handleContact}
            />
            {this.state.sendType === ContactS ? (
              <>
                <ContactsFlatList
                  contacts={this.state.contacts}
                  setContact={this.handleContact}
                />
              </>
            ) : (
              // <GroupsFlatList />
              <></>
            )}

            <Button size="sm" colorScheme="secondary" style={{marginTop: 20}}>
              Send Mail
            </Button>
          </View>
        )}
      </View>
    );
  }
}

export default ComposeEmailScreen;

const styles = StyleSheet.create({
  a: {
    fontWeight: 'bold',
    color: 'purple',
  },
  div: {
    fontFamily: 'monospace',
  },
  p: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#F5FCFF',
  },
  editor: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 1,
  },
  rich: {
    minHeight: 150,
    flex: 1,
  },
  richBar: {
    height: 50,
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  tib: {
    textAlign: 'center',
    color: '#515156',
  },
});
