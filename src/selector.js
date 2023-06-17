import { selector } from 'recoil'
import { animalFilterState, animalsState } from './atoms'

export const filteredAnimals = selector({
  key: 'filteredAnimalState',
  get: ({ get }) => {
    const filter = get(animalFilterState) // 'all', 'dog' atau 'cat'
    const animals = get(animalsState) // State awal didefinsikan dalam Atom

    // Menghasilkan state yang diperbarui berdasarkan nilai filter
    if (filter === 'all') return animals
    return animals.filter((animal) => animal.type === filter)
  },
})