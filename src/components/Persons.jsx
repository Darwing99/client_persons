import React from 'react'

const Persons = ({persons=[]}) => {
    return (
        <div className='container'>
            
            <div className='pt-5'>
            <h4>List Of Persons</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Cod</th>
                            <th scope="col">Type Document</th>
                            <th scope="col">Document</th>
                            <th scope="col">Name</th>
                            <th scope="col">last Name</th>
                            <th scope="col">Hobbie</th>
                            <th scope='col'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            persons.map((person)=>{
                                return  <tr key={person.id}>
                                    <th scope="row">{person.id}</th>
                                    <td>{person.TipoDocumento}</td>
                                    <td>{person.Documento}</td>
                                    <td>{person.Nombres}</td>
                                    <td>{person.Apellidos}</td>
                                    <td>{person.Hobbie}</td>
                                    <td><button type="button" class="btn btn-success">Success</button>
                                        <button type="button" class="btn btn-danger">Danger</button></td>
                                </tr>
                            })
                   
                        }

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Persons