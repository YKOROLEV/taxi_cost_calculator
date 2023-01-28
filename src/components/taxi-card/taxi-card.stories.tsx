import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {TaxiCard} from "./taxi-card";

export default {
    title: 'Design System/Components/Taxi/Card/Card',
    component: TaxiCard,
} as ComponentMeta<typeof TaxiCard>

const Template: ComponentStory<typeof TaxiCard> = (args) => <TaxiCard {...args} />;
export const Fields = Template.bind({});

Fields.args = {
    taxi: {
        address: 'Oba, Keykubat Blv. No: A D:73, 07400 Alanya/Antalya',
        addressDestination: 'Saray, Galatasaray Cd. No:49, 07400 Alanya/Antalya',
        distance: '12 km',
        time: '29 m',
        cost: '178'
    }
};