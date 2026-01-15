import { create } from 'zustand';

export const useHeroeStore = create((set) => ({
  heroeSeleccionado: null,
  setHeroeSeleccionado: (heroe) => set({ heroeSeleccionado: heroe }),
  cerrarDetalle: () => set({ heroeSeleccionado: null }),
}));