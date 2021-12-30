import React from 'react';
import {Text, View, FlatList, Divider, Radio} from 'native-base';
import {Group} from '../types';

interface FlatListTemplate {
  item: Group;
}
interface Props {
  groups: Group[];
  selected: number;
  setGroup: (value: string) => void;
}
class GroupsFlatList extends React.Component<Props> {
  render() {
    return (
      <View style={{height: 200, padding: 10}}>
        <Text fontSize="md">Select Group To Send Email:</Text>
        <Radio.Group
          name={'Group'}
          value={this.props.selected.toString()}
          onChange={nextValue => this.props.setGroup(nextValue)}>
          <FlatList
            data={this.props.groups}
            renderItem={({item: {id, title}}: FlatListTemplate) => {
              return (
                <View
                  style={{
                    padding: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text fontSize="sm">{title}</Text>
                  </View>
                  <View
                    style={{
                      paddingTop: 10,
                      paddingLeft: 10,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-end',
                    }}>
                    <Radio value={id.toString()} accessibilityLabel={title} />
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

export default GroupsFlatList;
