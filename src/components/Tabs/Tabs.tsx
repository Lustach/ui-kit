import { PropsWithChildren, useContext } from 'react'
import {Context} from '@/App'
import * as T from './Tabs.styled'
type Props = {
    tabs: {
        value: string,
        description: string
    }[]
    onClick?: () => void;
}


export const Tabs: React.FC<PropsWithChildren<Props>> = () => {
    const [tabs, setTabs] = useContext(Context)
    const onClick = () => {
        console.log(tabs, 'click')
    }
    return (
        <>
            {
                tabs && Array.isArray(tabs) &&
                <T.Container className="tab_container" >
                    {tabs.map((tab, index) => (
                        <T.Tab key={index} className="tab" onClick={onClick}>{tab.value}</T.Tab>
                    ))}
                </T.Container>
            }
        </>
        // <S.Button $buttonType={buttonType} disabled={disabled} onClick={onClick}>{children}</S.Button>
    )
}
