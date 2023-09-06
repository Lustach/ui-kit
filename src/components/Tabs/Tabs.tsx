import React, { PropsWithChildren, useContext, useState } from 'react';
import { Context } from '@/App';
import { Tab as TabType } from './types';
import * as T from './Tabs.styled';

export const TabsC: React.FC<PropsWithChildren> = () => {
    const tabs = useContext(Context);
    const [activeTab, setActiveTab] = useState<TabType | null>(null);

    const onClick = (tab: TabType) => {
        setActiveTab(tab);
    };

    return (
        <>
            {tabs && Array.isArray(tabs) && (
                <T.Container className="tab_container">
                    {tabs.map((tab, index) => (
                        <T.Tab key={index} $active={tab === activeTab} onClick={() => onClick(tab)}>
                            {tab.value}
                        </T.Tab>
                    ))}
                </T.Container>
            )}
        </>
    );
};