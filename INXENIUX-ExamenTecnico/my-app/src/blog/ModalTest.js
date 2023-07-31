export default function ModalTest({id, test})
{
    console.log(id)

    const myStyle = {
        color: 'black'
      };
    return (
        <div style={myStyle}>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${id}`}>
                {test !== true ? (<i className="fa-solid fa-pen"></i>) : (<h1>Test</h1>) }
            </button>

            <div className="modal fade modal-lg" id={id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h2>{id}</h2>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}