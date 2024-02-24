export type BaseObjType = {
    name: string
};

export type AllVacancyObjType = {
    id: number
    main_technologies: BaseObjType[]
    more_technologies: BaseObjType[]
    name: string
    slug: string
};

export type VacancyObjType = {
    id: number
    is_active: boolean
    list_offer: BaseObjType[]
    main_technologies: BaseObjType[]
    min_requirements: BaseObjType[]
    more_technologies: BaseObjType[]
    name: string
    salary: string
    slug: string
    tasks: BaseObjType[]
};