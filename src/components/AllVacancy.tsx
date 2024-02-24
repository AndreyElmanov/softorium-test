import VacancyBlock from './VacancyBlock';
import { AllVacancyObjType } from '../helpers/types';

type AllVacancyPropsType = {
    allVacancy: AllVacancyObjType[]
};

export default function AllVacancy({allVacancy}: AllVacancyPropsType) {
    return (
        <>
            {allVacancy.length > 0
                ? allVacancy.map(el => <VacancyBlock key={el.id} vacancy={el} />)
                : <h4>Вакансий нет</h4>}
        </>
    )
}