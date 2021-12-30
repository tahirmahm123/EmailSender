import React, {FC} from 'react';
import {
  Center,
  Heading,
  NativeBaseProvider,
  VStack,
} from 'native-base';

interface HomeScreenProps {
  navigation: any;
}
const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{bg: 'blueGray.900'}}
        _light={{bg: 'blueGray.50'}}
        px={4}
        flex={1}>
        <VStack space={5} alignItems="center">
          <Heading size="lg">Email Marketing App</Heading>
          <Heading size="lg">by</Heading>
          <Heading size="lg">Tahir Mahmood </Heading>
          <Heading size="lg">&</Heading>
          <Heading size="lg">Abdul Kuddoos</Heading>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default HomeScreen;
