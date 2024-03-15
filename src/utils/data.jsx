import { MdOutlineArrowRight } from 'react-icons/md';
import { RiHome2Line } from 'react-icons/ri';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { GoBell } from 'react-icons/go';
import { FaSquare } from 'react-icons/fa';
import { TbChecklist } from 'react-icons/tb';
import { CiBoxList } from 'react-icons/ci';
import { MdLeaderboard } from 'react-icons/md';
import { FaRegCalendarAlt } from 'react-icons/fa';

import { nanoid } from 'nanoid';

export const sidebarLinks = [
  {
    name: 'sbTop',
    links: [
      {
        id: nanoid(),
        name: 'home',
        path: '/',
        icon: <RiHome2Line />,
      },
      {
        id: nanoid(),
        name: 'my tasks',
        path: '/tasks',
        icon: <IoCheckmarkCircleOutline />,
      },
      {
        id: nanoid(),
        name: 'inbox',
        path: '/inbox',
        icon: <GoBell />,
      },
    ],
  },
  {
    name: 'sbBody',
    links: [
      {
        id: nanoid(),

        name: 'projects',
        path: '/projectsOverview',
        icon: <MdOutlineArrowRight />,
        subLinks: [
          {
            id: nanoid(),
            name: 'project1',
            path: `/projectsOverview`,
            icon: <FaSquare />,
          },
          {
            id: nanoid(),
            name: 'project2',
            path: '/projectsOverview',
            icon: <FaSquare />,
          },
        ],
      },
      {
        id: nanoid(),

        name: 'workspaces',

        path: '/workspacesOverview',
        icon: <MdOutlineArrowRight />,
        subLinks: [
          {
            id: nanoid(),
            category: 'workspace',
            name: 'workspace1',
            path: '/workspace',
            icon: <FaSquare />,
          },
          {
            id: nanoid(),
            category: 'workspace',
            name: 'workspace2',
            path: '/workspace',
            icon: <FaSquare />,
          },
        ],
      },
    ],
  },
];

export const currentSelectedWidgets = [
  {
    id: nanoid(),
    type: 'task',
    title: 'my tasks',
    currentSelectedTab: 0,
    tasks: [
      [
        {
          id: nanoid(),
          name: 'placeholder1 upcoming',
        },
        {
          id: nanoid(),
          name: 'booger',
        },
      ],
      [
        {
          id: nanoid(),
          name: 'placeholdr1 overdue',
        },
        {
          id: nanoid(),
          name: 'get snotted',
        },
      ],
      [
        {
          id: nanoid(),
          name: 'placeholder1 completed',
        },
      ],
    ],
  },
  {
    id: nanoid(),
    type: 'task',
    title: "tasks i've assigned",
    currentSelectedTab: 0,
    tasks: [
      [
        {
          id: nanoid(),
          name: 'placeholder2 upcoming',
        },
      ],
      [
        {
          id: nanoid(),
          name: 'placeholdr2 overdue',
        },
      ],
      [
        {
          id: nanoid(),
          name: 'placeholder2 completed',
        },
        {
          id: nanoid(),
          name: 'placeholder2 completed2',
        },
      ],
    ],
  },
];

export const projectTabs = [
  {
    text: 'overview',
    icon: <TbChecklist />,
  },
  {
    text: 'list',
    icon: <CiBoxList />,
  },

  {
    text: 'board',
    icon: <MdLeaderboard />,
  },
  {
    text: 'calendar',
    icon: <FaRegCalendarAlt />,
  },
];
