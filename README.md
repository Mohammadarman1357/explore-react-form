------ Module 44 ------
-----------------------

----- React Core Concept Part 3 ------
--------------------------------------

1. Access form data using onSubmit and e target :
------------------------------------------------

npm create vite@latest explore-react-form -- --template react

  cd explore-react-form
  npm install
  npm run dev

SimpleForm :
-----------

const handleSubmit = (e) => {
        e.preventDefault();	--> default browser er value prevent/stop kore
        console.log(e.target.name.value);
        console.log(e.target.email.value)
       
}

<form onSubmit={handleSubmit}>
    <input type="text" name='name' placeholder='Your Name' />
    <br />
    <input type="email" name="email" placeholder='Your Email' />
    <br />
    <input type="submit" value="Submit" />
</form>

-----------------

e.preventDefault();	--> default browser er value prevent/stop kore

e.target --> select full form
e.target.name --> select name field 
e.target.name.value --> take name field value

e.target.[name of the input field].value

---------------------


2. use form action formData and controlled component :
-----------------------------------------------------

Control Field :
--------------

const [password, setPassword] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
}

const handlePasswordOnchange = e => {
    console.log(e.target.value);
}

<form onSubmit={handleSubmit}>
    <input type="email" name='email' placeholder='Email' required />
    <br />
    <input type="password" name='password' placeholder='Password' onChange={handlePasswordOnchange} defaultValue={password} required />
    <br />
    <input type="submit" value='Submit' />
</form>

-------------

defaultValue={password} --> default Value
onChange={handlePasswordOnchange} --> Change korar sate sate change hobe

use form action and formData in the action handler. formData.get('name of the input field.)

------------------


3. controlled and uncontrolled ways to collect form data :
---------------------------------------------------------

Error Handle :
-------------

const [password, setPassword] = useState('');
const [error, setError] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');

    if (password.length < 6) {
        setError('6 characters or longer password needed.')
    }
    else {
        setError('')
    }

}

const handlePasswordOnchange = e => {
    console.log(e.target.value);
    setPassword(e.target.value);

    if (password.length < 6) {
        setError('Password must be 6 characters or longer.');
    }
    else {
        setError('')
    }
}


<form>
<p style={{color:'red'}}><small>{error}</small></p>
</form>

--------------

 * 3. controlled component.one per each field. use state on change of the field. useful to dynamically handle error.
 * 
 * 4. handle all controlled field on the state object 
 * const [formData, setFormData] = useState({
 *  name: '',
 *  password: '',
 *  phone : ''
 * })
-------

uncontrolled field :
-------------------

const emailRef = useRef('');
const passwordRef = useRef('');

const handleSubmit = e => {
    e.preventDefault();
    console.log(emailRef.current.value);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);
}


<form onSubmit={handleSubmit}>
    <input type="email" ref={emailRef} name='' placeholder='Email' />
    <br />
    <input type="password" ref={passwordRef} name='' placeholder='Password' />
    <br />
    <input type="submit" value="Submit" />
</form>

-----------------------

ref={emailRef} --> access the value of email
ref={passwordRef} --> access the value of password

const email = emailRef.current.value;	--> take the value of email
const password = passwordRef.current.value; --> take the value of password

5. uncontrolled using useRef

-------------------------


4. Use Custom hook to reduce duplication of the code :
-----------------------------------------------------

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

    const handleNameOnChange = e => {
        setName(e.target.value);
    }

    const handleEmailOnChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordOnchange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if (password.length < 6) {
            setError('Password must be 6 characters or longer.');
        }
        else {
            setError('')
        }
    }

form :
------

<form onSubmit={handleSubmit}>
    <input type="text" name='name' placeholder='Name' onChange={handleNameOnChange} defaultValue={name} />
    <br />
    <input type="email" name='email' placeholder='Email' onChange={handleEmailOnChange} defaultValue={email} required />
    <br />
    <input type="password" name='password' placeholder='Password' onChange={handlePasswordOnchange} defaultValue={password} required />
    <br />
    <input type="submit" value='Submit' />
</form>

-------

useInputField :
--------------

const useInputFiled = (defaultValue) => {

    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handleFieldChange = e => {
        setFieldValue(e.target.value);
    }

    return [fieldValue, handleFieldChange];
};


Hook form :
----------
const [name, nameOnChange] = useInputFiled('');
const [email, emailOnChange] = useInputFiled('');
const [password, passwordOnChange] = useInputFiled('');

const handleSubmit = e => {
    e.preventDefault();
    console.log('submit', name, email, password);
}

<form onSubmit={handleSubmit}>
    <input defaultValue={name} onChange={nameOnChange} type="text" />
    <br />
    <input type="email" defaultValue={email} onChange={emailOnChange} name='email' />
    <br />
    <input type="password" defaultValue={password} onChange={passwordOnChange} />
    <br />
    <input type="submit" value='Submit' />
</form>


5. Create Product form and collect product data :
------------------------------------------------

see video....

Product form :
-------------

const handleProductSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    console.log(name, price, quantity);

    const newProduct = {
        name,
        price,
        quantity
    }

    console.log(newProduct);
}

<div>
    <h3>Add a Product</h3>
    <form onSubmit={handleProductSubmit}>
        <input type="text" name='name' placeholder='Product Name' />
        <br />
        <input type="text" name='price' placeholder='Product Price' />
        <br />
        <input type="text" name='quantity' placeholder='Product Quantity' />
        <br />
        <input type="submit" value='Submit' />
    </form>
</div>

----------------

6. Display form data in a table and form error handle :
------------------------------------------------------

product form :
-------------

const ProductForm = ({ handleAddProduct }) => {

    const [error, setError] = useState('');

    const handleProductSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        // console.log(name, price, quantity);
        // validation
        if (name.length === 0) {
            setError('Please Provide a product name');
            return;
        }
        else if (price.length === 0) {
            setError('Please provide a price');
            return;

        }
        else if (price > 0) {
            setError('Price can not be negative');
            return;
        }
        else {
            setError('')
        }

        const newProduct = {
            name,
            price,
            quantity
        }

        handleAddProduct(newProduct);
    }

------------


Product Table :
--------------

const ProductTable = ({ products }) => {
    return (
        <div>
            <h3>Products : {products.length}</h3>

            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};


ProductManagement :
------------------

const ProductMangement = () => {

    const [products, setProducts] = useState([]);

    const handleAddProduct = newProduct => {
        const newProducts = [...products, newProduct];
        setProducts(newProducts);
    }

    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

----------

if else-if --> it is better than 'return'. when if else-if occur. otherwise it will be occur error.

-----------


7. Create a Family Component Tree structure :
--------------------------------------------

prop drilling :
--------------

FamilyTree --> Grandpa --> Dad --> MySelf

------------


8. Introduction to Context API and simple context :
--------------------------------------------------

A simple error is can be arise a lot of problem.
If you want to be a programmer, you have to be a problem solving mind.


Context API :
------------

Step 1: Create the context 
------

FamilyTree :
-----------
- export const AssetContext = createContext('');
- import --> import { createContext } from 'react'

Jekane patabo sei ta ke Context ta k raka :
------------------------------------------

const newAsset = 'gold';

<AssetContext.Provider value={newAsset}>  --> value set kore dewa jeta lagbe seta
   <Grandpa asset={asset}></Grandpa>
</AssetContext.Provider>

Step 2: Use the context
------

Special :
--------
- const newAsset = useContext(AssetContext); --> useContext use kore AssetContext ke access kora
- import { AssetContext } from './FamilyTree';


9. Explore more context API and module summary :
-----------------------------------------------

/**
 * Context Creating :
 * 1. create a context using createContext with a default value
 * 2. make sure you export the context to be used in other files.
 * 
 */

To access Context you can use :
------------------------------

const [money, setMoney] = useContext(MoneyContext); --> useContext()
const [money, setMoney] = use(MoneyContext);	--> use()

<button onClick={() => setMoney(money + 1000)}>Add 1000 TK</button> -->


