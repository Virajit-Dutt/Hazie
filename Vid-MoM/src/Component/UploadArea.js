import '../App.css';

export default function UploadArea() {

    return (
        <div className='parent-upload'>
            <div className='uploadarea-intro'>
                <h1 className='upload-heading'>Experience the Power of Hazie</h1>
                <p className='uplaod-desc'>
                Our AI-powered tool will create an interactive, summary flashcard — 
                perfect for screening, review and research communication.
                </p>
            </div>
            <div className='upload-article'>
                <h1 className='upload-art-heading'>Upload any article, report or book chapter</h1>
                <form action='' method='post' id='typeForm'>
                    <div className='upload-inputs'>
                        <div className='upload-url'>
                                <p>Enter the url</p>
                                <input type="url" className='url-input-box' />
                        </div>
                        <div className='upload-file-opt'>
                            <p>Upload the file</p>
                            <input type="file" id="choose_file" />
                        </div>
                    </div>
                    <div className='sub-btn-div'>
                        <input type="submit" className='form-submit-btn' 
                        id='formSubmit' name='generate-content' />
                    </div>
                </form>
            </div>
        </div>
    )
}