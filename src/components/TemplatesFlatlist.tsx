import React from 'react';
import {
  Text,
  View,
  FlatList,
  Divider,
  Checkbox,
} from 'native-base';
import {Template} from '../types';

interface FlatListTemplate {
  item: Template;
}
interface Props {
  templates: Template[];
  setTemplate: () => void;
}
class TemplatesFlatList extends React.Component<Props> {
  render() {
    return (
      <View style={{flex: 1, height: 100, padding: 10}}>
       <Text>asdkjsldfkjgsdfg;ljksdfg</Text>
       <Text>{JSON.stringify(this.props)}</Text>
        {/*<FlatList
          data={this.props.templates}
          renderItem={({item: {id, subject}}: FlatListTemplate) => {
            return (
              <View
                style={{
                  padding: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <Text fontSize="lg">{subject}</Text>
                </View>
                <View
                  style={{
                    paddingTop: 10,
                    paddingLeft: 10,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                  }}>
                  <Checkbox
                    value={id.toString()}
                    accessibilityLabel={subject}
                  />
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <Divider />}
        />*/}
      </View>
    );
  }
}

export default TemplatesFlatList;
