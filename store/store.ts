import { atom } from 'jotai'

interface AppStore {
    name: string
}

const appAtom = atom({
    name: "HOC"
})