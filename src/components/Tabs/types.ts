import { Dispatch, SetStateAction } from 'react'
export type Tab = {
    value: string
    description: string
    active: boolean
}
export type SetTabs =
    Dispatch<SetStateAction<Tab[]>>;
