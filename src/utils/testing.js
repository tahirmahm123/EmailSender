const data = [
  {
    id: 1,
    name: 'Autumn Mcdowell',
    email: 'jadupi@mailinator.com',
    phone: '+1 (526) 466-1024',
    group: {
      id: 1,
      title: 'Group1',
      published_at: '2021-12-19T18:02:42.000Z',
      created_at: '2021-12-19T18:02:28.000Z',
      updated_at: '2021-12-19T18:02:43.000Z',
    },
    published_at: '2021-12-19T18:03:58.000Z',
    created_at: '2021-12-19T18:00:39.000Z',
    updated_at: '2021-12-19T18:03:59.000Z',
  },
  {
    id: 2,
    name: 'Odessa Patrick',
    email: 'zuvymor@mailinator.com',
    phone: '+1 (478) 177-9971',
    group: {
      id: 1,
      title: 'Group1',
      published_at: '2021-12-19T18:02:42.000Z',
      created_at: '2021-12-19T18:02:28.000Z',
      updated_at: '2021-12-19T18:02:43.000Z',
    },
    published_at: '2021-12-19T18:05:39.000Z',
    created_at: '2021-12-19T18:04:22.000Z',
    updated_at: '2021-12-19T18:05:41.000Z',
  },
  {
    id: 3,
    name: 'Paki Freeman',
    email: 'xykovaxy@mailinator.com',
    phone: '+1 (233) 656-8234',
    group: {
      id: 2,
      title: 'Group 2',
      published_at: '2021-12-19T18:03:21.000Z',
      created_at: '2021-12-19T18:03:06.000Z',
      updated_at: '2021-12-19T18:03:23.000Z',
    },
    published_at: '2021-12-19T18:06:56.000Z',
    created_at: '2021-12-19T18:06:04.000Z',
    updated_at: '2021-12-19T18:06:57.000Z',
  },
  {
    id: 4,
    name: 'Shana Salinas',
    email: 'syvamysih@mailinator.com',
    phone: '+1 (487) 659-8902',
    group: {
      id: 2,
      title: 'Group 2',
      published_at: '2021-12-19T18:03:21.000Z',
      created_at: '2021-12-19T18:03:06.000Z',
      updated_at: '2021-12-19T18:03:23.000Z',
    },
    published_at: '2021-12-19T18:08:00.000Z',
    created_at: '2021-12-19T18:07:50.000Z',
    updated_at: '2021-12-19T18:08:01.000Z',
  },
];

const groupsData = [
  {
    id: 1,
    title: 'Group1',
    published_at: '2021-12-19T18:02:42.000Z',
    created_at: '2021-12-19T18:02:28.000Z',
    updated_at: '2021-12-19T18:02:43.000Z',
    contacts: [
      {
        id: 1,
        name: 'Autumn Mcdowell',
        email: 'jadupi@mailinator.com',
        phone: '+1 (526) 466-1024',
        group: 1,
        published_at: '2021-12-19T18:03:58.000Z',
        created_at: '2021-12-19T18:00:39.000Z',
        updated_at: '2021-12-19T18:03:59.000Z',
      },
      {
        id: 2,
        name: 'Odessa Patrick',
        email: 'zuvymor@mailinator.com',
        phone: '+1 (478) 177-9971',
        group: 1,
        published_at: '2021-12-19T18:05:39.000Z',
        created_at: '2021-12-19T18:04:22.000Z',
        updated_at: '2021-12-19T18:05:41.000Z',
      },
    ],
  },
  {
    id: 2,
    title: 'Group 2',
    published_at: '2021-12-19T18:03:21.000Z',
    created_at: '2021-12-19T18:03:06.000Z',
    updated_at: '2021-12-19T18:03:23.000Z',
    contacts: [
      {
        id: 3,
        name: 'Paki Freeman',
        email: 'xykovaxy@mailinator.com',
        phone: '+1 (233) 656-8234',
        group: 2,
        published_at: '2021-12-19T18:06:56.000Z',
        created_at: '2021-12-19T18:06:04.000Z',
        updated_at: '2021-12-19T18:06:57.000Z',
      },
      {
        id: 4,
        name: 'Shana Salinas',
        email: 'syvamysih@mailinator.com',
        phone: '+1 (487) 659-8902',
        group: 2,
        published_at: '2021-12-19T18:08:00.000Z',
        created_at: '2021-12-19T18:07:50.000Z',
        updated_at: '2021-12-19T18:08:01.000Z',
      },
    ],
  },
];

export {data, groupsData};
