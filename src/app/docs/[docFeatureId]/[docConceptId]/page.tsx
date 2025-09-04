import React from 'react'

const DocConcept = async ({ params }: {
    params: Promise<{ docFeatureId: string, docConceptId: string }>
}) => {

    const { docFeatureId, docConceptId } = (await params)
    return (
        <div>
            docs for: 
            {docFeatureId}, 
            {docConceptId}
        </div>
    )
}

export default DocConcept
