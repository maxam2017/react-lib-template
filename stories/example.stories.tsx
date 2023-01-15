import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Example } from '../src/example';

export default {
  title: 'Example',
  component: Example,
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = () => <Example />;

export const Simple = Template.bind({});
