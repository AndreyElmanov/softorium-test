import axios, { AxiosError } from "axios";
import { AllVacancyObjType, VacancyObjType } from "../helpers/types";

type GetAllVacancyType = () => Promise<AllVacancyObjType[]>;
type GetVacancyData = (slug: string) => Promise<VacancyObjType>;

const config = {
    base_url: 'https://newsite.softorium.pro/admin-area/api/visitor/vacancy',
};

class ApiVacancy {
    private api_root: string;

    constructor(props: typeof config) {
        this.api_root = props.base_url;
    }

    getAllVacancy: GetAllVacancyType = () =>
        new Promise((resolve, reject) => {
            axios.get<AllVacancyObjType[]>(`${this.api_root}`)
            .then(res => resolve(res.data))
            .catch((e: AxiosError) => reject(e))
        });

    getVacancyData: GetVacancyData = (slug) =>
        new Promise((resolve, reject) => {
            axios.get<VacancyObjType>(`${this.api_root}/${slug}`)
            .then(res => resolve(res.data))
            .catch((e: AxiosError) => reject(e))
        });
}

export const apiVacancy = new ApiVacancy(config);