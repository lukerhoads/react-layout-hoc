import { atom } from 'jotai'

interface AppStore {
    name: string
}

export const appAtom = atom({
    name: "HOC"
})