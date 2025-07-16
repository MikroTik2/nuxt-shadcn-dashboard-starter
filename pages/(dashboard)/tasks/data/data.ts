import {
       ArrowDownIcon,
       ArrowRightIcon,
       ArrowUpIcon,
       CheckCircledIcon,
       CircleIcon,
       CrossCircledIcon,
       QuestionMarkCircledIcon,
       StopwatchIcon,
} from '@radix-icons/vue';

export const labels = [
       {
              value: 'bug',
              label: 'Bug',
       },
       {
              value: 'feature',
              label: 'Feature',
       },
       {
              value: 'documentation',
              label: 'Documentation',
       },
];

export const statuses = [
       {
              value: 'backlog',
              label: 'Backlog',
              icon: QuestionMarkCircledIcon,
       },
       {
              value: 'todo',
              label: 'Todo',
              icon: CircleIcon,
       },
       {
              value: 'in progress',
              label: 'In Progress',
              icon: StopwatchIcon,
       },
       {
              value: 'done',
              label: 'Done',
              icon: CheckCircledIcon,
       },
       {
              value: 'canceled',
              label: 'Canceled',
              icon: CrossCircledIcon,
       },
];

export const priorities = [
       {
              value: 'low',
              label: 'Low',
              icon: ArrowDownIcon,
       },
       {
              value: 'medium',
              label: 'Medium',
              icon: ArrowRightIcon,
       },
       {
              value: 'high',
              label: 'High',
              icon: ArrowUpIcon,
       },
];
