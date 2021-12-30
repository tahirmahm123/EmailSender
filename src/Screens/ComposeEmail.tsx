import React from 'react';
import {View} from 'react-native';
import {Text, HStack, Heading, Button, Radio, Spinner} from 'native-base';
import ContactsFlatList from '../components/ContactsFlatlist';
import GroupsFlatList from '../components/GroupsFlatlist';
import {
  find as findContacts,
  email as emailContacts,
} from '../Services/Contacts';
import {find as findGroups, email as emailGroup} from '../Services/Groups';
import {find as findTemplates} from '../Services/Templates';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Contact,
  ContactS,
  GroupS,
  RootStackParamList,
  Template,
  Group,
} from '../types';
import TemplatesFlatlist from '../components/TemplatesFlatlist';

type Props = StackScreenProps<RootStackParamList, 'ComposeEmail'>;
interface State {
  loading: boolean;
  sendType: string;
  contacts: Contact[];
  groups: Group[];
  templates: Template[];
  selectedTemplateId: number;
  selectedGroupId: number;
  selectedEmails: string[];
}

class ComposeEmailScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false,
      sendType: ContactS,
      groups: [],
      contacts: [],
      templates: [],
      selectedEmails: [],
      selectedGroupId: 0,
      selectedTemplateId: 0,
    };
    this.handleContact = this.handleContact.bind(this);
    this.handleGroup = this.handleGroup.bind(this);
    this.handleTemplate = this.handleTemplate.bind(this);
    this.handleMailApi = this.handleMailApi.bind(this);
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

  handleContact(value: any) {
    this.setState({selectedEmails: value});
  }
  handleTemplate(value: string) {
    this.setState({selectedTemplateId: parseInt(value, 10)});
  }
  handleGroup(value: string) {
    this.setState({selectedGroupId: parseInt(value, 10)});
  }

  handleMailApi() {
    (this.state.sendType === ContactS
      ? emailContacts({
          template: this.state.selectedTemplateId,
          emails: this.state.selectedEmails,
        })
      : emailGroup({
          template: this.state.selectedTemplateId,
          group: this.state.selectedGroupId,
        })
    )
      .then(response => {
        console.log(response);
        alert('Mail sent Successfully');
      })
      .catch(error => {
        console.error(error);
      });
  }

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
              setTemplate={this.handleTemplate}
              selected={this.state.selectedTemplateId}
            />
            {this.state.sendType === ContactS ? (
              <>
                <ContactsFlatList
                  contacts={this.state.contacts}
                  setContact={this.handleContact}
                  selected={this.state.selectedEmails}
                />
              </>
            ) : (
              <>
                <GroupsFlatList
                  groups={this.state.groups}
                  setGroup={this.handleGroup}
                  selected={this.state.selectedGroupId}
                />
              </>
            )}

            <Button
              size="sm"
              colorScheme="secondary"
              onPress={this.handleMailApi}
              style={{marginTop: 20}}>
              Send Mail
            </Button>
          </View>
        )}
      </View>
    );
  }
}

export default ComposeEmailScreen;
