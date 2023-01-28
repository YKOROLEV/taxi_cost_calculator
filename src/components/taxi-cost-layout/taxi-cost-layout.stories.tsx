import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {TaxiCostLayout} from "./taxi-cost-layout";
import {taxiTestData} from "../../model/taxi";

export default {
    title: 'Design System/Components/Taxi/Elements/Cost',
    component: TaxiCostLayout,
} as ComponentMeta<typeof TaxiCostLayout>

const Template: ComponentStory<typeof TaxiCostLayout> = (args) => <TaxiCostLayout {...args} />;
export const Fields = Template.bind({});

Fields.args = {
    cost: taxiTestData.cost
};