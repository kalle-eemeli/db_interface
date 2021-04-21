import React from 'react';
import {Tabs,Tab,AppBar} from '@material-ui/core';
import MaterialTable from './MaterialTable';

export default function MaterialTabs(props) {
    const [value, setValue] = React.useState(0);
    const handleTabs=(e, val) => {
      setValue(val);
    }

    const {tables} = props;

    return (
        <div>
            <h1>AMDIN VIEW</h1>
            <AppBar position="static">
                <Tabs value={value} onChange={handleTabs} variant="scrollable">
                    {tables.map((table, i) => (
                        <Tab key={i} label={table.TABLE_NAME}/>
                    ))}
                </Tabs>
            </AppBar>
            {tables.map((table, i) => (
                <TabPanel key={i} value={value} index={i}>
                    <MaterialTable table={table.TABLE_NAME} update_form={false}/>
                </TabPanel>
            ))}
        </div>
    )
}

function TabPanel(props) {
    const {children, value, index}=props;
    return (
        <div>
            {value===index && (
                <div>{children}</div>
            )}
        </div>
    )
}