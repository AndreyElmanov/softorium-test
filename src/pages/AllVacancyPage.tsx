import { Container, Spinner } from 'react-bootstrap';
import { useVacancyStore } from '../store/vacancy'
import AllVacancy from '../components/AllVacancy';

export default function AllVacancyPage() {
    const {allVacancy, isLoading} = useVacancyStore(state => state);

    return (
        <Container>
            <h1>Хочешь работать над</h1>
            <h1 className='gradient_text'>интересными проектами?</h1>
            <hr className='hr_w' />
            <p className='text-sm-start text-end'>в команду Softorium требуются:</p>
            {isLoading 
                ? <Spinner as='span'/>
                : <AllVacancy allVacancy={allVacancy}/>}
        </Container>
    )
}