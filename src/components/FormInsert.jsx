import React from 'react'

const FormInsert = () => {
    return <div className='container pt-3 mt-3'>

        <form className="row g-3">
            <div className="mb-3 row">
                <label for="TypeDoc" className="col-sm-2 col-form-label">Tipo Documento</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="TypeDoc" value="" />
                </div>
            </div>
            <div className="mb-3 row">
                <label for="doc" className="col-sm-2 col-form-label">Documento</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="doc" />
                </div>
            </div>
            <div className="mb-3 row">
                <label for="name" className="col-sm-2 col-form-label">Nombres</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="name" />
                </div>
            </div>
            <div className="mb-3 row">
                <label for="lastname" className="col-sm-2 col-form-label">Apellidos</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="lastname" />
                </div>
            </div>
            <div className="mb-3 row">
                <label for="hobbie" className="col-sm-2 col-form-label">Hobbie</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="hobbie" />
                </div>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Guardar Datos</button>
            </div>
        </form>
    </div>

}

export default FormInsert