import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as yup from 'yup';
import usePokemons from "../../hooks/usePokemons";

const PokemonsForm = () => {

  const { submitPokemonsForm, pokemon } = usePokemons();
  const { id } = useParams();
  const [formPokemon, setFormPokemon] = useState({
    name: '',
    type: '',
    hp: '',
    attack: '',
    special: '',
    image: {}
  });
  useEffect(() => {
    if (id && pokemon._id) {
      setFormPokemon(pokemon);
    }
  }, [id, pokemon]);

  return (
    <Formik
      initialValues={formPokemon}
      enableReinitialize
      validationSchema={yup.object({
        name: yup.string().required('El nombre es requerido'),
        type: yup.string().required('El tipo es requerido'),
        hp: yup.string().required('El hp es requerido'),
        attack: yup.string().required('El ataque es requerido'),
        special: yup.string().required('El especial es requerido'),
      })}
      onSubmit={async (values, actions) => {
        await submitPokemonsForm(values);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {({ handleSubmit, setFieldValue, isSubmitting }) => {
        return (
          <Form className="flex flex-col gap-4 bg-zinc-700 rounded-lg p-4 max-w-md mx-auto w-4/5 shadow-xl shadow-black/10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1">
              <Field name='name' placeholder='Nombre' className='rounded p-2 bg-zinc-800' />
              <ErrorMessage name="name" component='div' className="text-center text-rose-500 text-sm" />
            </div>
            <div className="flex flex-col gap-1">

              <Field name='type' placeholder='Tipo' className='rounded p-2 bg-zinc-800' />
              <ErrorMessage name="type" component='div' className="text-center text-rose-500 text-sm" />
            </div>
            <div className="flex flex-col gap-1">

              <Field name='hp' placeholder='HP' type='number' className='rounded p-2 bg-zinc-800' />
              <ErrorMessage name="hp" component='div' className="text-center text-rose-500 text-sm" />
            </div>
            <div className="flex flex-col gap-1">

              <Field name='attack' placeholder='Ataque' className='rounded p-2 bg-zinc-800' />
              <ErrorMessage name="attack" component='div' className="text-center text-rose-500 text-sm" />
            </div>
            <div className="flex flex-col gap-1">

              <Field name='special' placeholder='Especial' className='rounded p-2 bg-zinc-800' />
              <ErrorMessage name="special" component='div' className="text-center text-rose-500 text-sm" />
            </div>
            <input
              type='file'
              name='image'
              required={id ? false : true}
              onChange={(e) => {
                setFieldValue('image', e.currentTarget.files[0])
              }}
              accept=".jpg,.png,.jpeg" className='rounded p-2 bg-zinc-800 cursor-pointer file:bg-white file:rounded file:w- file:px-2 file:border-0 file:cursor-pointer file:font-semibold file:hover:bg-slate-300 file:transition-colors' />
            <button type='submit'
              className='disabled:bg-white/50 disabled:cursor-progress bg-cyan-300 text-black font-semibold rounded py-1 transition-colors hover:bg-white'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'loading 🕑' : id ? 'Editar' : 'Enviar'}
            </button>

          </Form>
        );
      }}
    </Formik>
  );
}

export default PokemonsForm