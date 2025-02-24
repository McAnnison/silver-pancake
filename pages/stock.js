import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const Label = styled.label`
    margin-bottom: 5px;
    font-weight: bold;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

const Button = styled.button`
    padding: 10px 15px;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #005bb5;
    }
`;

const Stock = () => {
    const [formData, setFormData] = useState({
        openingStock: '',
        production: '',
        totalInStock: '',
        dispatch: '',
        quantitiesRemaining: '',
        closingStock: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/stock', formData);
            console.log('Stock data submitted:', response.data);
        } catch (error) {
            console.error('Error submitting stock data:', error);
        }
    };

    return (
        <Container>
            <Title>Stock Control</Title>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Opening Stock:</Label>
                    <Input
                        type="number"
                        name="openingStock"
                        value={formData.openingStock}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Production:</Label>
                    <Input
                        type="number"
                        name="production"
                        value={formData.production}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Total In Stock:</Label>
                    <Input
                        type="number"
                        name="totalInStock"
                        value={formData.totalInStock}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Dispatch:</Label>
                    <Input
                        type="number"
                        name="dispatch"
                        value={formData.dispatch}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Quantities Remaining:</Label>
                    <Input
                        type="number"
                        name="quantitiesRemaining"
                        value={formData.quantitiesRemaining}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Closing Stock:</Label>
                    <Input
                        type="number"
                        name="closingStock"
                        value={formData.closingStock}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    );
};

export default Stock;