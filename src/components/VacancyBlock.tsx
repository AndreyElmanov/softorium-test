import { Card } from 'react-bootstrap';
import { AllVacancyObjType } from '../helpers/types';
import StackBlock from './StackBlock';
import MoreDetailsBtn from './MoreDetailsBtn';
import { useVacancyStore } from '../store/vacancy';

type VacancyBlockPropsType = {
    vacancy: AllVacancyObjType
};

export default function VacancyBlock({vacancy}: VacancyBlockPropsType) {
    const getVacancy = useVacancyStore(state => state.getVacancy)
    const handleGetVacancy = () => getVacancy(vacancy.slug);

    return (
        <div className='vacancy_block border_radius'>
            <Card className='d-flex flex-row my-5 p-4 z-1 position-relative border_radius'>
                <Card.Body>
                    <Card.Title>
                        {vacancy.name}
                    </Card.Title>
                    <div className='d-flex flex-wrap mb-1'>
                        <span>Основной стек:</span>
                        {vacancy.main_technologies.map((el, i) => <StackBlock text={el.name} key={i} />)}
                    </div>
                    <div className='d-flex flex-wrap'>
                        <span>Будет плюсом, если владеете:</span>
                        {vacancy.more_technologies.map((el, i) => <StackBlock text={el.name} key={i} />)}
                    </div>
                </Card.Body>
                <div className='show_block'>
                    <Card.Body className='d-flex align-items-center h-100 '>
                        <MoreDetailsBtn callBack={handleGetVacancy} />
                    </Card.Body>
                </div>
            </Card>
            <div className='show_block_2 mb-5'>
                <MoreDetailsBtn callBack={handleGetVacancy} />
            </div>
        </div>
    )
}