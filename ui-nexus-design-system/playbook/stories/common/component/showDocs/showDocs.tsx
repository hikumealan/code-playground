import React from 'react';

const ShowDocs: React.FC<{docString: string}> = ({docString}) => {
    return(
        <div className='nexus-pt-4 nexus-body-sm'
        dangerouslySetInnerHTML={{ __html: docString }} />
    )
}

export default ShowDocs;