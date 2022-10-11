import ParticipantsList from "../../components/ParticipantsList";
import { Form } from "../../components/Form/Form";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

const Configuration = () => {
    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Form />
                <ParticipantsList />
                <Footer />
            </section>
        </Card>
    )
};

export default Configuration;