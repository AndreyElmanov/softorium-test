import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AllVacancyObjType, VacancyObjType } from '../helpers/types';
import { apiVacancy } from '../api/apiVacancy';

type VacancyStoreType = {
    isLoading: boolean;
    allVacancy: AllVacancyObjType[];
    vacancy: VacancyObjType;
    getAllVacancy: () => void;
    getVacancy: (slug: string) => void;
}

const initialVacancy: VacancyObjType = {
    id: 0,
    is_active: false,
    list_offer: [],
    main_technologies: [],
    min_requirements: [],
    more_technologies: [],
    name: '',
    salary: '',
    slug: '',
    tasks: [],
};

export const useVacancyStore = create<VacancyStoreType, [["zustand/persist", unknown]]>(
    persist(
        (set) => ({
            isLoading: false,
            allVacancy: [],
            vacancy: initialVacancy,
            getAllVacancy: () => {
                set({ isLoading: true });
                apiVacancy.getAllVacancy()
                .then(res => set({ allVacancy: res }))
                .catch(console.error)
                .finally(() => set({ isLoading: false }))
            },
            getVacancy: (slug) => {
                set({ isLoading: true });
                apiVacancy.getVacancyData(slug)
                .then(res => set({ vacancy: res }))
                .catch(console.error)
                .finally(() => set({ isLoading: false }))
            },
        }),
        {  
            name: 'vacancy',
            storage: createJSONStorage(() => localStorage)
        }
    ));