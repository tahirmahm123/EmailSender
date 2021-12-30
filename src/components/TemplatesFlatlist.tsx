import React from 'react';
import {Text, View, FlatList, Divider, Radio} from 'native-base';
import {Template} from '../types';

interface FlatListTemplate {
  item: Template;
}
interface Props {
  templates: Template[];
  selected: number;
  setTemplate: (value: string) => void;
}
class TemplatesFlatList extends React.Component<Props> {
  render() {
    return (
      <View style={{height: 200, padding: 10}}>
        <Text fontSize="md">Select Template To Send:</Text>
        <Radio.Group
          name={'Template'}
          value={this.props.selected.toString()}
          onChange={nextValue => this.props.setTemplate(nextValue)}>
          <FlatList
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
                    <Text fontSize="sm">{subject}</Text>
                  </View>
                  <View
                    style={{
                      paddingTop: 10,
                      paddingLeft: 10,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-end',
                    }}>
                    <Radio value={id.toString()} accessibilityLabel={subject} />
                  </View>
                </View>
              );
            }}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <Divider />}
          />
        </Radio.Group>
      </View>
    );
  }
}

export default TemplatesFlatList;
