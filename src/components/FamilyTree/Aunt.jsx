import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({ asset }) => {

    const [money, setMoney] = use(MoneyContext);

    const handleMoney = () => {
        setMoney(money + 5000)
    }

    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name='Tom Tom' asset={asset}></Cousin>
                <Cousin name='Jo Joo'></Cousin>
                <button onClick={handleMoney}>Add 5000 tk</button>
            </section>
        </div>
    );
};

export default Aunt; <h3>Aunt</h3>