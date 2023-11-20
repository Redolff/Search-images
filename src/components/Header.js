import { Formik, Form, Field } from 'formik'
import '../style/Header.css'

const Header = ({ setPhotos }) => {

    return (
        <div className='header'>
            <Formik
                initialValues={{ search: '' }}
                onSubmit={async values => {
                    const response = await fetch(
                        `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
                            headers: {
                                'Authorization': 'Client-ID hgfFwbR1ms5e3IHeWeasho4YVfdvguQeYjKCFp846MY' 
                            }
                        }
                    )
                    const data = await response.json()
                    setPhotos(data.results)
                }}
            >
                <Form>
                    <Field name='search' />
                    <button type='submit' className='button-enviar'> Search </button>
                </Form>
            </Formik>
        </div>
    )
}

export default Header