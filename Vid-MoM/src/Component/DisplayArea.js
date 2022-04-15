import '../App.css';

export default function DisplayArea() {
    return (
        <div className='display-parent-div'>
            <h1 className='disp-heading'>
                How the weather affects the pain of citizen scientists using a smartphone app
            </h1>
            <div className='textarea'></div>
            <div className='download-btn-div'>
                <input type="submit" className='download-btn' 
                id='downloadSubmit' name='download-content' />
            </div>
        </div>
    )
}