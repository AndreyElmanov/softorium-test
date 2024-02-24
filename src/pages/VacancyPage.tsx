import { Card, Container, Spinner } from "react-bootstrap";
import { useVacancyStore } from "../store/vacancy";
import StackBlock from "../components/StackBlock";
import infoBlockImg from '../assets/infoBlockImg.jpg';
import minRequirementsBlockImg from '../assets/minRequirementsBlockImg.jpg';
import tasksBlockImg from '../assets/tasksBlockImg.jpg';
import offerBlockImg from '../assets/offerBlockImg.png';

export default function VacancyPage() {
    const {vacancy, isLoading} = useVacancyStore(state => state);

    return (
        <>
        {isLoading
            ? <div className={'d-flex justify-content-center '}>
                <Spinner as='span'/>
              </div>
            : <Container>
                <h1>Ищем {vacancy.name}'а</h1>
                <h1 className='gradient_text d-none d-sm-block'>Трудоустройство в аккредитованную ИТ-компанию</h1>
                <h1 className='gradient_text d-sm-none'>предлагаем от 150.000р на руки + печеньки</h1>
            {/* info block / инфо блок */}
                <Card className={'vacancy_info_block'}>
                    <Card.Body className={'d-flex flex-column-reverse flex-md-row align-items-md-center justify-content-md-between'}>
                        <Card.Text>
                            Мы любим сложные, интересные проекты, постоянно расширяемся и именно поэтому ищем новые таланты. В коллективе Softorium вы найдете возможность воплотить идеи любого уровня нестандартности и вместе с тем перенять опыт наших ведущих разработчиков.
                        </Card.Text>
                        <Card.Img src={infoBlockImg} alt='info block' className={'img_in_block'} />
                    </Card.Body>
                </Card>
            {/* min_requirements / минимальные требования */}
                <Card className={'vacancy_info_block'}>
                    <Card.Body className={'d-flex flex-column flex-md-row align-items-md-center justify-content-md-between'}>
                        <Card.Img src={minRequirementsBlockImg} alt='info block' className={'img_in_block'} />
                        <div className={'d-flex flex-column justify-content-center mx-auto'}>
                            <Card.Text className={'fw-bold'}>
                                Необходимый минимум:
                            </Card.Text>
                            <ul>
                                {vacancy.min_requirements.map((el, i) => <li className='li_orange' key={i}>{el.name}</li>)}
                            </ul>
                            <Card.Text className={'fw-bold'}>
                                Преимуществом будет знание:
                            </Card.Text>
                            <div className={'d-flex flex-wrap'}>
                                {vacancy.more_technologies.map((el, i) => <StackBlock key={i} text={el.name} />)}
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            {/* tasks / чем заниматься */}
                <Card className={'vacancy_info_block'}>
                    <Card.Body className={'d-flex flex-column-reverse flex-md-row align-items-md-center justify-content-md-between'}>
                        <div className={'d-flex flex-column'}>
                            <Card.Text className={'fw-bold'}>
                                Чем предстоит заниматься:
                            </Card.Text>
                            <ul>
                                {vacancy.tasks.map((el, i) => <li className='li_blue' key={i}>{el.name}</li>)}
                            </ul>
                        </div>
                        <Card.Img src={tasksBlockImg} alt='info block' className={'img_in_block'} />
                    </Card.Body>
                </Card>
            {/* list_offer / предложение компании */}
                <Card className={'vacancy_info_block'}>
                    <Card.Body className={'d-flex flex-column flex-md-row align-items-md-center justify-content-md-around'}>
                        <Card.Img src={offerBlockImg} alt='info block' className={'img_in_block'} />
                        <div className={'d-flex flex-column justify-content-center mx-auto'}>
                            <Card.Text className={'fw-bold'}>
                                Со своей стороны мы готовы предложить:
                            </Card.Text>
                            <ul>
                                {vacancy.list_offer.map((el, i) => <li className='li_orange' key={i}>{el.name}</li>)}
                            </ul>
                        </div>
                    </Card.Body>
                </Card>
              </Container>}
        </>
    )
}