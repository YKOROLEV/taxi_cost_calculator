import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {TaxiInputLayout} from "./taxi-input-layout";

import {taxiTestData} from "../../model/taxi";

export default {
    title: 'Design System/Components/Taxi/Elements/Input',
    component: TaxiInputLayout,
} as ComponentMeta<typeof TaxiInputLayout>

const Template: ComponentStory<typeof TaxiInputLayout> = (args) => <TaxiInputLayout {...args} />;
export const Fields = Template.bind({});

Fields.args = {
    address: taxiTestData.address,
    addressDestination: taxiTestData.addressDestination,
};