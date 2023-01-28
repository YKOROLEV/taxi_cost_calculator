import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {TaxiRoadLayout} from "./taxi-road-layout";
import {taxiTestData} from "../../model/taxi";

export default {
    title: 'Design System/Components/Taxi/Elements/Road',
    component: TaxiRoadLayout,
} as ComponentMeta<typeof TaxiRoadLayout>

const Template: ComponentStory<typeof TaxiRoadLayout> = (args) => <TaxiRoadLayout {...args} />;
export const Distance = Template.bind({});
export const Time = Template.bind({})

Distance.args = {
    type: 'road_distance',
    value: taxiTestData.distance
};

Time.args = {
    type: 'road_time',
    value: taxiTestData.time
};