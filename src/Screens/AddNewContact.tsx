import {
  Button,
  Center,
  CheckIcon,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Stack,
  VStack,
  WarningOutlineIcon,
} from 'native-base';
import React, {FC, useState, useEffect} from 'react';
import { View, Text, Alert } from 'react-native';
import { store } from "../Services/Contacts";
import { find } from "../Services/Groups";
interface NewContactProps {
  navigation: any;
}

interface HandleInputParameters {
  name: string;
  text: string;
}

interface Group {
  id: number;
  title: string;
}

const AddNewContact: FC<NewContactProps> = ({ navigation }) => {
  const [groups, setGroups] = useState<Group[]>([]);
  useEffect(() => {
    find()
      .then((response: Group[] | unknown) => {
        console.log(response);
        setGroups(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  },[]);
  const initData = {
    name: "",
    email: "",
    phone: "",
    group: "",
  };
  const [data, setData] = useState(initData);

  const handleInput = (name: string, text: string) => {
    setData({...data, [name]: text});
  };

  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Heading size="lg">Create Contact</Heading>
        <FormControl isRequired style={{ width: 300 }}>
          <Stack>
            <FormControl.Label>Enter Name</FormControl.Label>
            <Input
              placeholder="name"
              onChangeText={(text: any) => {
                handleInput("name", text);
              }}
            />
          </Stack>
        </FormControl>

        <FormControl isRequired style={{ width: 300 }}>
          <Stack>
            <FormControl.Label>Enter Email</FormControl.Label>
            <Input
              type="email"
              placeholder="Email"
              onChangeText={(text: any) => {
                handleInput("email", text);
              }}
            />
          </Stack>
        </FormControl>

        <FormControl isRequired style={{ width: 300 }}>
          <Stack>
            <FormControl.Label>Enter Phone Number</FormControl.Label>
            <InputGroup>
              <InputLeftAddon w={20} children={"+92"} />
              <Input
                style={{ height: 40, width: 220 }}
                type="text"
                placeholder="Phone"
                onChangeText={(text: any) => {
                  handleInput("phone", text);
                }}
              />
            </InputGroup>
            <FormControl.HelperText>+92 3XX XX XX XXX</FormControl.HelperText>
          </Stack>
        </FormControl>

        <FormControl isRequired style={{ width: 300 }}>
          <FormControl.Label>Choose group</FormControl.Label>
          <Select
            accessibilityLabel="Choose Group"
            placeholder="Choose Group"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
            onValueChange={(text: any) => {
              handleInput("group", text);
            }}
            mt="1"
          >
            {
              groups.map((group: Group, key: number) => {
                return <Select.Item label={group.title} value={group.id} key={key} />;
              })
            }
          </Select>
        </FormControl>

        <FormControl>
          <Button
            size="lg"
            colorScheme="secondary"
            onPress={() => {
              setData({...data, phone: "+92"+data.phone})
              store(data)
                .then((res) => {
                  alert("Data Submitted Successfully.");
                  // useState(initData);
                  navigation.navigate("Contacts");
                })
                .catch((err) => console.log(err));
            }}
          >
            Save Contact
          </Button>
        </FormControl>
      </VStack>
    </Center>
  );
};

export default AddNewContact;
