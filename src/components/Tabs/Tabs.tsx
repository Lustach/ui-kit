import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Context } from '@/App';
import { Tab as TabType } from './types';
import * as T from './Tabs.styled';
// import { TabContent } from './TabContent';
export const TabsC: React.FC<PropsWithChildren> = () => {
    const tabs = useContext(Context);
    const [activeTab, setActiveTab] = useState<TabType | null>(null);
    useEffect(() => {
        setActiveTab(tabs[0])
    }, [tabs]);

    const onClick = (tab: TabType) => {
        setActiveTab(tab);
    };

    return (
        <>
            {tabs && Array.isArray(tabs) && (
                <T.Container className="tab_container">
                    {tabs.map((tab, index) => (
                        <T.Tab key={index} $active={tab === activeTab} onClick={() => onClick(tab)}>
                            <span>{tab.value}</span>
                        </T.Tab>
                    ))}
                </T.Container >
            )}
            <T.TabContent $width={300} $height={500}>{activeTab?.description}</T.TabContent>
        </>
    );
};