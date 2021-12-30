export type Group = {
  id: number;
  title: string;
};

export type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  group: Group;
};
export type Template = {
  id: number;
  subject: string;
  text: string;
  html: string;
};
export type RootStackParamList = {
  Home: undefined;
  Contacts: undefined;
  AddNewContact: undefined;
  ComposeEmail: undefined;
};
export type SendEmailToGroup = {
  template: number;
  group: number;
};
export type SendEmailToEmails = {
  template: number;
  emails: string[];
};
export const ContactS = 'contacts';
export const GroupS = 'groups';
